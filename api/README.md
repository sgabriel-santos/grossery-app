To test this application, follow the steps bellow:

## 1. Project Configuration

### 1.1 Installing project dependencies

- Install [Python](https://www.python.org/downloads/)

- Open cmd in the `grossery-app\api` directory
- Create a python virtual enviroment with: `py -m venv venv`
- Open the virtual enviroment with: `venv\Scripts\activate` (on Windows)
- Install the project dependencies with: `pip install -r requirements.txt`

```sh
py -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

After that, the project is successfully configured
But, It's necessary to configure database as in the next section


### 1.2 DataBase Configuration
- Install [MariaDB](https://mariadb.org/download/?t=mariadb&o=true&p=mariadb&r=10.3.13&os=windows&cpu=x86&pkg=msi)
- After that, open the HeidiSQL application and configure with this information:
```sh
User: root
Password: 123456
Port: 3306
```
- This information can be checked in `grossery-app\api\src\config\configDB.py`
- Create a new database in the root with the name grossery-app
- You don't need create the tables, just the database. More, in the next section

#### 1.2.2 To create database tables it's necessary perform the bellow command
- Open cmd in the `grossery-app\api` directory again
- perform `alembic upgrade head` command 
- For more information about alembic, see the section `2.1 About Alembic`

```sh
alembic upgrade head
```

**obs:** Using this command, the database is filled with some initial data.

### 1.3 Starting the BackEnd application

To test correctly:
- Open cmd in the `grossery-app\api` directory again
- perform this command: `uvicorn src.api:app --reload`
- The server will open on http://127.0.0.1:8000
- Open your browser at http://127.0.0.1:8000/docs

```sh
uvicorn src.api:app --reload
```