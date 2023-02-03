from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker

DATABASE_DIALECT = 'mysql+aiomysql'
DATABASE_USER = 'root'
DATABASE_PASSWORD = '123456'
DATABASE_HOST = 'localhost:3306'
DATABASE = 'grossery-app'

DATABASE_URL = \
    f'{DATABASE_DIALECT}://{DATABASE_USER}:{DATABASE_PASSWORD}@{DATABASE_HOST}/{DATABASE}'

engine = create_async_engine(DATABASE_URL, echo=False)
async_session  = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

origins = [
    "*" # Temporary. Just to Test the frontend
]


Base = declarative_base()