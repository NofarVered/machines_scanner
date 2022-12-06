
from repositories.sql_wrapper import db_wrapper
sql_select_all_accounts = """
                           SELECT *
                           FROM accounts
                        """

sql_delete_acount =  """
                                DELETE FROM accounts 
                                WHERE account_name = %s
                                
                                """
sql_delete_acount_machine =  """
                                DELETE FROM machines_accounts 
                                WHERE account_name = %s
                                
                                """

db = db_wrapper()

class Acount_repo:
    
         def delete_acount(acount_name):
            db.execute_delete_query(sql_delete_acount_machine,(acount_name))        
            db.execute_delete_query(sql_delete_acount,(acount_name))        
    