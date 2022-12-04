sql_select_all_users =    """
                           SELECT *
                           FROM accounts
                           """

sql_select_all_users_by_machine =    """
                                    SELECT *
                                    FROM accounts
                                    WHERE accounts.machine_id = %s
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