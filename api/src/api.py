from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.config.ConfigDB import origins
from src.routes.ProductRoutes import router

description = """
## Introduction
This application has as main objective the search for lower prices of products in the city of Manaus.
"""

app = FastAPI(
    title="Grossery Application",
    description=description,
    version="0.0.1",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router) 