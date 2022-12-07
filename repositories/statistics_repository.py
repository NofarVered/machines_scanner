from repositories.sql_wrapper import db_wrapper


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


db = db_wrapper()


class Statistics_repo:
    def getPrivilegedAmount():
        privilegedAmount = db.execute_select_all_query(sql_count_privilliged_accounts)
        return privilegedAmount

    def getNonPrivilegedAmount():
        nonPrivilegedAmount = db.execute_select_all_query(
            sql_count_not_privilliged_accounts
        )
        return nonPrivilegedAmount

    def getWindowsAmount():
        windowsAmount = db.execute_select_all_query(sql_count_windows_accounts)
        return windowsAmount

    def getMacAmount():
        macAmount = db.execute_select_all_query(sql_count_mac_accounts)
        return macAmount

    def getLinuxAmount():
        linuxAmount = db.execute_select_all_query(sql_count_linux_accounts)
        return linuxAmount

    # def getAllMachinesByAccount(acount_name):
    #     machines = db.execute_select_all_query(
    #         sql_select_machines_by_account, (acount_name)
    #     )
    #     return machines
