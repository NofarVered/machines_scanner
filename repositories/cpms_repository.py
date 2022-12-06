from repositories.sql_wrapper import db_wrapper

sql_select_all_cpms = """
                           SELECT *
                           FROM cpms
                    """


def get_cpms_list():
    db = db_wrapper()
    result = db.execute_select_all_query(sql_select_all_cpms, None)
    return result
