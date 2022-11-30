sql_insert_user =    """
                           INSERT IGNORE into transactions (amount,category,vendor) 
                           values (%s,%s,%s)
                           """