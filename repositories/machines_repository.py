from repositories.sql_wrapper import db_wrapper

sql_select_machines_by_account_not_removed = """
                                SELECT m.machine_id, m.operating_platform, ip_address, ma.enum_status
                                FROM machines m JOIN machines_accounts ma ON m.machine_id = ma.machine_id
                                WHERE ma.account_name =  %s AND ma.enum_status != 2 
                                """

sql_select_machines_by_account_removed = """
                                SELECT m.machine_id, m.operating_platform, ip_address, ma.enum_status
                                FROM machines m JOIN machines_accounts ma ON m.machine_id = ma.machine_id
                                WHERE ma.account_name =  %s AND ma.enum_status = 2 
                                """

sql_select_all_machines = """
                                SELECT m.*, ma.enum_status
                                FROM machines m JOIN machines_accounts ma ON m.machine_id = ma.machine_id
                                """


db = db_wrapper()


class Machines_repo:
    def getAllMachinesByAccount(acount_name):
        machines = db.execute_select_all_query(
            sql_select_machines_by_account_not_removed, (acount_name)
        )
        return machines

    def getAllMachinesByRemovedAccount(acount_name):
        machines = db.execute_select_all_query(
            sql_select_machines_by_account_removed, (acount_name)
        )
        return machines

    def getAllMachines():
        machines = db.execute_select_all_query(sql_select_all_machines)
        return machines
