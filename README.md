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






