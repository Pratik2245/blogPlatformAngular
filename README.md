# BlogSphere - Full Stack Blogging Platform

## Overview

BlogSphere is a full-stack blogging platform that allows users to create, read, update, and delete blog posts. Users can register, log in securely using JWT authentication, upload profile and blog cover images, like blogs, comment on posts, and manage their profiles.

Built with:

* Angular
* Node.js
* Express.js
* MongoDB
* JWT Authentication
* Multer
* Bootstrap

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Route Guards
* HTTP Interceptors
* Logout Functionality

### Blog Management

* Create Blog Posts
* Read Blogs
* Update Own Blogs
* Delete Own Blogs
* View Blog Details
* Blog Views Counter

### Social Features

* Like / Unlike Blogs
* Add Comments
* Delete Own Comments

### User Profile

* Update Profile
* Upload Profile Picture
* View Personal Dashboard
* View User Blogs

### Media Upload

* Blog Cover Image Upload
* Profile Image Upload
* Static Image Serving

---

## Tech Stack

### Frontend

* Angular
* TypeScript
* Bootstrap
* Angular Router
* HttpClient
* Route Guards
* Interceptors

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Multer
* bcryptjs

---

## Project Structure

### Frontend

src/

├── app/

│ ├── auth/

│ ├── blog/

│ ├── profile/

│ ├── services/

│ ├── guards/

│ ├── interceptors/

│ └── shared/

├── environments/

└── assets/

### Backend

backend/

├── controllers/

├── middleware/

├── models/

├── routes/

├── uploads/

├── server.js

└── .env

---

## API Endpoints

### Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

---

### Blogs

POST /api/blogs

GET /api/blogs

GET /api/blogs/:id

PUT /api/blogs/:id

DELETE /api/blogs/:id

POST /api/blogs/:id/like

---

### Comments

POST /api/comments

GET /api/comments/:blogId

DELETE /api/comments/:id

---

### Users

GET /api/users/profile

PUT /api/users/profile

GET /api/users/my-blogs

GET /api/users/dashboard

---

### Upload

POST /api/upload

---

## Installation

### Clone Repository

git clone <repository-url>

cd BlogSphere

---

### Backend Setup

cd backend

npm install

Create a .env file

PORT=3001

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

Run Backend

npm run dev

---

### Frontend Setup

cd frontend/blog-app

npm install

ng serve

Frontend URL:

http://localhost:4200

Backend URL:

http://localhost:3001

---

## Authentication Flow

User Registration

↓

Password Hashing (bcrypt)

↓

Store User in MongoDB

↓

Login

↓

Generate JWT Token

↓

Store Token in Local Storage

↓

HTTP Interceptor Adds Token

↓

Protected API Access

---

## Future Enhancements

* Rich Text Editor
* Blog Categories
* Search Functionality
* Pagination
* Bookmark Blogs
* Admin Dashboard
* Cloudinary Image Upload
* Dark Mode
* Angular Signals
* Notifications

---

## Learning Outcomes

This project demonstrates:

* Full Stack Development
* REST API Design
* Authentication & Authorization
* File Upload Handling
* Angular Routing
* Angular Services
* Interceptors & Guards
* MongoDB Relationships
* CRUD Operations
* State Management Concepts

---

## Author

Pratik

Upcoming Intern @ PTC India

Full Stack Developer | Angular | Node.js | MongoDB | Express.js
