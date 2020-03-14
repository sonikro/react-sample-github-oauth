# React Sample Github Oauth
This project was develop to study how to implement Github Authentication using Oauth and React

# Table of Contents
1. [Architecture](#architecture)
    1. [Frontend](#react-frontend)
    2. [Backend](#node-backend)
2. [Running locally](#running-this-project-locally)
3. [Running with docker-compose](#running-with-docker-compose)
## Architecture

### React Frontend
The React app will ask Github for the Authorizarion Code, then, after getting it back
from the Redirect URI, the React App will invoke a GET Method in the Backend Service,
in order to exchange the Authorization Code for a Bearer Token

### Node Backend

The NodeJS Backend act as a sample backend that knows about the ClientID and ClientSecret of the Github App

Since you shouldn't expose your Secret in the Frontend code, it's necessary to proxy the exchange throught a backend service

## Running this project locally

### Running the backend service

#### Step 1.
The backend service is located in the folder backend.
Create a file called *.env* in the *backend* folder, with the following content:

```dotenv
CLIENT_ID=<your_client_id_from_github>
CLIENT_SECRET=<your_client_secret_from_github>
```

If you don't have one, register your app at https://github.com/settings/applications/new

#### Step 2.

Run the following script to start the backend service
```shell script
cd backend
npm install
npm start
```

Your backend service should be listening at http://localhost:3001

### Running the React App

```shell script
yarn
yarn start
```

Your react app should be running at http://localhost:3000


## Running with docker-compose

Just create the .env file in the backend folder, with your *CLIENT_ID* and *CLIENT_SECRET*, and run the following command:
```shell script
docker-compose up -d
```

This will build the image for the Frontend and Backend service, and you'll be able to test your application at http://localhost:3000
# Usage

When you open the React app, if you're not logged in, you'll be automatically redirected to the Github Sign-in page
