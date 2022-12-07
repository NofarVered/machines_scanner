from repositories.sql_wrapper import db_wrapper

sql_select_all_accounts = """
                           SELECT *
                           FROM accounts
                        """


sql_remove_acount_machine =  """
                                UPDATE machines_accounts
                                SET enum_status = 2
                                WHERE account_name = %s
                             """


db = db_wrapper()


class Accounts_repo:
    
         def removed_acount(acount_name):
            db.execute_update_query(sql_remove_acount_machine,(acount_name))        
           

         def getAllAccounts():
            accounts = db.execute_select_all_query(sql_select_all_accounts)
            return accounts


#  def getAllMachinesByAccount(acount_name):
#      machines = db.execute_select_all_query(
#          sql_select_machines_by_account, (acount_name)
#      )
#      return machines
