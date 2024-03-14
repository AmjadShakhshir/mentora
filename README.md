# Mentorna

Mentorna is a user-friendly platform simplifying marketing planning for businesses. Customers can easily share business details, budget, and campaign duration preferences, enabling us to create personalized and impactful marketing plans. By fostering clear communication, Mentorna empowers businesses to make informed decisions and elevate their marketing strategies for optimal success.

## Contents

- [Live](#live-preview)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Features](#project-features)
- [Project Structure](#project-structure)
- [Author](#author)

## Live

[link](mentorna.online)

## Technologies

![NodeJS](https://img.shields.io/badge/NodeJS-20.10.0-purple)
![ExpressJS](https://img.shields.io/badge/ExpressJS-4.18.2-red)
![Mongoose](https://img.shields.io/badge/Mongoose-8.0.0-yellow)
![React](https://img.shields.io/badge/React-18.2.0-blue)

## Getting started

- Clone the project `git clone https://github.com/AmjadShakhshir/mentora.git`;
- Create your `.env` file using `.env.example` file as an exaple and fill it with your credentials;
- Use `npm install` to install all dependencies and necessary packages;
- Then enter `cd frontend` then `npm install` to install all dependencies and necessary packages for frontend;
- Run the server using `npm run dev`;

## Project Features

### Entity CRUD Operations

The basic CRUD (Create, Read, Update, Delete) operations for the entities are implemented.

### Authentication and authorization

For security resons, certain endpoint are protected with the following middleware:

- authMiddleware: verifying is a user is logged in. Authentication implemented: using JWT and cookie-parser;

### Response Format

All API responses are provided in JSON format which includes a `status`, `data`, and an optional `message` field.

### Error Handling

To handle API errors, the errorMiddleware is implemented.

## Project Structure

Below is the high-level project folder structure represented.

```
 .
 ├── backend
 |  ├── controllers
 |  ├── middlewares
 |  ├── models
 |  ├── routes
 |  ├── services
 |  ├── utils
 |  ├── server.js
 ├── frontend
 |  ├── public
 |  ├── src
 |  |  ├── assets
 |  |  ├── common
 |  |  ├── features (I will extract folders from common to it)
 |  |  ├── App.jsx
 |  |  ├── index.css
 |  |  ├── main.jsx
 ├── .env.example
 ├── .gitignore
 ├── package.json
 └── README.md
```

## Author

- Website portfolio - [Amjad Shakhshir](https://www.amjadshakhshir.com)


