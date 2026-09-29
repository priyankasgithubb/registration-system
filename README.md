# 🏢 Employee Visitor Management System

A full-stack **Visitor Management System** built using the **MERN Stack**.  
The application helps organizations maintain visitor records digitally and provides an easy way to add, view, search, edit, and delete visitor information.

🌐 **Live Website:**  
https://registration-system-nine-flax.vercel.app/

---

## 📌 About the Project

The Employee Visitor Management System is designed to simplify visitor registration and record management at an organization's reception desk.

Instead of maintaining visitor details manually, the system allows reception staff to store and manage visitor information through a simple web interface.

Visitor records are stored in **MongoDB**, while the frontend communicates with the backend through REST APIs.

---

## ✨ Features

- 📊 Dashboard with total visitor count
- 📅 Displays today's visitor count
- ➕ Add new visitor
- 👥 View all visitor records
- 🔍 Search visitors by name or mobile number
- ✏️ Edit visitor information
- 🗑️ Delete visitor records
- 🟢 Checked In / Checked Out status
- 🕒 Automatic date and time recording
- 📱 Responsive user interface
- ☁️ Cloud-based MongoDB database

---

## 📝 Visitor Information

The system stores the following details for every visitor:

- Visitor Name
- Mobile Number
- Email Address
- Company / College Name
- Person to Meet
- Purpose of Visit
- Date & Time
- Check-In / Check-Out Status

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- REST API

### Database

- MongoDB Atlas
- Mongoose

### Deployment

- **Frontend:** Vercel
- **Backend:** Render
- **Database:** MongoDB Atlas

---

## 🔄 Application Flow

```text
User
  ↓
React Frontend
  ↓
Fetch / REST API
  ↓
Node.js + Express Backend
  ↓
Mongoose
  ↓
MongoDB Atlas
```

---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/visitors` | Get all visitors |
| GET | `/api/visitors/:id` | Get visitor by ID |
| POST | `/api/visitors` | Add a new visitor |
| PUT | `/api/visitors/:id` | Update visitor |
| DELETE | `/api/visitors/:id` | Delete visitor |

---

## 📂 Project Structure

```text
registration-system/
│
├── frontend/
│   └── visitor/
│       ├── src/
│       │   ├── assets/
│       │   ├── pages/
│       │   │   ├── Dashboard.jsx
│       │   │   ├── AddVisitor.jsx
│       │   │   ├── Visitors.jsx
│       │   │   ├── SearchVisitor.jsx
│       │   │   └── EditVisitor.jsx
│       │   ├── App.jsx
│       │   ├── App.css
│       │   └── main.jsx
│       └── package.json
│
├── backend/
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd registration-system
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
```

Start the backend:

```bash
npm start
```

The backend will run locally on:

```text
http://localhost:5000
```

### 3. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend/visitor
npm install
npm run dev
```

The frontend will run on the local Vite development server.

---

## 🔐 Environment Variables

The backend requires the following environment variable:

```env
MONGO_URI=your_mongodb_atlas_connection_string
```

> Never upload the `.env` file or database credentials to GitHub.

---

## 🚀 Deployment

The application uses separate cloud services for each part of the MERN stack:

```text
Frontend  → Vercel
Backend   → Render
Database  → MongoDB Atlas
```

### Live Application

https://registration-system-nine-flax.vercel.app/

---

## 📚 Concepts Implemented

This project demonstrates:

- MERN Stack development
- CRUD Operations
- REST API development
- React Hooks (`useState`, `useEffect`)
- React Router
- API communication using `fetch()`
- MongoDB database operations
- Mongoose schemas and models
- Environment variables
- Responsive web design
- Cloud deployment

---

## 🔄 CRUD Operations

| Operation | HTTP Method | Implementation |
|-----------|-------------|----------------|
| Create | POST | Add Visitor |
| Read | GET | View Visitors |
| Update | PUT | Edit Visitor |
| Delete | DELETE | Delete Visitor |

---

## 🎯 Purpose

The project was developed to demonstrate the implementation of a practical full-stack application using the MERN stack.

It provides a simple digital solution for managing visitors entering an organization while demonstrating frontend development, backend API development, database integration, CRUD operations, routing, and deployment.

---

## 👩‍💻 Developed By

**Priyanka Tiwari**

B.Tech Computer Science & Engineering  
Brainware University

---

⭐ If you found this project useful, consider giving the repository a star!
