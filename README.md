# FNP Blog

## Project Overview
FNP Blog is a modern blogging platform built with Spring Boot and Angular. It features user authentication, post management, and real-time notifications. The backend is powered by Java and MySQL, with authentication managed via JWT and Google Auth. Firebase is integrated for notifications.

## Features
- User authentication (JWT + Google Auth)
- Blog post creation, editing, and deletion
- Redis caching for session management
- Firebase notifications for real-time updates
- REST API for frontend communication

## Tech Stack
- **Backend:** Java (Spring Boot)
- **Database:** MySQL (Dockerized)
- **Authentication:** JWT with Redis, Google Auth Login
- **Frontend:** Angular
- **Notifications:** Firebase
- **Containerization:** Redis and MySQL running in Docker

## Installation & Setup
### Prerequisites
- Java 17+
- Node.js & Angular CLI
- Docker & Docker Compose
- MySQL & Redis (or use Dockerized versions)

### Setting up MySQL & Redis using Docker
```sh
# Run MySQL container
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=fnp_blog -p 3306:3306 -d mysql:latest

# Run Redis container
docker run --name redis-container -p 6379:6379 -d redis:latest
```

### Backend Setup
1. Clone the repository and navigate to the backend directory:
   ```sh
   git clone https://github.com/aditya9389/FnpBlog.git
   cd fnp-blog-backend
   ```
2. Configure the database in `application.properties`.
3. Run the backend:
   ```sh
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd fnp-blog-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular app:
   ```sh
   ng serve
   ```

## Authentication
- **JWT Authentication**: Used for session management with Redis as a caching layer.
- **Google Authentication**: Users can log in using their Google accounts.

## Notifications
- Firebase Cloud Messaging (FCM) is used to send real-time notifications to users.

## Future Improvements
- Full Dockerization of the backend and frontend
- Kubernetes deployment
- Enhanced security measures

## Contributing
Contributions are welcome! Feel free to submit issues or open pull requests.

## Contact
For any queries, reach out via email or GitHub issues.

