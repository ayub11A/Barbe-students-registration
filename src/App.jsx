// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./admin/Dashboard";
import Home from "./pages/Home";
import StudentRegistration from "./pages/StudentRegistration";
import About from "./pages/About";
import Teachers from "./pages/Teachers"; // public view
import Subjects from "./pages/Subjects"; // public view

// Admin Pages
import AdminTeachers from "./admin/AdminTeachers"; // admin editable
import AdminSubjects from "./admin/AdminSubjects"; // admin editable

// Context Providers
import { StudentProvider } from "./context/StudentContext";
import { TeacherProvider } from "./context/TeacherContext";
import { SubjectProvider } from "./context/SubjectContext";

function AppWrapper() {
  const [user, setUser] = useState(null); // User state

  // Pages where Header should NOT appear
  const noHeaderPaths = ["/login", "/register"];

  return (
    <StudentProvider>
      <TeacherProvider>
        <SubjectProvider>
          <div>
            {/* Header */}
            {window.location.pathname &&
              !noHeaderPaths.includes(window.location.pathname) && <Header />}

            <Routes>
              {/* Public Pages */}
              <Route path="/login" element={<Login setUser={setUser} />} />
              <Route path="/register" element={<Register />} />

              {/* Main Pages */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/student-registration" element={<StudentRegistration />} />

              {/* Protected Admin Pages */}
              <Route
                path="/admin/dashboard"
                element={
                  <ProtectedRoute user={user} adminOnly={true}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/AdminTeachers"
                element={
                  <ProtectedRoute user={user} adminOnly={true}>
                    <AdminTeachers />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin/AdminSubjects"
                element={
                  <ProtectedRoute user={user} adminOnly={true}>
                    <AdminSubjects />
                  </ProtectedRoute>
                }
              />

              {/* 404 */}
              <Route path="*" element={<h1 className="p-6">Page Not Found</h1>} />
            </Routes>

            <Footer />
          </div>
        </SubjectProvider>
      </TeacherProvider>
    </StudentProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}
