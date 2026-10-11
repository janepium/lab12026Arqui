FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

FROM eclipse-temurin:17-jre-jammy
WORKDIR /app
COPY --from=build /app/target/lab12026.jar lab12026.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","lab12026.jar"]