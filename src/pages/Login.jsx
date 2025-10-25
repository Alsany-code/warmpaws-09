import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { toast } from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate(from, { replace: true });
      toast.success("Login successful!");
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-left mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field with Toggle */}
          <div className="mb-4 relative">
            <label className="block text-left mb-1 font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full border border-gray-300 p-2 rounded pr-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-12 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right mb-4">
            <Link
              to="/forgot-password"
              state={{ email }}
              className="text-blue-600 hover:underline text-sm"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <Link to="/signup" className="text-blue-600 hover:underline">
            Don't have an account? Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
