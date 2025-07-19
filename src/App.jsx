// src/App.jsx
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white space-y-4 px-4">
              <h1 className="text-3xl font-bold">✅ Link Aura is working</h1>
              <Link
                to="/"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                Go to Home
              </Link>
              <Link
                to="/signup"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                Go to Sign Up
              </Link>
              <Link
                to="/login"
                className="text-cyan-400 underline hover:text-cyan-300"
              >
                Go to Login
              </Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
