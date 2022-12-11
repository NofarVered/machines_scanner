from repositories.sql_wrapper import db_wrapper
from repositories.enum import operating_platform, scan_status

sql_select_all_recent_and_done_accounts = """
                                SELECT a.*
                                FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
                                WHERE sr.is_most_recent = 1 AND sr.scan_status = '3';
                               """

sql_select_get_accounts_by_machineId = """
                                SELECT a.*, enum_status
                                FROM accounts a JOIN machines_accounts ma ON a.account_name = ma.account_name
                                where ma.machine_id = %s
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

sql_get_all_removed_accounts = """
                                SELECT accounts.*
                                FROM accounts 
                                JOIN machines_accounts
                                ON accounts.account_name = machines_accounts.account_name
                                where machines_accounts.enum_status = 2
                                group by accounts.account_name
                             """


db = db_wrapper()


def enumHandler(accounts):
    for account in accounts:
        scan_status_number = account["enum_status"]
        account["enum_status"] = scan_status(scan_status_number).name
        print("i")
    return accounts


class Accounts_repo:
    def removed_acount(account_name, machine_id):
        accounts = db.execute_update_query(
            sql_remove_acount_machine, (account_name, machine_id)
        )
        return accounts

    def getAllAccounts():
        accounts = db.execute_select_all_query(sql_select_all_recent_and_done_accounts)

        return accounts

    def getAccountsByMachine(machine_id):
        accountsByMachine = db.execute_select_all_query(
            sql_select_get_accounts_by_machineId, (machine_id)
        )
        enumHandler(accountsByMachine)
        return accountsByMachine

    def getAllRemovedAccounts():
        try:
            return db.execute_select_all_query(sql_get_all_removed_accounts)
        except Exception as e:
            print(e)

    def getAlertedAccountsByScan(scan_id):
        accounts = db.execute_select_all_query()
        return accounts
