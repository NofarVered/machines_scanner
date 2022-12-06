use machines_scanner;

                                                SELECT COUNT(*) as number_of_nonPrivileged
                                                FROM
                                                (SELECT account_name, accounts.is_privileged
                                                FROM accounts
                                                WHERE is_privileged = 0 
                                                GROUP BY accounts.account_name) AS t 