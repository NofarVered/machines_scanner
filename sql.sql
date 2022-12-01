USE machines_scanners;


-- CREATE TABLE accounts(
--     account_name VARCHAR(255),
--     group_id INT,

--     PRIMARY KEY (account_name, group_id),

--     ip_address VARCHAR(255),
--     operating_platform VARCHAR(255),
--     account_category VARCHAR(255),
--     last_set_password DATETIME,

--     machine_id INT,
--     scan_id INT,
--     scanner_name VARCHAR(255)

-- );

-- CREATE TABLE scans(
--     scan_id INT NOT NULL,
--     scanner_name VARCHAR(255) NOT NULL,
--     discovery_name VARCHAR(255),
--     scan_status VARCHAR(255),

--     last_run_time DATETIME,
--     created_on DATETIME,
--     csv_file VARCHAR(255),

--     user_login_name VARCHAR(255),
--     user_login_password VARCHAR(255),
--     PRIMARY KEY(scan_id,scanner_name)

-- );


-- CREATE TABLE scanners(
--     scanner_name VARCHAR(255) PRIMARY KEY,
--     FOREIGN KEY(scanner_name) REFERENCES scans(scanner_name)
-- );

-- CREATE TABLE scan_history(
--     scan_id INT,
--     machine_id INT,

--     PRIMARY KEY (scan_id, machine_id),

--     FOREIGN KEY(scan_id) REFERENCES account(scan_id),
--     FOREIGN KEY(machine_id) REFERENCES account(machine_id)
-- );

-- CREATE TABLE removed_accounts(
--     account_name VARCHAR(255),
--     group_id INT,
--     machine_id INT,

--     scan_id INT,

--     PRIMARY KEY (account_name, group_id, machine_id, scan_id),

--     FOREIGN KEY(scan_id) REFERENCES scans(scan_id),
--     FOREIGN KEY(account_name) REFERENCES accounts(account_name),
--     FOREIGN KEY(group_id) REFERENCES accounts(group_id),
--     FOREIGN KEY(machine_id) REFERENCES accounts(machine_id)
-- );





-- DROP TABLE scans;