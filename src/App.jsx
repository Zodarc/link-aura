import { HashRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
              <h1 className="text-3xl font-bold">✅ Link Aura is working</h1>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
