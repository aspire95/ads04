# MCQ Exam Portal

## How to Run

1. Create a PostgreSQL database.
   - Recommended database name: `DB23510014`
   - Run the SQL file: `schemas04.sql`

2. Create the backend environment file.
   - Copy `backend/.env.example` to `backend/.env`
   - Update the database username and password.

3. Start the backend.

```bash
cd backend
npm install
npm start
```

Backend URL: `http://localhost:5000`

4. Start the frontend in another terminal.

```bash
cd frontend
npm install
npm start
```

Frontend URL: `http://localhost:4200`

## Environment File Structure

Create `backend/.env` with this format:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=DB23510014
DB_USER=23510014
DB_PASSWORD=your_password
PORT=5000
```

## What Is in This Project

- Angular frontend for login, register, dashboard, exam taking, question entry and reports.
- Node.js and Express backend API.
- PostgreSQL database schema in `schemas04.sql`.
- Teacher features:
  - Create, edit and delete exams.
  - Add questions to exams.
  - Assign exams to students.
  - View student results.
- Student features:
  - Login and view assigned exams.
  - Attempt MCQ exams.
  - View submitted score.
- Simple SQL query examples:
  - `backend/q.txt`
  - `backend/q2.txt`

## Database Tables

- `users04`
- `exams04`
- `questions04`
- `exam_assignments04`
- `results04`

## Sample Login Data

- Teacher: `mayur` / `mayur123`
- Student: `rohan` / `rohan123`
