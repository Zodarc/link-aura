import { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import {
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaApple,
  FaEye,
  FaEyeSlash,
  FaGlobe,
  FaChevronDown,
  FaStar, // Using FaStar instead of FaSparkles
  FaRocket,
} from "react-icons/fa";

// Import your local images
import model1 from "../assets/model1.jpg";
import model2 from "../assets/model2.jpg";
import model3 from "../assets/model3.jpg";

const images = [model1, model2, model3];

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Inject custom styles
  useEffect(() => {
    const styles = `
      @keyframes fade-in-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
      
      .animate-fade-in-up {
        animation: fade-in-up 0.8s ease-out;
      }
      
      .animate-shake {
        animation: shake 0.5s ease-in-out;
      }
      
      .hover\\:shadow-3xl:hover {
        box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
      }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  const handleEmailSignUp = async () => {
    setError("");
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log("Email signup:", email, password);
      setShowSuccessAnimation(true);
      setTimeout(() => setShowSuccessAnimation(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneSubmit = async () => {
    setError("");
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("Phone signup:", phone);
      setShowOtpInput(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log("OTP verification:", otp);
      setShowSuccessAnimation(true);
      setTimeout(() => setShowSuccessAnimation(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background circles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse follower effect */}
      <div
        className="absolute w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-20 pointer-events-none transition-all duration-300 ease-out blur-sm"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Success Animation Overlay */}
      {showSuccessAnimation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white p-8 rounded-2xl shadow-2xl animate-bounce">
            <div className="flex items-center space-x-4">
              <FaRocket className="text-3xl animate-spin" />
              <div>
                <h3 className="text-2xl font-bold">Success!</h3>
                <p className="text-green-100">Welcome to Link Aura!</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Top Navigation Bar */}
      <nav className="relative z-20 backdrop-blur-xl bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo with sparkle animation */}
            <div className="flex items-center space-x-2">
              <FaStar className="text-cyan-400 animate-pulse" />
              <h1 className="text-2xl font-bold text-white animate-pulse">Link Aura</h1>
              <FaStar className="text-purple-400 animate-pulse delay-500" />
            </div>

            {/* Navigation Links with hover animations */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-all duration-300 hover:scale-110 transform relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </div>

            {/* Right Side - Language, Login, Register */}
            <div className="flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-200"
                >
                  <FaGlobe size={16} />
                  <span className="hidden sm:block">EN</span>
                  <FaChevronDown size={12} />
                </button>
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-32 backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg shadow-lg">
                    <button className="block w-full px-4 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200">
                      English
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200">
                      Español
                    </button>
                    <button className="block w-full px-4 py-2 text-left text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200">
                      Français
                    </button>
                  </div>
                )}
              </div>

              {/* Login Link */}
              <a href="/login" className="text-white/80 hover:text-white transition-colors duration-200">
                Login
              </a>

              {/* Register Button */}
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center w-full max-w-6xl mx-auto px-6 relative z-10 pt-8">
        {/* Left side - Image Carousel */}
        <div className="hidden lg:flex lg:w-1/2 justify-center items-center pr-8">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl" style={{ height: '600px' }}>
            <img
              src={images[currentImage]}
              alt="Model"
              className="w-full h-full object-cover transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>

            {/* Image indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white' : 'bg-white/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side - Signup Form with entrance animation */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto animate-fade-in-up">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 transform">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 animate-bounce">Hello!</h2>
              <p className="text-xl text-white/80 animate-pulse">Welcome Back</p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-sm animate-shake">
                {error}
              </div>
            )}

            {!showOtpInput ? (
              <>
                <div className="space-y-4 mb-6">
                  <div className="relative group">
                    <input
                      type="email"
                      placeholder="Enter Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm transition-all duration-300 hover:bg-white/20 focus:scale-105"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                  <div className="relative group">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm pr-12 transition-all duration-300 hover:bg-white/20 focus:scale-105"
                    />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-all duration-300 hover:scale-125"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                  <div className="text-right">
                    <a href="#" className="text-cyan-400 hover:text-cyan-300 text-sm">
                      Recover Password?
                    </a>
                  </div>
                  <button
                    onClick={handleEmailSignUp}
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Signing Up...</span>
                      </div>
                    ) : (
                      <>
                        <span className="relative z-10">Sign Up</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center my-6">
                  <div className="flex-grow border-t border-white/20"></div>
                  <span className="mx-4 text-white/60">Or continue with</span>
                  <div className="flex-grow border-t border-white/20"></div>
                </div>

                <div className="flex justify-center space-x-4 mb-6">
                  <button className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:rotate-6">
                    <FcGoogle size={24} />
                  </button>
                  <button className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:-rotate-6">
                    <FaApple size={24} className="text-white" />
                  </button>
                  <button className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:rotate-6">
                    <FaFacebookF size={24} className="text-blue-400" />
                  </button>
                  <button className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:-rotate-6">
                    <FaTwitter size={24} className="text-sky-400" />
                  </button>
                  <button className="p-3 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-all duration-300 backdrop-blur-sm transform hover:scale-110 hover:rotate-6">
                    <FaGithub size={24} className="text-white" />
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-white/60">
                    Want to use your phone?{' '}
                    <button
                      onClick={() => setShowOtpInput(true)}
                      className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    >
                      Sign up with phone
                    </button>
                  </p>
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {!confirmationResult ? (
                  <>
                    <input
                      type="tel"
                      placeholder="+1234567890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    />
                    <div id="recaptcha-container"></div>
                    <button
                      onClick={handlePhoneSubmit}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send OTP'
                      )}
                    </button>
                  </>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      required
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent backdrop-blur-sm"
                    />
                    <button
                      onClick={handleOtpSubmit}
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Verifying...</span>
                        </div>
                      ) : (
                        'Verify OTP'
                      )}
                    </button>
                  </>
                )}
                <div className="text-center">
                  <button
                    onClick={() => {
                      setShowOtpInput(false);
                      setConfirmationResult(null);
                      setOtp("");
                      setPhone("");
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-semibold"
                    type="button"
                  >
                    Back to Email Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}