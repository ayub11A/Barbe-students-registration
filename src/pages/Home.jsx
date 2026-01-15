import React from "react";
import background from "../assets/Background2.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen">
        <img
          src={background}
          alt="School Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-2xl  sm:text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Welcome to Barbe Primary & Secondary School
          </h1>
          <p className="text-sm sm:text-base md:text-2xl mb-6 max-w-2xl">
            A school built on quality education, discipline and excellence
          </p>
          <Link
            to="/student-registration"
            className="bg-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded text-sm sm:text-lg font-semibold hover:bg-orange-600 transition"
          >
            Apply Now
          </Link>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-16 sm:py-20 px-4 sm:px-10 md:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12 sm:mb-14">
          Why Choose Barbe School?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow text-center">
            <div className="text-4xl sm:text-5xl mb-4">🎓</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Quality Education
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Waxbarasho tayo leh oo ku saleysan manhaj casri ah iyo anshax wanaagsan.
            </p>
          </div>

          <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow text-center">
            <div className="text-4xl sm:text-5xl mb-4">⚽</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Activities & Sports
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Tartamo aqooneed oo u dhaxeya wiilal iyo gabdho, iyo sports oo dhisaya maskaxda iyo jirka ardayda.
            </p>
          </div>

          <div className="bg-gray-100 p-6 sm:p-8 rounded-xl shadow text-center">
            <div className="text-4xl sm:text-5xl mb-4">🏆</div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Experienced Teachers
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Macallimiin khibrad leh oo u heellan guusha iyo horumarka ardayda.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SCHOOL STATS ================= */}
      <section className="py-10 sm:py-14 bg-blue-900 text-white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center px-4 sm:px-6 md:px-10">
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">40+</h3>
            <p className="mt-2 text-sm sm:text-base">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">1200+</h3>
            <p className="mt-2 text-sm sm:text-base">Students Enrolled</p>
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl font-bold">60+</h3>
            <p className="mt-2 text-sm sm:text-base">Qualified Teachers</p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-12 sm:py-16 bg-gray-300 text-gray-900 text-center px-4 sm:px-6 md:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
          Secure Your Child’s Future Today
        </h2>
        <p className="mb-6 text-sm sm:text-base">
          Join one of the most trusted schools in Somalia
        </p>
        <Link
          to="/student-registration"
          className="inline-block bg-blue-900 text-white w-full sm:w-auto px-6 sm:px-10 py-2 sm:py-3 rounded hover:bg-blue-600 font-semibold transition"
        >
          Register Now
        </Link>
      </section>
    </div>
  );
}

export default Home;
