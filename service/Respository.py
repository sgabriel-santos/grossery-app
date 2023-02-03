from datetime import datetime
from models import ProductModel, ProductInfoModel
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from sqlalchemy import insert, update, delete
from logging import info

product_model = ProductModel.Product
product_info_model = ProductInfoModel.ProductInfo

async def get_products(db: AsyncSession):
    response = await db.execute(select(product_model))
    return response.scalars().all()

async def delete_product_info_by_id_product(db: AsyncSession, id_product):
    info('Deleting older prices for database')
    response = await db.execute(
        delete(product_info_model)
        .where(product_info_model.id_product == id_product)
    )
    return response

async def update_last_update(db: AsyncSession, description: str) -> product_model:
    await db.execute(update(product_model)
        .where(product_model.description == description)
        .values({'last_update': datetime.now()})
    )

async def create_products(db: AsyncSession, products):
    info('Adding new prices in database')
    try:
        for product in products:
            await db.execute(
                insert(product_info_model).values(product)
            )
        return True
    except:
        print('Erro ao adicionar produto no banco')