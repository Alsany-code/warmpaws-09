import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center justify-start py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-center text-primary">About Us</h1>
      <div className="max-w-3xl bg-white shadow-lg rounded p-8 text-gray-700 space-y-4">
        <p>
          Welcome to <strong>WarmPaws</strong>! We are passionate about providing the best pet care
          services to ensure your furry friends stay happy and healthy. Our mission is to make pet
          care easy, reliable, and trustworthy for every pet owner.
        </p>
        <p>
          Our team consists of experienced professionals dedicated to animal welfare. Whether it's
          grooming, medical checkups, or fun activities, we provide services that your pets will
          love.
        </p>
        <p>
          At WarmPaws, we believe that every pet deserves love, care, and attention. Thank you for
          trusting us with your beloved companions.
        </p>
      </div>
    </div>
  );
};

export default About;
