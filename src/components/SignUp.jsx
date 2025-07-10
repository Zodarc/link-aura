// src/components/SignUp.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  googleProvider,
  facebookProvider,
  twitterProvider,
  githubProvider,
  appleProvider,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "../../firebase";

import SocialLoginButtons from "./SocialLoginButtons";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {},
          "expired-callback": () => {
            alert("Recaptcha expired, please try again.");
          },
        },
        auth
      );
    }
  };

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setupRecaptcha();
    try {
      const result = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(result);
      setShowOtpInput(true);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await confirmationResult.confirm(otp);
      navigate("/dashboard");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-6 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>

        {error && <p className="text-red-500 mb-3">{error}</p>}

        {!showOtpInput ? (
          <>
            <form onSubmit={handleEmailSignUp} className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 border rounded"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
              >
                Sign Up with Email
              </button>
            </form>

            <div className="my-4 flex items-center">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-2 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social login buttons */}
            <SocialLoginButtons />

            <div className="my-4 text-center">
              <button
                onClick={() => setShowOtpInput(true)}
                className="text-green-600 underline hover:text-green-800"
              >
                Sign Up with Phone Number
              </button>
            </div>
          </>
        ) : (
          <form
            onSubmit={confirmationResult ? handleOtpSubmit : handlePhoneSubmit}
            className="space-y-4"
          >
            {!confirmationResult && (
              <>
                <input
                  type="tel"
                  placeholder="+1234567890"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
                <div id="recaptcha-container"></div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Send OTP
                </button>
              </>
            )}

            {confirmationResult && (
              <>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  required
                  className="w-full p-2 border rounded"
                />
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Verify OTP
                </button>
              </>
            )}

            <div className="mt-4 text-center">
              <button
                onClick={() => {
                  setShowOtpInput(false);
                  setConfirmationResult(null);
                  setOtp("");
                  setPhone("");
                }}
                className="text-gray-600 underline hover:text-gray-800"
                type="button"
              >
                Back to Sign Up
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
