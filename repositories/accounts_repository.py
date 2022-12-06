sql_select_all_accounts = """
                           SELECT *
                           FROM accounts;
                        """
sql_select_all_recent_and_done_accounts = """
                                SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
                                FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
                                WHERE sr.is_most_recent = 1 AND sr.scan_status = '3';
                               """


def get_accounts():
    pass
