# DPS Backend Coding Challenge

## API Endpoints
The following API endpoints are implemented:

## Projects

POST /projects - Create a new project 

GET /projects - Retrieve all projects 

GET /projects/:id - Retrieve a project by ID 

PUT /projects/:id - Update a project 

DELETE /projects/:id - Delete a project

## Reports

POST /reports - Create a new report linked to a project 

GET /reports - Retrieve all reports 

GET /reports/:id - Retrieve a report by ID 

GET /reports/project/:projectId - Retrieve a report by Project ID 

PUT /reports/:id - Update a report 

DELETE /reports/:id - Delete a report

## Special Endpoint

GET /reports/special/:word - Retrieve all reports where the same word appears at least three times

## Overview

This repository contains a very basic web application based on Typescript and Express.js. Main application file is `index.ts`. Node and npm are required.

## Environment Setup

Ensure you have Node.js (v14.x or later) and npm (v6.x or later) installed.  
To set up and run the application, execute the following commands:

```
npm install
npm run dev
```

The application will then be accessible at http://localhost:3000.

## Project Context

You will develop a backend system for managing data about a company's projects and their associated reports. Each project may have multiple reports linked to it, though having reports is not mandatory. Start your implementation using the provided SQLite database([db/db.sqlite3](./db/db.sqlite3)).

Refer to the database schema provided for understanding the data structure 👇

![Database schema](images/database_schema.png)

NOTE: You can use ([db.service.ts](./src/services/db.service.ts)) to handle SQL queries to the database.

## Challenge Tasks

-   **Fork this project:** Start by forking this repository
-   **REST API Development:** Design and implement a RESTful API to create, read, update, and delete projects and their reports.
-   **Special API Endpoint:** Create an API endpoint that retrieves all reports where the same word appears at least three times.
-   **Optional:** Secure all API routes with a hardcoded authentication token ("Password123").
-   **Submission:** After completing the challenge, email us the URL of your GitHub repository.
-   **Further information:**
    -   If there is anything unclear regarding requirements, contact us by replying to our email.
    -   Use small commits, we want to see your progress towards the solution.
    -   Code clean and follow the best practices.

\
Happy coding!
