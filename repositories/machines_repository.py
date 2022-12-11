from repositories.sql_wrapper import db_wrapper
from repositories.enum import operating_platform, enum_status

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
                                group by m.machine_id
                                """


db = db_wrapper()


def enumStatusHandler(machines):
    for machine in machines:
        enum_status_number = machine["enum_status"]
        machine["enum_status"] = enum_status(enum_status_number).name
    return machines


def enumOPHandler(machines):
    for machine in machines:
        OP_enum_number = machine["operating_platform"]
        machine["operating_platform"] = operating_platform(OP_enum_number).name
    return machines


class Machines_repo:
    def getAllMachinesByAccount(acount_name):
        machines = db.execute_select_all_query(
            sql_select_machines_by_account_not_removed, (acount_name)
        )
        enumStatusHandler(machines)
        enumOPHandler(machines)
        return machines

    def getAllMachinesByRemovedAccount(acount_name):
        machines = db.execute_select_all_query(
            sql_select_machines_by_account_removed, (acount_name)
        )
        enumStatusHandler(machines)
        enumOPHandler(machines)
        return machines

    def getAllMachines():
        machines = db.execute_select_all_query(sql_select_all_machines)
        enumStatusHandler(machines)
        enumOPHandler(machines)
        return machines
