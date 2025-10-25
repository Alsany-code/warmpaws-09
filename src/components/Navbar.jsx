import React from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useAuth } from "../hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");

      
      navigate("/login", { state: { fromLogout: true } });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex flex-col gap-5 lg:flex-row justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-primary">
        WarmPaws
      </Link>
      <div className="flex flex-col lg:flex-row gap-5 items-center ">
        <Link to="/" className="hover:text-primary">Home</Link>
        <Link to="/services" className="hover:text-primary">Services</Link>
        <Link to="/about" className="hover:text-primary">About Us</Link>
        <Link to="/profile" className="hover:text-primary">My Profile</Link>

        {user ? (
          <div className="flex items-center gap-2">
            <img
              src={
                user.photoURL ||
                "https://i.pinimg.com/736x/65/20/35/65203587f7796ba4abaac5f6e899bfa4.jpg"
              }
              alt="avatar"
              className="w-8 h-8 rounded-full"
              title={user.displayName || user.email}
            />
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-outline btn-error"
            >
              Logout
            </button>
          </div>
        ) : (
          <>
            <Link to="/login" className="btn btn-sm btn-primary">
              Login
            </Link>
            <Link to="/signup" className="btn btn-sm btn-secondary">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
