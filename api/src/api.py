from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .config.ConfigDB import origins
from .routes.Routes import routes

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

for route in routes:
    app.include_router(route.router) 