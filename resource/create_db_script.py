import pymysql
import json
from constants import *

CONNECTOR = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="machines_scanner",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)


def create_database():
    try:
        with CONNECTOR.cursor() as cursor:
            cursor.execute(drop_db)
            cursor.execute(create_db)
            CONNECTOR.commit()
    except Exception as e:
        print(e)


def create_all_tables():
    try:
        with CONNECTOR.cursor() as cursor:
            cursor.execute(use_db)
            # code
            CONNECTOR.commit()
    except Exception as e:
        print(e)


def load_data():
    data = json_processor()
    # code
    try:
        with CONNECTOR.cursor() as cursor:
            # code
            CONNECTOR.commit()
            CONNECTOR.close()
    except Exception as e:
        print(e)


def json_processor(file_name):
    data_file = open(file_name)
    data = json.load(data_file)
    data_file.close()
    return data


# python create_db_script.py
if __name__ == "__main__":
    print("--- START creating DB machines_scanner")
    create_database()
    print("--- START creating tables")
    create_all_tables()
    print("--- DATABSE IS READY")
    load_data()
    print("--- DONE LOAD DATA")
