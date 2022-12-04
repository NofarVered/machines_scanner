import pymysql
from ..resource.exceptions import *

class db_wrapper:
    def __init__(self):
        try:
            self.connection = pymysql.connect(
                                                host='localhost',
                                                user='root',
                                                password="",
                                                db="bank",
                                                charset="utf8",
                                                cursorclass=pymysql.cursors.DictCursor
                                            )
        except pymysql.Error as e:
            print("Error while connecting to MySQL", e)

    def execute_insert_query(self, sql_query, params):
        try:
            self.connection.ping()
            with self.connection.cursor() as cursor:
                cursor.execute(sql_query, params)
                self.connection.commit()
                print(f'{params} inserted successfully')
                return cursor.lastrowid
        except pymysql.Error :
            raise DbError("Failed to execute insert query")

    def execute_delete_query(self, sql_query, params):
        try:
            self.connection.ping()
            with self.connection.cursor() as cursor:
                cursor.execute(sql_query, params)
                self.connection.commit()
                if not cursor.rowcount:
                   raise DbError("Failed to execute insert query") 
                print(f'{params} deleted successfully')

        except pymysql.Error as e:
            raise DbError("Failed to execute insert query")

    def execute_select_one_query(self, sql_query, params = None):
        try:
            self.connection.ping()
            with self.connection.cursor() as cursor:
                cursor.execute(sql_query, params) if params else cursor.execute(sql_query)
                result = cursor.fetchone()
                print(f'selected {result} successfully')
                return result
        except pymysql.Error:
            raise DbError("Failed to execute select one query")

    def execute_select_all_query(self, sql_query, params = None):
        try:
            self.connection.ping()
            with self.connection.cursor() as cursor:
                cursor.execute(sql_query, params) if params else cursor.execute(sql_query)
                result = cursor.fetchall()
                print(f'selected {result} successfully')
                return result
        except pymysql.Error as e:
            raise DbError("Failed to execute select all query")