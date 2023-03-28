from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from src.middleware.utils_db import get_session
from src.schemas import ProductInfoSchema
from src.controllers import ProductController
from typing import List

router = APIRouter(tags=["product"], prefix="/products")

# GET methods
@router.get("/")
async def get_products(db: AsyncSession = Depends(get_session)):
    return await ProductController.get_products(db)

@router.get("/info", response_model=List[ProductInfoSchema.ProductInfo])
async def get_products_info(description: str, db: AsyncSession = Depends(get_session)):
    return await ProductController.get_product_info_by_id_product(db, description)

@router.post("/info/many", response_model=List[ProductInfoSchema.ProductInfo])
async def get_info_from_many_products(products: list, db: AsyncSession = Depends(get_session)):
    return await ProductController.get_info_from_many_products(db, products)