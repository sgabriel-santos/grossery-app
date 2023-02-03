from sqlalchemy import Column, String, TIMESTAMP
from config.ConfigDB import Base

class Product(Base):
    __tablename__ = "product"

    description = Column(String(100), primary_key=True, index=True)
    last_update = Column(TIMESTAMP)