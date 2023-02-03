from sqlalchemy import Column, Integer, String, Float, ForeignKey
from src.config.ConfigDB import Base

class ProductInfo(Base):
    __tablename__ = "product_info"

    id = Column(Integer, primary_key=True, index=True)
    id_product = Column(String, ForeignKey('product.description'), nullable=False)
    description = Column(String(100), nullable=False)
    price = Column(Float, nullable=False)
    business = Column(String(100), nullable=False)
    location = Column(String(100), nullable=False)