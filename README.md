\# Banking Management System

[![Ask DeepWiki](https://img.shields.io/badge/Ask-DeepWiki-0284c7?style=flat-square&logo=github)](https://deepwiki.com/bajishaik0950/Banking-Management-System)

A full-stack banking application developed using Java, Spring Boot, React.js, and MySQL.



\## Features



\- Customer management

\- Bank account creation

\- Account balance viewing

\- Deposits and withdrawals

\- Fund transfers between accounts

\- Transaction history

\- Input validation



\## Technologies Used



\*\*Backend:\*\* Java 17, Spring Boot, Spring Data JPA, Hibernate, Maven, REST APIs



\*\*Frontend:\*\* React.js, JavaScript, Vite, HTML, CSS, Axios



\*\*Database:\*\* MySQL



\## Architecture



React.js → Axios → Spring Boot REST APIs → Service Layer → Spring Data JPA / Hibernate → MySQL



\## Project Structure



\- `bankingmanagementsystem/` — Spring Boot backend

\- `banking-frontend/` — React frontend



\## Prerequisites



\- JDK 17

\- MySQL Server

\- Node.js and npm

\- Maven



\## Database Setup



Create the database in MySQL:



```sql

CREATE DATABASE banking_db;

```



Configure the database connection securely in the backend before running the application.



\## Run the Backend



Open CMD in the project root:



```cmd

cd bankingmanagementsystem

mvn spring-boot:run

```



Backend URL: `http://localhost:8080`



\## Run the Frontend



Open a separate CMD in the project root:



```cmd

cd banking-frontend

npm install

npm run dev

```



Open the local URL displayed by Vite, usually `http://localhost:5173`.



Ensure MySQL and the backend are running before using the frontend.



\## Author



Java Full Stack Development Project



\## Purpose



Created for learning and portfolio demonstration.

