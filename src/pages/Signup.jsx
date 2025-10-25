import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { toast } from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasMinLength = password.length >= 6;
    return hasUppercase && hasLowercase && hasMinLength;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill all fields!");
      return;
    }
    if (!validatePassword(password)) {
      toast.error("Password must be at least 6 characters and include upper & lower case!");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      toast.success("Account created successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      toast.success("Signed up with Google!");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>
        <input
          type="text"
          placeholder="Name"
          className="input input-bordered w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          className="input input-bordered w-full mb-4"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
        />
        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="input input-bordered w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div className="flex justify-between mb-4">
          <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
        </div>
        <button type="submit" className="btn btn-primary w-full mb-4">Register</button>
        <button type="button" onClick={handleGoogleSignup} className="btn btn-outline w-full">
          Signup with Google
        </button>
      </form>
    </div>
  );
};

export default Signup;
