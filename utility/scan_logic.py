import json
import pymysql
import random


machines_list = [6, 1, 5, 14, 13, 12, 11, 7, 9, 4]

ip_list = ["134.21.29.219", "100.9.245.191", "122.144.213.206", "114.126.225.25",
           "111.238.47.38", "99.144.32.0", "58.236.152.104", "200.233.111.204",
           "150.86.39.9", "97.153.27.143", "220.191.43.66", "161.49.15.144",
           "154.45.140.63", "175.58.143.227", "145.139.45.152"]

CONNECTOR = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="machines_scanner",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)


def json_processor(file_name):
    data_file = open(file_name)
    data = json.load(data_file)
    data_file.close()
    return data


def execute_select_all_query(sql_query, params=None):
    try:
        with CONNECTOR.cursor() as cursor:
            cursor.execute(
                sql_query, params) if params else cursor.execute(sql_query)
            result = cursor.fetchall()
            print(f'selected {result} successfully')
            return result
    except pymysql.Error as e:
        raise e


def get_users_from_new_scan(ip_address_str):
    ip_address_list = ip_address_str.split()
    sql_get_machines = """
                        SELECT machine_id, ip_address
                        FROM machines;
                        """
    result = execute_select_all_query(sql_get_machines)
    approved_machines = [record["machine_id"]
                         for record in result if record["ip_address"] in ip_address_list]
    accounts_data = json_processor("utility/accounts_newscan.json")
    accounts_result = [
        record for record in accounts_data if record["machine_id"] in approved_machines]
    return accounts_result


# def get_users_from_rerun_scan(scan_id):
#     sql_get_accounts_by_scan = """
#                                 SELECT a.*
#                                 FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
#                                 WHERE sr.is_most_recent = 1 AND sr.scan_status = %s;
#                                """
#     accounts_list = execute_select_all_query(
#         sql_get_accounts_by_scan, (scan_id))
#     # remove 2 accounts that were exist in the last scan
#     rnd_exist = random.choices(accounts_list, k=len(accounts_list)-3)
#     new_accounts = json_processor("./new_accounts.json")
#     rnd_new = random.choices(new_accounts, k=1)
#     return rnd_exist.append(rnd_new)
#     # important note- don't forget to ignore scan_id field


