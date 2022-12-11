# machines_scanner

## Introduction

Our project is a final project as part of the end of the Yu Code course.
The project simulates scanning machines in a certain organization and obtaining accounts that have access to the organization, and presenting them to company personnel and tracking them in a convenient way.

## Running Instructions
1. Initialize the DB:
   use `create_db_script.py` to create machines_scanner DB, then create all the tables in this file.
2. Run again the script and load sepratly the data into the tables. `load_data` function to initialize the tables with mock data.
3. Run `server.py` and go to localhost:8000 to see the app.
4. Run `python -m uvicorn server:app ` to activate the client React Side.

## Flow

The user logs in to the home page, where the user (IT) get access according to premittions.

![log-in](https://user-images.githubusercontent.com/70105078/206912759-54ab4c60-dce8-4131-93d7-270033441147.png)

Then the user can see all active accounts that has access to the organization. After any time defined by the organization. Rescans will be performed in order to pick up changes regarding the active accounts

![accounts](https://user-images.githubusercontent.com/70105078/206913019-7a709261-d1ec-4da5-b8b5-e44e6119a24b.png)


in addition the user can see and control all scans that ran on the system

![scans](https://user-images.githubusercontent.com/70105078/206913043-9e5869cb-0667-40c2-8b6a-eed96dff7228.png)


## Features
START A NEW SCAN - the user has the option to insert a new scan - which be done by upload a csv file  with ip addresses (for scaninng machines).

![new scan](https://user-images.githubusercontent.com/70105078/206912664-2806f1ed-575a-43a6-b098-2a7ca4408fcf.png)


RERUN - in the scans page, the user can rerun the same scan that aleady ran in the past (a new feature that Not implemented in Cyberark's existing product)
In addition, after such an action, we will activate a security mechanism in which IT will look for suspicious activity in which an account that was previously removed has returned to receive login privileges. In this case a security alert will be displayed to the user!

![rerun](https://user-images.githubusercontent.com/70105078/206912509-a62e867a-d80f-4f80-a06f-b458ed7fa4e1.png)


MACHINES BY ACCOUNTS - the user can see all the machines that was scaned. and get all acounts of that came from that machines.  (a new feature that Not implemented in Cyberark's existing product. it was performed in an inconvenient way and was not visible to the user) 

![machines by accounts](https://user-images.githubusercontent.com/70105078/206912339-2f619cdc-6054-4c2a-bab4-c8919588547a.png)


STATISTICS - we added a new feature of presenting intersting statistics like Distribution of accounts by operating systems, comparison between privileged and non-privileged accounts and display of the number of successful scans versus failed scans.

![statistics](https://user-images.githubusercontent.com/70105078/206912171-a49fec75-12f8-4df3-90d1-abb0c53c53d2.png)

REMOVED ACCOUNTS - the user ia able to see history of accounts that was removed from the system and track them if needed. 
(a new feature that Not implemented in Cyberark's existing product. it was performed in an inconvenient way and was not visible to the user).

![removed accounts](https://user-images.githubusercontent.com/70105078/206913106-7931ab8f-4957-4667-afb4-eb568aca0019.png)


## DB Architecture

![erd_diagram](https://user-images.githubusercontent.com/70105078/206911902-a45b4ed4-15c1-4780-9cc6-bd99d71844d1.png)

# Technologies
![image](https://user-images.githubusercontent.com/70105078/201467752-6abce208-9681-4029-8757-5e7b849c8cd7.png)
![image](https://user-images.githubusercontent.com/70105078/201467773-36247067-2e4a-48bf-ad45-b5089a8c7c46.png)
![image](https://user-images.githubusercontent.com/70105078/201467796-8d87363e-3c9e-48d0-b69e-11f93563a45c.png)
![image](https://user-images.githubusercontent.com/70105078/201467810-3414f503-7749-48db-b42d-c8cda3bfa6e1.png)
![image](https://user-images.githubusercontent.com/70105078/203828161-b33ecefd-bf13-4094-8ee1-0eee05431916.png)







