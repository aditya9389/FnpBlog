# ---------- Stage 1: Build ----------
FROM maven:3.9.4-eclipse-temurin-17 AS builder

WORKDIR /build

COPY pom.xml .                             
COPY src ./src                              
COPY src/main/resources/application-docker.yml ./src/main/resources/   
COPY src/main/resources/fnp-blog-dac13-firebase-adminsdk-fbsvc-32442fc836.json ./src/main/resources/

RUN mvn clean package -DskipTests

# ---------- Stage 2: Run ----------
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=builder /build/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar", "--spring.profiles.active=docker"]
