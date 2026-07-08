import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import ProfilePage from "./pages/ProfilePage";
import CourseDetailPage from "./pages/CourseDetailPage";

import Dashboard from "./pages/Dashboard";
import DashboardHome from "./pages/DashboardHome";
import DashboardCourses from "./pages/DashboardCourses";
import Login from "./pages/Login";

import "./App.css";

function App() {

    // Change to false to test Protected Route
    const isLoggedIn = true;

    return (

        <>
            <Header />

            <Routes>

                <Route path="/" element={<HomePage />} />

                <Route path="/courses" element={<CoursesPage />} />

                <Route path="/profile" element={<ProfilePage />} />

                <Route
                    path="/courses/:courseId"
                    element={<CourseDetailPage />}
                />

                <Route path="/login" element={<Login />} />

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isLoggedIn={isLoggedIn}>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<DashboardHome />} />
                    <Route
                        path="courses"
                        element={<DashboardCourses />}
                    />
                </Route>

            </Routes>

            <Footer />
        </>

    );

}

export default App;