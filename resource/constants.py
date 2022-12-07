drop_db = "DROP DATABASE machines_scanner;"
create_db = "CREATE DATABASE machines_scanner;"
use_db = "USE machines_scanner;"


create_cpms_table = """
    CREATE TABLE cpms(
    cpm_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    ip_addresses VARCHAR(255),
    last_activity_date DATETIME
);
"""

create_scan_requests_table = """
CREATE TABLE scan_requests(
    scan_id INT NOT NULL AUTO_INCREMENT,
    success_date DATETIME,
    execute_by VARCHAR(255),
    PRIMARY KEY (scan_id, success_date, execute_by),
    scan_name VARCHAR(255),
    scan_status INT,
    scan_file VARCHAR(255),
    is_most_recent BOOLEAN,
    cpm_id INT,

    FOREIGN KEY(cpm_id) REFERENCES cpms(cpm_id)
);
"""

create_accounts_table = """CREATE TABLE accounts(
    account_name VARCHAR(255) PRIMARY KEY,
    scan_id INT,
    is_privileged BOOLEAN,
    group_name VARCHAR(255),
    password_age INT,

    FOREIGN KEY(scan_id) REFERENCES scan_requests(scan_id)
);"""

create_machines_table = """CREATE TABLE machines(
    machine_id INT PRIMARY KEY AUTO_INCREMENT,
    operating_platform INT,
    ip_address VARCHAR(255)
);"""


create_machines_accounts_table = """CREATE TABLE machines_accounts(
    account_name VARCHAR(255),
    machine_id INT,
    PRIMARY KEY (account_name, machine_id),

    enum_status INT,
    
    FOREIGN KEY(machine_id) REFERENCES machines(machine_id),
    FOREIGN KEY(account_name) REFERENCES accounts(account_name)
);
"""


mock_accounts_file = "./mocks/accounts.json"
mock_machines_file = "./mocks/machines.json"
mock_cpms_file = "./mocks/cpms.json"
mock_scan_requests_file = "./mocks/scan_requests.json"
mock_machines_accounts_file = "./mocks/machines_accounts.json"

insert_to_scan_requests_table = """
                            INSERT IGNORE into scan_requests (scan_id, success_date, execute_by, scan_name, cpm_id, scan_status, scan_file, is_most_recent)
                            values (%s , %s, %s, %s, %s, %s, %s, %s)
                            """

insert_to_machines_accounts_table = """
                            INSERT IGNORE into machines_accounts (account_name,machine_id,enum_status)
                            values (%s , %s, %s)
                            """

insert_to_accounts_table = """
                            INSERT IGNORE into accounts (account_name, scan_id, is_privileged, group_name, password_age)
                            values (%s , %s, %s, %s, %s)
                            """

insert_to_cpms_table = """
                            INSERT IGNORE into cpms (cpm_id, ip_addresses, last_activity_date)
                            values (%s, %s, %s)
                            """

insert_to_machines_table = """
                            INSERT IGNORE into machines (machine_id, operating_platform, ip_address)
                            values (%s , %s, %s)
                            """
