# Movie Favorites Project Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [API Endpoints](#api-endpoints)
   - [Add Favorite Movie](#add-favorite-movie)
   - [Get Favorite Movies](#get-favorite-movies)
   - [Remove Favorite Movie](#remove-favorite-movie)
5. [Frontend Integration](#frontend-integration)
6. [Usage](#usage)
7. [Contributing](#contributing)
8. [License](#license)

## Project Overview

This project is a movie favorites application that allows users to search for movies and save their favorite ones. It consists of a backend built with NestJS and a frontend built with React. Users can retrieve their favorite movies from the database and manage them effectively.

## Technologies Used

- **Backend**: NestJS
- **Frontend**: React
- **Database**: Prisma (with an SQL database)
- **API Client**: Axios (for making HTTP requests)
- **Styling**: CSS (in JSX)

## Installation

### Backend

1. Clone the backend repository:

   git clone <backend-repo-url>
   cd backend

2. Install dependencies:

   npm install
   

3. Set up environment variables (create a `.env` file):

   DATABASE_URL="your_database_connection_string"
   

4. Run the application:

   npm run start
   

   The backend will run on `http://localhost:3333`.

### Frontend

1. Clone the frontend repository:

   git clone <frontend-repo-url>
   cd frontend

2. Install dependencies:

   npm install
  

3. Run the application:

   npm start

   The frontend will run on `http://localhost:3000`.

## API Endpoints

### Add Favorite Movie

- **Endpoint**: `POST /favorites`
- **Description**: Adds a movie to the user's favorites.
- **Request Body**:
  ```json
  {
    "movieId": "string",  // ID of the movie
    "userId": 1           // ID of the user (should be a number)
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,              // ID of the favorite record
    "movieId": "string",  // ID of the movie
    "userId": 1           // ID of the user
  }
  ```

### Get Favorite Movies

- **Endpoint**: `GET /favorites/:userId`
- **Description**: Retrieves a list of favorite movies for a specific user.
- **Parameters**:
  - `userId`: The ID of the user (number).
- **Response**:
  ```json
  [
    {
      "id": 1,             // ID of the favorite record
      "movieId": "string", // ID of the movie
      "userId": 1          // ID of the user
    },
    ...
  ]
  ```

### Remove Favorite Movie

- **Endpoint**: `DELETE /favorites/:id`
- **Description**: Removes a favorite movie by its ID.
- **Parameters**:
  - `id`: The ID of the favorite record (number).
- **Response**: No content on successful deletion.

## Frontend Integration

The frontend consists of a `MovieSearch` component that allows users to search for movies and manage their favorites. It communicates with the backend API to retrieve and manage favorites.

### MovieSearch Component

- **Search Movies**: Users can input a movie name, and the application fetches results from the backend.
- **Add to Favorites**: Users can add a movie to their favorites by clicking the corresponding button.

## Usage

1. Start both the backend and frontend servers.
2. Navigate to the frontend in your browser (`http://localhost:5173/`).
3. Use the search bar to find movies.
4. Click "Add to Favorites" to save a movie.


