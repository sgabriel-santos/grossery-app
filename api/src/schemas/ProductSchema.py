from pydantic import BaseModel
from typing import Union

class Product(BaseModel):
    description: str
    last_update: Union[str, None] = None
    
    class Config:
        orm_mode = True
