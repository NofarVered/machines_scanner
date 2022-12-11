from repositories.sql_wrapper import db_wrapper
from repositories.sql_wrapper import connection


sql_count_privilliged_accounts = """
                                        SELECT COUNT(*) as number_of_privileged
                                        FROM
                                        (SELECT account_name, accounts.is_privileged
                                        FROM accounts
                                        WHERE is_privileged = 1 
                                        GROUP BY accounts.account_name) AS t                                     
                                """

sql_count_not_privilliged_accounts = """
                                        SELECT COUNT(*) as number_of_nonPrivileged
                                        FROM
                                        (SELECT account_name, accounts.is_privileged
                                        FROM accounts
                                        WHERE is_privileged = 0 
                                        GROUP BY accounts.account_name) AS t                                    
                                """

sql_select_all_privilliged_accounts = """
                                    SELECT *
                                    FROM accounts
                                    WHERE is_privileged = 1
                                    GROUP BY accounts.account_name
                                    """

sql_count_windows_accounts = """
                                        SELECT count(*) as num_of_windows_accounts FROM machines Where operating_platform = 1                                    
                                """

sql_count_mac_accounts = """
                                        SELECT count(*) as num_of_mac_accounts FROM machines Where operating_platform = 2                                    
                                """

sql_count_linux_accounts = """
                                        SELECT count(*) as num_of_linux_accounts FROM machines Where operating_platform = 3                                    
                                """

sql_count_accounts_amount = """
                            SELECT count(*) as active_accounts_amount
                            FROM accounts a 
                            JOIN scan_requests sr ON a.scan_id = sr.scan_id
                            WHERE sr.is_most_recent = 1 AND sr.scan_status = '3';
                            """

sql_count_machines_amount = """
                            SELECT count(DISTINCT machine_id) AS "Number of machines"
                            FROM machines
                            """

sql_count_successful_scans = """
                            SELECT count(*) as "Successful scans"
                            FROM scan_requests
                            WHERE scan_status = 3
                            """

sql_count_failed_scans = """
                            SELECT count(*) as "Failed scans"
                            FROM scan_requests
                            WHERE scan_status = 4
                            """
db = db_wrapper()


class Statistics_repo:
    def getPrivilegedAmount():
        connection.ping()
        privilegedAmount = db.execute_select_all_query(sql_count_privilliged_accounts)
        return privilegedAmount

    def getNonPrivilegedAmount():
        connection.ping()
        nonPrivilegedAmount = db.execute_select_all_query(
            sql_count_not_privilliged_accounts
        )
        return nonPrivilegedAmount

    def getWindowsAmount():
        connection.ping()
        windowsAmount = db.execute_select_all_query(sql_count_windows_accounts)
        return windowsAmount

    def getMacAmount():
        connection.ping()
        macAmount = db.execute_select_all_query(sql_count_mac_accounts)
        return macAmount

    def getLinuxAmount():
        connection.ping()
        linuxAmount = db.execute_select_all_query(sql_count_linux_accounts)
        return linuxAmount

    def getAccountsAmount():
        connection.ping()
        accountsAmount = db.execute_select_all_query(sql_count_accounts_amount)
        return accountsAmount

    def getMachinesAmount():
        connection.ping()
        machinesAmount = db.execute_select_all_query(sql_count_machines_amount)
        return machinesAmount

    def getSuccessfulScansAmount():
        connection.ping()
        succesfulScansAmount = db.execute_select_all_query(sql_count_successful_scans)
        return succesfulScansAmount

    def getfailedScansAmount():
        connection.ping()
        failedScansAmount = db.execute_select_all_query(sql_count_failed_scans)
        return failedScansAmount

    # def getAllMachinesByAccount(acount_name):
    #     machines = db.execute_select_all_query(
    #         sql_select_machines_by_account, (acount_name)
    #     )
    #     return machines
