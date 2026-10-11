[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=coverage)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Maintainability issues](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=software_quality_maintainability_issues)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Reliability issues](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=software_quality_reliability_issues)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)
[![Security issues](https://sonarcloud.io/api/project_badges/measure?project=janepium_lab12026Arqui&metric=software_quality_security_issues)](https://sonarcloud.io/summary/new_code?id=janepium_lab12026Arqui)

Aplicación construida en Spring Boot 3 con Java 17, con un pipeline automatizado de Integración Continua y Despliegue Continuo (CI/CD) usando GitHub Actions, análisis de calidad con SonarCloud y empaquetado en contenedores Docker.

## 🚀 Tecnologías empleadas
* **Java 17** y **Spring Boot 3.2.3**
* **Maven** para la gestión de dependencias
* **JUnit 5** y **Mockito** para pruebas unitarias
* **GitHub Actions** para la automatización del Pipeline CI/CD
* **SonarCloud** y **JaCoCo** para el análisis de calidad de código y cobertura
* **Docker** y **Docker Hub** para la generación e imagen de contenedores

## 📁 Estructura del proyecto
* `src/main/java`: Código fuente del Backend y controladores REST
* `src/test/java`: Pruebas unitarias de controladores y servicios
* `.github/workflows/build.yml`: Configuración del Pipeline de GitHub Actions

## 💻 Instrucciones de ejecución

### Ejecución local con Maven:
```bash
./mvnw spring-boot:run