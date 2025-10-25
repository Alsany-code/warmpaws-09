import React from "react";
import { useParams, Navigate } from "react-router-dom";
import servicesData from "../data/services.json";
import { useAuth } from "../hooks/useAuth";
import BookingForm from "../components/BookingForm";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const { user } = useAuth();

  // Protected Route: if user not logged in, redirect to login
  if (!user) {
    return <Navigate to="/login" state={{ from: `/service/${serviceId}` }} replace />;
  }

  const service = servicesData.find(s => s.serviceId === parseInt(serviceId));

  if (!service) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl font-bold">Service not found!</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col lg:place-items-center lg:flex-row lg:justify-center gap-10 p-5">
        <img src={service.image} alt={service.serviceName} className="w-full lg:w-1/3 h-96 object-cover rounded" />
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">{service.serviceName}</h2>
          <p><strong>Provider:</strong> {service.providerName}</p>
          <p><strong>Email:</strong> {service.providerEmail}</p>
          <p><strong>Category:</strong> {service.category}</p>
          <p><strong>Rating:</strong> {service.rating} ⭐</p>
          <p><strong>Price:</strong> ${service.price}</p>
          <p><strong>Slots Available:</strong> {service.slotsAvailable}</p>
          <p>{service.description}</p>
        </div>
      </div>

      {/* Booking Form */}
      <div className="mt-10">
        <BookingForm serviceName={service.serviceName} />
      </div>
    </div>
  );
};

export default ServiceDetails;
