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
                                        SELECT COUNT(*) as number_of_privileged
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


db = db_wrapper()


class Statistics_repo:
    def getPrivilegedAmount():
        privilegedAmount = db.execute_select_all_query(sql_count_privilliged_accounts)
        return privilegedAmount

    # def getAllMachinesByAccount(acount_name):
    #     machines = db.execute_select_all_query(
    #         sql_select_machines_by_account, (acount_name)
    #     )
    #     return machines
