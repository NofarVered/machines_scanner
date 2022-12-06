from repositories.sql_wrapper import db_wrapper

sql_select_all_accounts = """
                           SELECT *
                           FROM accounts;
                        """
sql_select_all_recent_and_done_accounts = """
                                SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
                                FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
                                WHERE sr.is_most_recent = 1 AND sr.scan_status = '3';
                               """


sql_delete_acount = """
                                DELETE FROM accounts 
                                WHERE account_name = %s
                                
                                """
sql_delete_acount_machine = """
                                DELETE FROM machines_accounts 
                                WHERE account_name = %s
                             """


db = db_wrapper()


class Accounts_repo:
    def delete_acount(acount_name):
        db.execute_delete_query(sql_delete_acount_machine, (acount_name))
        db.execute_delete_query(sql_delete_acount, (acount_name))

    def getAllAccounts():
        accounts = db.execute_select_all_query(sql_select_all_accounts)
        return accounts
