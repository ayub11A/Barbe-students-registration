import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/background.jpeg"; // relative path

function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* School Info */}
        <div className="">
          <div className="flex items-center mb-4">
            <img
              src={Logo}
              alt="School Logo"
              className="h-14 w-14 object-cover rounded-full"
            />
            <span className="ml-3 text-xl md:text-2xl font-bold text-blue-900">
              Barbe School
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Barbe School is committed to providing quality education, strong
            values, and a safe learning environment for every student.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="text-gray-600 hover:text-blue-900">Home</Link></li>
            <li><Link to="/about" className="text-gray-600 hover:text-blue-900">About Us</Link></li>
            <li><Link to="/student-registration"className="text-gray-600 hover:text-blue-900">Student Registration</Link></li>
            <li><Link to="/teachers" className="text-gray-600 hover:text-blue-900">Teachers</Link></li>
          </ul>
        </div>

        {/* Academics */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Academics</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Primary Education</li>
            <li>Secondary Education</li>
            <li>Qualified Teachers</li>
            <li>Modern Curriculum</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>📍 Mogadishu, Somalia</li>
            <li>📞 +252 61 9 35 50 29</li>
            <li>📧 info@barbeschool.com</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-blue-900 mt-10 py-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Barbe School. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
