# Fullstack clean architecture Twitter clone 

[![Deployment pipeline](https://github.com/oscarprdev/Twitter_clone/actions/workflows/workflow.yaml/badge.svg?event=pull_request)](https://github.com/oscarprdev/Twitter_clone/actions/workflows/workflow.yaml)

![image](https://github.com/oscarprdev/Twitter_clone/assets/94851836/1bad685e-b549-4be0-8663-0127e30ef258)

## Description

Frontend clean architecture application done with React, Redux, Typescript and Tailwind running with Golang api using PostgreSQL database as well as Cloudflare to store images on R2. 

In testing, it's working for unit tests with Vitest, React Testing Library, and Mock Service Worker enabling HTTP request interception. For end-to-end tests, I've opted for Playwright.

## Design system

Following clean architecture principles by Robert C. Martin, the application's core, represented by use cases, remains isolated from infrastructure (APIs) and the framework (e.g., React). 

This separation allows changes in one area without affecting others, enhancing flexibility and maintainability. 

The result is a frontend app with clear entry points (ports), organized functionalities (use cases), and distinct technical support (infrastructure and framework), promoting a clean and adaptable architecture.

Here it is an overview about how the clean architecture is working on this project: 


![Captura de pantalla 2024-01-19 a las 19 21 15](https://github.com/oscarprdev/Twitter_clone/assets/94851836/72f31785-ea42-44b7-aee5-c9bfec274614)

## Getting Started

To run the app locally, follow the steps below:

### Backend Environment Variables

Create a `.env` file in the `backend` directory using the provided example (`backend/.env.example`). Adjust the values according to your local environment.

```env
PORT=1111
HOST=https://your.host.name/
DB_URL=postgres://postgres:@your.url/{your.name.db}?sslmode=disable
SECRET=1234
```

### Install dependencies

Run the following command to install the necessary dependencies:

```
make install_app
```

### Create tables and schemas

Execute the following command to create tables and schemas:

```
make update_schemas
```

### Run the application

Start the frontend and backend servers using the following commands:

```
make start_f
make start_b
```
### Api spec

Navigate to the api_spec directory and open the API documentation using:

```
cd api_spec && make open_api
```



