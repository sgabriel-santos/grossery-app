from sqlalchemy.ext.asyncio import AsyncSession
from src.repository import ProductRepository
from src.schemas import ProductSchema
from typing import List

product_schema = ProductSchema.Product

# GET operations
async def get_product_info_by_id_product(db: AsyncSession, description) -> List[product_schema]:
    await create_product(db, description)
    response = await ProductRepository.get_product_info_by_id_product(db, description)
    await db.commit()
    return response

async def get_products(db: AsyncSession) -> List[product_schema]:
    return await ProductRepository.get_products(db)

async def get_product_by_description(db: AsyncSession, description: str):
    return await ProductRepository.get_product_by_description(db, description)

# CREATE OPERATIONS
async def create_product(db: AsyncSession, description: str) -> List[product_schema]:
    db_product = await get_product_by_description(db, description)
    if db_product: return
    
    await ProductRepository.create_product(db, description)
