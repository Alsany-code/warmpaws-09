import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import servicesData from "../data/services.json";

const Services = () => {
 const { user, loading } = useAuth(); 

  
  if (loading) return null;


  if (!user) {
    toast.error("You need to log in first!"); 
    
    return <Navigate to="/login" replace />;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10 text-gray-800">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-semibold text-pink-600">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
