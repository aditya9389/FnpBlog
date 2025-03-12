FROM openjdk:21

WORKDIR /app

# Copy the Firebase JSON file
COPY src/main/resources/fnp-blog-dac13-firebase-adminsdk-fbsvc-32442fc836.json src/main/resources/

EXPOSE 8080

# Add the JAR file
ADD target/fnp-blog.jar fnp-blog.jar

# Start the application
ENTRYPOINT ["java", "-jar", "fnp-blog.jar"]
