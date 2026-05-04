# 🎓 University Student MIS

A minimal, modern Student Management Information System built with **PostgreSQL**, **Express.js**, **Angular 19**, and **Node.js**.

## ✨ What's in the Project?
- **Backend:** Node.js + Express REST API handling database, authentication, and Role-Based Access Control.
- **Frontend:** Angular 19 app with a modern Tailwind CSS UI, featuring dynamic tables and report generators.
- **Database:** PostgreSQL schema structured for a university setup.

## 🚀 How to Run

### 1️⃣ Database Setup
1. Open **pgAdmin** and create a database named `DB03`.
2. Run the `university_database.sql` script inside it to set up tables and insert dummy data.

### 2️⃣ Backend Setup
```bash
cd backend/
# Update the .env file with your DB credentials (DB_USER, DB_PASSWORD)

npm install
npm run setup   # Initializes the admin (Username: admin, Password: admin123)
npm start       # Starts server at http://localhost:3000
```

### 3️⃣ Frontend Setup
```bash
cd frontend/
npm install
npm start       # Starts app at http://localhost:4200
```