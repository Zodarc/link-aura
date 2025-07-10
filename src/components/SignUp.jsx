import { useState } from "react";
import { auth } from "../../firebase";

import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
      // Redirect or clear form here
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSignUp} className="max-w-sm mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="border p-2 w-full mb-4"
      />
      <input
        type="password"
        placeholder="Password (6+ chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        minLength={6}
        className="border p-2 w-full mb-4"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 w-full rounded">
        Sign Up
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </form>
  );
}
