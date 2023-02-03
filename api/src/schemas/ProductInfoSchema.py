from pydantic import BaseModel

class ProductInfo(BaseModel):
    description: str
    price: float
    business: str
    location: str
    
    class Config:
        orm_mode = True
