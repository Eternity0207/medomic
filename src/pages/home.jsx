import React from "react";

const HomePage = () => {
  return (
    <div>
      <header className="bg-gray-100 text-center py-20">
        <h1 className="text-4xl font-bold text-blue-600">Welcome to MyWebsite</h1>
        <p className="text-gray-700 mt-4">
          Discover the amazing features and services we offer.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
          Get Started
        </button>
      </header>
      <section id="about" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
        <p className="text-gray-600 mt-4">
          We are passionate about delivering high-quality solutions that help you succeed.
        </p>
      </section>
      <section id="services" className="p-10 bg-gray-100">
        <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600">✔️ Custom Web Development</li>
          <li className="text-gray-600">✔️ Mobile App Development</li>
          <li className="text-gray-600">✔️ UI/UX Design</li>
        </ul>
      </section>
      <section id="contact" className="p-10 bg-white">
        <h2 className="text-3xl font-bold text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mt-4">
          Have questions? Feel free to reach out via email at contact@mywebsite.com.
        </p>
      </section>
      <footer className="bg-blue-600 text-white text-center py-4">
        &copy; 2025 MyWebsite. All Rights Reserved.
      </footer>
    </div>
  );
};

export default HomePage;
