import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AOS from "aos";
import "aos/dist/aos.css";
import { AuthProvider } from "./hooks/useAuth";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorPage from "./pages/ErrorPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Toaster position="top-right" reverseOrder={false} />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<Signup />} />

          {/* ✅ Protected Services Page */}
          <Route
            path="/services"
            element={
              <ProtectedRoute>
                <Services />
              </ProtectedRoute>
            }
          />

          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ✅ Protected Profile Page */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* ✅ Protected Service Details */}
          <Route
            path="/service/:serviceId"
            element={
              <ProtectedRoute>
                <ServiceDetails />
              </ProtectedRoute>
            }
          />

          {/* Catch-all 404 */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
