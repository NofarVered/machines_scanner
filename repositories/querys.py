sql_select_all_users = """
                           SELECT *
                           FROM accounts
                        """

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

sql_select_all_scans = """
                        SELECT *
                        FROM scan_requests
                        """

sql_select_all_cpms = """
                           SELECT *
                           FROM cpms
                    """

sql_select_all_recent_accounts = """
                                SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
                                FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
                                WHERE sr.is_most_recent = 1
                               """

sql_select_machines_by_account = """
                                SELECT m.machine_id
                                FROM machines m JOIN machines_accounts ma ON m.machine_id = ma.machine_id
                                WHERE ma.account_name =  values (%s)
                                """

insert_to_scan_requests_table = """
                            INSERT IGNORE into scan_requests (scan_id, success_date, execute_by, scan_name, cpm_id, scan_status, scan_file, is_most_recent)
                            values (%s , %s, %s, %s, %s, %s, %s, %s)
                            """
