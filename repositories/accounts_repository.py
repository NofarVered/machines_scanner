from repositories.models.account import Account
from repositories.sql_wrapper import db_wrapper

sql_select_all_accounts = """
                           SELECT *
                           FROM accounts
                        """

db = db_wrapper()


class Accounts_repo:
    #  def getAllAccountsByMachines(self, account: Scans):
    #      db.execute_insert_query(
    #          insert_to_scan_requests_table,
    #          (
    #              scan.cpm_id,
    #              scan.success_date,
    #              scan.execute_by,
    #              scan.scan_name,
    #              scan.cpm_id,
    #              scan.scan_status,
    #              scan.scan_file,
    #              scan.is_most_recent,
    #          ),
    #      )
    #      return scan

    def getAllAccounts():
        accounts = db.execute_select_all_query(sql_select_all_accounts)
        return accounts


# account_repo = Accounts_repo()
# account_repo.getAllAccounts()
