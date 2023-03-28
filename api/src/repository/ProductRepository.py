from sqlalchemy.ext.asyncio import AsyncSession
from src.models import ProductModel, ProductInfoModel
from src.schemas import ProductSchema
from sqlalchemy import insert
from sqlalchemy.future import select

product_model = ProductModel.Product
product_info_model = ProductInfoModel.ProductInfo
product_schema = ProductSchema.Product

# CREATE operations
async def create_product(db: AsyncSession, description: str):
    db_product = await db.execute(
        insert(product_model).values({"description": description})
    )
    return db_product


# READ operations
async def get_products(db: AsyncSession):
    product_list = await db.execute(
        select(product_model)
    )
    return product_list.scalars().all()

async def get_product_info_by_id_product(db: AsyncSession, description: str):
    product_list = await db.execute(
        f"SELECT * from product_info \
        where id_product like '{description}%'"
    )
    return product_list.all()

async def get_info_from_many_products(db: AsyncSession, products: list):
    if not len(products): return []
    
    if len(products) > 1:
        response = await db.execute(
            f"SELECT * FROM product_info \
            where id_product in {tuple(products)} order by price;"
        )
        return response.all() 
    
    return await get_product_info_by_id_product(db, products[0])

async def get_product_by_description(db: AsyncSession, description: str):
    product_list = await db.execute(
        select(product_model)
        .where(product_model.description == description)
    )
    return product_list.scalars().first()