# University Management System (UMS)

A RESTful web application for managing a university system, supporting user roles (Administrator, Teacher, Student) and full CRUD access to entities secured via JWT-based authentication.

## How to Run the Project

1) **Clone the repository**
   git clone <https://github.com/qazintelligence/university_management_system>
2) **Install dependencies**
   npm install
3) **Configure environment**
   - Create a `.env` file in the project root:
     PORT=5001
     MONGODB_URI=mongodb://localhost:27017/ums
     JWT_SECRET=your_jwt_secret
4) **Start the server**
   npm start
5) **Verify**
   - Server runs on `http://localhost:5001`
   - MongoDB must be running locally or via a connection string.

## Project Structure Overview

Below is the actual folder layout for the project:

- **`config/`**
  - `db.js` — MongoDB connection settings

- **`dtos/`**
  - `courseDTO.js` — Data transfer objects definitions

- **`factories/`**
  - `entityFactory.js` — Creates DTOs from raw input

- **`mappers/`**
  - `courseMapper.js` — Transforms Mongoose documents into DTOs

- **`middleware/`**
  - `auth.js` — JWT authentication guard
  - `roles.js` — Role‑based authorization

- **`models/`**
  - `User.js`, `Student.js`, `Course.js`, `Enrollment.js`

- **`routes/`**
  - `auth.js`, `students.js`, `courses.js`, `enrollments.js`

- **`services/`**
  - `userService.js`, `studentService.js`, `courseService.js`, `enrollmentService.js`

- **`strategies/`**
  - `courseSortingStrategy.js`, `CourseSortStrategyFactory.js`

- **`node_modules/`**

- **Configuration & root files**
  - `.env` — environment variables
  - `package.json` & `package-lock.json` — Node.js config
  - `server.js` — application entry point

## Example API Endpoints

### Authentication

- **Register**: `POST /auth/register`
- **Login**:    `POST /auth/login` (returns JWT)

### Students

- **Create**:  `POST /students` (ADMIN)
- **List**:    `GET /students` (all roles)
- **Get by ID**: `GET /students/:id`
- **Update**:  `PUT /students/:id` (ADMIN)
- **Delete**:  `DELETE /students/:id` (ADMIN)

### Courses

- **Create**:  `POST /courses` (TEACHER, ADMIN)
- **List**:    `GET /courses?sort={date|students|title}`
- **Get by ID**: `GET /courses/:id`
- **Update**:  `PUT /courses/:id` (TEACHER, ADMIN)
- **Delete**:  `DELETE /courses/:id` (ADMIN)

### Enrollments

- **Enroll**:  `POST /enrollments` (STUDENT, TEACHER, ADMIN)
- **List**:    `GET /enrollments` (all roles)

## Used Technologies

- **Node.js** & **Express**: Server and routing
- **MongoDB** & **Mongoose**: Data persistence
- **JWT** & **bcrypt**: Authentication & password hashing
- **dotenv**: Environment variable management
- **Strategy Pattern**: Course sorting
- **DTOs & Mappers**: Data encapsulation

## Build and Run Commands

- Install dependencies:  `npm install`
- Start development server:  `npm start`

## Contact Information

- **Developer**: Liana Smatulla
- **Email**:    beebee800800@gmail.com
- **GitHub**:   https://github.com/qazintelligence

