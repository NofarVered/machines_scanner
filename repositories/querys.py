sql_select_all_users = """
                           SELECT *
                           FROM accounts
                        """

# not good
sql_select_accounts_by_machine = """
                                    SELECT *
                                    FROM accounts
                                    WHERE accounts.machine_id = %s
                                """
# not good
sql_insert_scan = """
                    INSERT IGNORE into scan_iterations (scan_itersation_id,scan_itersation_name,scan_status,csv_file,scanner_name,last_run_time_date,user_credential)
                    values (%s , %s, %s, %s, %s, %s, %s)
                """

sql_count_privilliged_machine = """
                                        SELECT COUNT(*) as number_of_privileged
                                        FROM
                                        (SELECT account_name, accounts.is_privileged
                                        FROM accounts
                                        WHERE is_privileged = 1 
                                        GROUP BY accounts.account_name) AS t                                     
                                """

sql_count_not_privilliged_machine = """
                                        SELECT COUNT(*) as number_of_privileged
                                        FROM
                                        (SELECT account_name, accounts.is_privileged
                                        FROM accounts
                                        WHERE is_privileged = 0 
                                        GROUP BY accounts.account_name) AS t                                     
                                """
sql_count_not_privilliged_machine = """
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

# sql_select_all_recent_accounts = """
#                                     SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
#                                     FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
#                                     WHERE sr.is_most_recent = true
#                                     """


sql_select_all_account_by_machine = """
                                    SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
                                    FROM accounts a JOIN machine_accounts ma ON a.account_name = ma.account_name
                                    WHERE ma.machine_id = %s
                                    """

sql_select_all_privilliged_machine = """
                                        SELECT accounts.privilliged , COUNT(*)
                                        FROM accounts
                                        GROUP BY accounts.privilliged
                                        """
