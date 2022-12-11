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


Then the user can see all active accounts that has access to the organization. After any time defined by the organization. Rescans will be performed in order to pick up changes regarding the active accounts

## Features
START A NEW SCAN - the user has the option to insert a new scan - which be done by upload a csv file  with ip addresses (for scaninng machines).

RERUN - in the scans page, the user can rerun the same scan that aleady ran in the past (a new feature that Not implemented in Cyberark's existing product)
In addition, after such an action, we will activate a security mechanism in which IT will look for suspicious activity in which an account that was previously removed has returned to receive login privileges. In this case a security alert will be displayed to the user!

MACHINES BY ACCOUNTS - the user can see all the machines that was scaned. and get all acounts of that came from that machines.  (a new feature that Not implemented in Cyberark's existing product. it was performed in an inconvenient way and was not visible to the user) 

STATISTICS - we added a new feature of presenting intersting statistics like Distribution of accounts by operating systems, comparison between privileged and non-privileged accounts and display of the number of successful scans versus failed scans.

## DB Architecture

![erd_diagram](https://user-images.githubusercontent.com/70105078/206911902-a45b4ed4-15c1-4780-9cc6-bd99d71844d1.png)






