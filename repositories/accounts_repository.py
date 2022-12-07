from repositories.sql_wrapper import db_wrapper

sql_select_all_recent_and_done_accounts = """
                                SELECT a.*
                                FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
                                WHERE sr.is_most_recent = 1 AND sr.scan_status = '3';
                               """

sql_delete_acount = """
                    DELETE FROM accounts 
                    WHERE account_name = %s
                    """

sql_remove_acount_machine = """
                                UPDATE machines_accounts
                                SET enum_status = 2
                                WHERE account_name = %s
                                AND machine_id = %s
                             """


db = db_wrapper()


class Accounts_repo:

    def removed_acount(account_name, machine_id):
        db.execute_update_query(sql_remove_acount_machine,
                                (account_name, machine_id))

    def getAllAccounts():
        accounts = db.execute_select_all_query(
            sql_select_all_recent_and_done_accounts)
        return accounts

    def getAlertedAccountsByScan(scan_id):
        accounts = db.execute_select_all_query()
        return accounts
