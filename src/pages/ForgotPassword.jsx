import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const ForgotPassword = () => {
  const location = useLocation();
  const prefillEmail = location.state?.email || "";
  const [email, setEmail] = useState(prefillEmail);

  const handleReset = (e) => {
    e.preventDefault();
    
    window.open("https://mail.google.com", "_blank");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleReset} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Reset Password</h2>
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered w-full mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn btn-primary w-full">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
