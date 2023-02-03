"""create product_info table

Revision ID: be3e38a6bbdd
Revises: 2530be85ef8a
Create Date: 2023-01-30 00:35:17.415635

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'be3e38a6bbdd'
down_revision = '2530be85ef8a'
branch_labels = None
depends_on = None

table_name = 'product_info'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('id_product', sa.String(100), sa.ForeignKey("product.description"), nullable=False),
        sa.Column('description', sa.String(100), nullable=False),
        sa.Column('business', sa.String(100), nullable=False),
        sa.Column('price', sa.Float, nullable=False),
        sa.Column('location', sa.String(1000), nullable=False),
    )


def downgrade() -> None:
    op.drop_table(table_name)