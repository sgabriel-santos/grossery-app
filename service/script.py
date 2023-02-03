from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from config.ConfigDB import async_session, engine
from logging import basicConfig, INFO, info
from time import sleep
import Respository
import utils
import asyncio

basicConfig(
    level=INFO,
    filename=f'logs/log_service.txt',
    filemode='a',
    encoding='utf-8',
    format='%(asctime)s ; %(message)s'
)

def search_product(product):
    search_bar = driver.find_element(By.ID, 'descricaoProd')
    search_bar.click()
    search_bar.clear()
    search_bar.send_keys(product)
    search_bar.send_keys(Keys.RETURN)

def get_lower_prices(product_description):
    info('Getting lower prices')
    list_of_products = driver.find_elements(By.CLASS_NAME, 'card.small.p')
    products_info = []
    for product in list_of_products:
        try:    
            products_info.append(utils.build_product_info(product, product_description))
        except:
            pass
    info(f'Number of prices found: {str(len(products_info))}')
    return products_info


async def grossery_service():
    while(True):
        async with async_session() as session:
            async with session.begin():
                products_db = await Respository.get_products(session)
            await engine.dispose()
        
            for product in products_db:
                info(f'PRODUCT:  {product.description}')
                if not utils.is_to_update(product.last_update, 10):
                    info(f'Its not time to update:  {product.description}')
                    continue
                
                async with session.begin():
                    search_product(product.description)
                    lower_prices = get_lower_prices(product.description)
                    if(len(lower_prices)):
                        await Respository.delete_product_info_by_id_product(session, product.description)
                        await Respository.create_products(session, lower_prices)
                        await Respository.update_last_update(session, product.description)
                        await session.commit()
                await engine.dispose()
                sleep(1)

options = webdriver.ChromeOptions()
options.add_argument("--headless")
driver = webdriver.Chrome(options=options)
print('capabilities -> ', driver.capabilities)
driver.create_options()
driver.maximize_window()
link = 'https://buscapreco.sefaz.am.gov.br/home'
driver.get(link)
utils.wait_render(driver, '#frmPesquisaBarra > div > div.col.s1 > a')
asyncio.run(grossery_service())