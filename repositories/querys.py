sql_select_all_cpms =    """
                           SELECT *
                           FROM cpms
                           """

sql_select_all_recent_accounts =    """
                                    SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
                                    FROM accounts a JOIN scan_requests sr ON a.scan_id = sr.scan_id
                                    WHERE sr.is_most_recent = true
                                    """


sql_select_all_account_by_machine =    """
                                    SELECT a.account_name , a.scan_id , a.is_privileged , a.group_name , a.password_age
                                    FROM accounts a JOIN machine_accounts ma ON a.account_name = ma.account_name
                                    WHERE ma.machine_id = %s
                                    """

sql_select_all_privilliged_machine =    """
                                        SELECT accounts.privilliged , COUNT(*)
                                        FROM accounts
                                        GROUP BY accounts.privilliged
                                        """

sql_insert_scan =        """
                            INSERT IGNORE into scan_iterations (scan_itersation_id,scan_itersation_name,scan_status,csv_file,scanner_name,last_run_time_date,user_credential)
                            values (%s , %s, %s, %s, %s, %s, %s)
                            """
    
sql_select_all_scans =    """
                           SELECT *
                           FROM scan_iterations
                           """

sql_insert_cpm =        """
                            INSERT IGNORE into scan_iterations (scan_itersation_id,scan_itersation_name,scan_status,csv_file,scanner_name,last_run_time_date,user_credential)
                            values (%s , %s, %s, %s, %s, %s, %s)
                            """