from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.common.by import By
from datetime import datetime, timedelta
from logging import debug, error, info
import constants

def build_product_info(product, product_description):
    description, price, update, business, address = product.text.split('\n')
    price = float(price[3:].replace(',', '.'))
    return  {
        "id_product": product_description,
        "description": description, 
        "price": price,
        "business": business, 
        "location": address
    }

def is_to_update(last_update, time):
    if not last_update:
        info('last_update is not defined, Continuing the service flow') 
        return True
    
    time_now = datetime.now()
    info(f'time_now: {time_now}')
    info(f'last_update: {last_update}')

    try:
        time_difference: timedelta = time_now - last_update
        time_difference = time_difference.seconds
        info(f'time_difference: {str(time_difference)}')
        info(f'time: {time}')
    except:
        error('Error making time difference')
        info('Returning True to continue the service flow')
        return True

    return time_difference >= int(time)

def wait_render(driver, element, type = By.CSS_SELECTOR) -> WebElement:
    return WebDriverWait(driver, timeout=constants.timeout).until(
        lambda d: d.find_element(type, element)
    )