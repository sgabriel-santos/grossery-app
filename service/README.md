To test this application, follow the steps bellow:

## 1. Project Configuration

### 1.1 Installing project dependencies

- Install [Python](https://www.python.org/downloads/)

- Open cmd in the `grossery-app\service` directory
- Create a python virtual enviroment with: `py -m venv venv`
- Open the virtual enviroment with: `venv\Scripts\activate` (on Windows)
- Install the project dependencies with: `pip install -r requirements.txt`

```sh
py -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

After that, the project is successfully configured.

### 1.2 DataBase Configuration
- The service is independent of the API, but the database must be created. Therefore. follow database setup steps in API Readme.

### 1.3 Starting the service

To test correctly:
- Open cmd in the `grossery-app\service` directory again
- perform this command: `py .\grossery-service.py`

```sh
py .\grossery-service.py
```