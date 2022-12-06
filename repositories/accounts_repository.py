from repositories.sql_wrapper import db_wrapper

sql_select_all_accounts = """
                           SELECT *
                           FROM accounts
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


#  def getAllMachinesByAccount(acount_name):
#      machines = db.execute_select_all_query(
#          sql_select_machines_by_account, (acount_name)
#      )
#      return machines
