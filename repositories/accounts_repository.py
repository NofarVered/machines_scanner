
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
                                

sql_select_machines_by_account = """
                                SELECT m.machine_id
                                FROM machines m JOIN machines_accounts ma ON m.machine_id = ma.machine_id
                                WHERE ma.account_name =  values (%s)
                                """

db = db_wrapper()

class Accounts_repo:
    
         def removed_acount(acount_name):
            db.execute_update_query(sql_remove_acount_machine,(acount_name))        
           

         def getAllAccounts():
            accounts = db.execute_select_all_query(sql_select_all_accounts)
            return accounts

         def getAllMachinesByAccount():
            machines = db.execute_select_all_query(sql_select_machines_by_account)
            return machines
         
    

    

# account_repo = Accounts_repo()
# account_repo.getAllAccounts()
