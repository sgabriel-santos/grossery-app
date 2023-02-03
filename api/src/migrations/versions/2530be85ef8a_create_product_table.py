"""create product table

Revision ID: 2530be85ef8a
Revises: 
Create Date: 2022-06-10 10:21:28.040523

"""
from alembic import op
import sqlalchemy as sa
from src.migrations.populate_table import populate_history


# revision identifiers, used by Alembic.
revision = '2530be85ef8a'
down_revision = None
branch_labels = None
depends_on = None

table_name = 'product'

def upgrade() -> None:
    op.create_table(
        table_name,
        sa.Column('description', sa.String(100), primary_key=True),
        sa.Column('last_update', sa.TIMESTAMP)
    )
    populate_history(table_name)


def downgrade() -> None:
    op.drop_table(table_name)
