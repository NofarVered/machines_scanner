import pymysql
import json
from constants import *

CONNECTOR = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="machines_scanner",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
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
            cursor.execute(create_cpms_table)
            cursor.execute(create_scan_requests_table)
            cursor.execute(create_accounts_table)
            cursor.execute(create_machines_table)
            cursor.execute(create_machines_accounts_table)
            # code
            CONNECTOR.commit()
    except Exception as e:
        print(e)


def load_data(sql_query, file_name):
    data = json_processor(file_name)
    try:
        with CONNECTOR.cursor() as cursor:
            for record in data:
                cursor.execute(sql_query, [field for field in record.values()])
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
    # print("--- START creating DB machines_scanner")
    # create_database()
    # print("--- START creating tables")
    # create_all_tables()
    # print("--- DATABSE IS READY")
    # load_data(insert_to_cpms_table, mock_cpms_file) 
    # load_data(insert_to_scan_requests_table, mock_scan_requests_file)
    # load_data(insert_to_accounts_table, mock_accounts_file)
    # load_data(insert_to_machines_table, mock_machines_file)
    load_data(insert_to_machines_accounts_table, mock_machines_accounts_file)
    print("--- DONE LOAD DATA")
