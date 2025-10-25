import React, { useState } from "react";
import { toast } from "react-hot-toast";

const BookingForm = ({ serviceName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill all fields!");
      return;
    }
    toast.success(`Service "${serviceName}" booked successfully for ${name}!`);
    setName("");
    setEmail("");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
      <h3 className="text-2xl font-bold mb-4">Book Service: {serviceName}</h3>
      <form onSubmit={handleBooking} className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
        <button type="submit" className="btn btn-primary w-full">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;
