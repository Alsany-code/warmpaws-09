import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ correct for v9+

import "swiper/css";
import "swiper/css/autoplay";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS styles
import servicesData from "../data/services.json";
import { Link } from "react-router-dom";

const Home = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Slider */}
    <section>
  <Swiper
    spaceBetween={30}
    slidesPerView={1}
    loop={true}
    modules={[Autoplay]}
    autoplay={{ delay: 3000 }}
  >
    <SwiperSlide>
      <div
        className="h-96 relative flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url("https://www.shutterstock.com/image-photo/portrait-cute-warmly-dressed-pug-600nw-2259186827.jpg")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text */}
        <h1 className="relative text-4xl font-bold text-red-200">
          Keep Your Pets Warm This Winter!
        </h1>
      </div>
    </SwiperSlide>

    <SwiperSlide>
      <div
        className="h-96 relative flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage: `url("https://www.shutterstock.com/shutterstock/photos/451603459/display_1500/stock-photo-cat-in-winter-clothes-on-a-walk-451603459.jpg")`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Text */}
        <h1 className="relative text-4xl font-bold text-blue-200">
          Winter Outfits for Cozy Pets
        </h1>
      </div>
    </SwiperSlide>
  </Swiper>
</section>


      {/* Popular Winter Care Services */}
      <section className="py-10 px-5 container mx-auto">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
          Popular Winter Care Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.length > 0 ? (
            servicesData.map((service) => (
              <div
                key={service.serviceId}
                className="card bg-white shadow-md hover:shadow-xl transition-shadow"
                data-aos="fade-up"
              >
                <figure>
                  <img
                    src={service.image}
                    alt={service.serviceName}
                    className="h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title">{service.serviceName}</h3>
                  <p>Rating: {service.rating} ⭐</p>
                  <p>Price: ${service.price}</p>
                  <Link
                    to={`/service/${service.serviceId}`}
                    className="btn btn-primary mt-2"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No services available</p>
          )}
        </div>
      </section>

      {/* Winter Care Tips */}
      <section className="bg-gray-100 px-5 py-10" >
        <div className="container place-items-center">
          <h2 className="text-3xl font-bold mb-4">Winter Care Tips for Pets</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Provide warm bedding and cozy blankets.</li>
            <li>Keep pets indoors during extreme cold.</li>
            <li>Regular grooming to maintain healthy fur.</li>
            <li>Use paw balm to protect from ice and snow.</li>
          </ul>
        </div>
      </section>

      {/* Meet Our Expert Vets */}
      <section className="py-10 px-5 container mx-auto">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
          Meet Our Expert Vets
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Dr. Sarah White", role: "Pet Nutrition Specialist" },
            { name: "Dr. John Smith", role: "Veterinary Surgeon" },
            { name: "Dr. Emily Brown", role: "Pet Grooming Expert" },
          ].map((vet, index) => (
            <div
              key={index}
              className="card bg-white shadow-md text-center p-6"
              data-aos="fade-up"
            >
              <img
                src="https://i.postimg.cc/XYv4s0Gq/default-avatar.png"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-bold text-xl">{vet.name}</h3>
              <p>{vet.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Section: Winter Nutrition Tips */}
      <section className="bg-blue-100 px-5 py-10">
        <div className="container place-items-center">
          <h2 className="text-3xl font-bold mb-4">Winter Nutrition Tips</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Feed high-calorie diets to maintain body warmth.</li>
            <li>Include omega-3 fatty acids for healthy fur.</li>
            <li>Provide warm meals instead of cold kibble.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
