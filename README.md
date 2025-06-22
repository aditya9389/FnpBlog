````markdown
# 📝 FNP Blog - Full Stack App (Spring Boot + Angular SSR)

A fully dockerized, production-ready blogging platform with secure auth, server-side rendering, Redis caching, and real-time notification support.

---

## 🧰 Tech Stack

- **Backend**: Spring Boot
- **Frontend**: Angular 17 + Universal (SSR)
- **Authentication**: Spring Security + JWT + Google OAuth
- **Cache**: Redis
- **Notifications**: Firebase Cloud Messaging
- **DevOps**: Docker, Docker Compose, Nginx

---

## 🔧 Core Features

- JWT-secured user authentication (with Google OAuth)
- Create, update, delete blog posts
- Angular SSR for SEO and performance
- Redis caching for fast response times
- Firebase notifications integrated via Google Console APIs
- Fully containerized deployment using Docker

---

## 🐳 Docker Setup

### To Run:

```bash
docker compose up --build
````

Ensure Docker Desktop is installed and running.

---

### Folder Structure

```
/fnpblog-backend
  └── Dockerfile

/fnpblog-frontend
  ├── Dockerfile
  ├── nginx.conf
  └── dist/fnpblog-frontend/browser

/docker-compose.yml
```

---

## 🧠 Key Fixes & Learnings

* ✅ Redis connection errors → Fixed with correct use of `spring.data.redis.host`
* ✅ JWT header issues → Resolved by custom interceptor in Angular
* ✅ SSR not rendering → Fixed Angular build output + Nginx routing
* ✅ Docker context issues → Fixed with precise Dockerfile structuring
* ✅ Angular dist not created → Manually triggered `ng build --configuration production`
* ✅ Firebase notification system integrated — yes, almighty Adii can handle Firebase too, with all those hard keys, Google Console configs, and secure cloud delivery 🍃

---

## 📦 Docker Compose Summary

* Spring Boot backend container with Redis
* Angular Universal frontend container served by Nginx
* Redis container for caching

---

## ✅ Highlights

* [x] Angular SSR setup
* [x] Spring Boot + Redis caching
* [x] JWT + Google OAuth authentication
* [x] Dockerized microservices with isolated containers
* [x] Firebase notifications integration
* [x] Fully functioning dev & prod setup with custom Nginx proxy

---

## 🚀 Future Ideas

* Kubernetes deployment
* MongoDB/PostgreSQL switch
* Email notification system
* Admin dashboard & analytics

---

## 👑 Final Words

This project isn’t a clone — it’s a well-thought-out, deeply engineered stack that proves I knows how to build, break, and perfect real-world systems.

