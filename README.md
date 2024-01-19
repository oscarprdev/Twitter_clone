[![Deployment pipeline](https://github.com/oscarprdev/Twitter_clone/actions/workflows/workflow.yaml/badge.svg?branch=main)](https://github.com/oscarprdev/Twitter_clone/actions/workflows/workflow.yaml)

# Twitter clone

https://opr-twitter-clone.vercel.app/

Welcome to my Twitter clone, a platform designed for sharing posts with images and also features like post likes and user following.

## Technology Stack

### Frontend
- **Framework:** React
- **State Management:** Redux
- **Language:** Typescript
- **Styling:** Tailwind CSS

### Backend
- **Language:** Golang
- **Database:** PostgreSQL
- **Server Runtime:** Node.js
- **Edge Computing:** Cloudflare R2

### Testing
- **Unit Testing:** Vitest
- **Component Testing:** React Testing Library
- **End-to-End Testing:** Playwright


## App Design Structure
Our application is meticulously crafted with a clean architecture, ensuring a well-organized and maintainable codebase. Both the frontend application and backend APIs adhere to this structured design.

### Frontend Design
In the frontend, the user interface (UI) is thoughtfully decoupled from the application features, fostering modularity and flexibility. This separation allows for easier development, testing, and future enhancements.

### Backend Design
Similar to the frontend, the backend APIs are organized following a clean architecture. The features are meticulously decoupled from the infrastructure, promoting a modular and scalable backend design. This architectural choice enhances maintainability and makes it simpler to introduce new functionalities or modify existing ones.


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

### run the application

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



