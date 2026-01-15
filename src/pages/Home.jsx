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
        <div className="absolute inset-0 bg-black/80"></div>

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Welcome to Barbe Primary & Secondary School
          </h1>
          <p className="text-base md:text-2xl mb-6 max-w-2xl">
            A school built on quality education, discipline and excellence
          </p>
          <Link to="/student-registration">
          <a
    
            className="bg-orange-500 px-8 py-3 rounded text-lg hover:bg-orange-600 font-semibold"
          >
            Apply Now
          </a>
          </Link>
        </div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
  
      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-14">
          Why Choose Barbe School?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
            <div className="text-5xl mb-5">🎓</div>
            <h3 className="text-xl font-semibold mb-3">
              Quality Education
            </h3>
            <p className="text-gray-700">
              Waxbarasho tayo leh oo ku saleysan manhaj casri ah iyo anshax
              wanaagsan.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
            <div className="text-5xl mb-5">⚽</div>
            <h3 className="text-xl font-semibold mb-3">
              Activities & Sports
            </h3>
            <p className="text-gray-700">
              Tartamo aqooneed o u dhaxeya wilal iyo gabdhaba iyo sports oo dhisaya maskaxda iyo jirka ardayda.
            </p>
          </div>

          <div className="bg-gray-100 p-8 rounded-xl shadow text-center">
            <div className="text-5xl mb-5">🏆</div>
            <h3 className="text-xl font-semibold mb-3">
              Experienced Teachers
            </h3>
            <p className="text-gray-700">
              Macallimiin khibrad leh oo u heellan guusha iyo horumarka ardayda.
            </p>
          </div>
        </div>
      </section>


      {/* ================= SCHOOL STATS ================= */}
      <section className="py-14 bg-blue-900 text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center px-6">
          <div>
            <h3 className="text-4xl font-bold">40+</h3>
            <p className="mt-2">Years of Excellence</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">1200+</h3>
            <p className="mt-2">Students Enrolled</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold">60+</h3>
            <p className="mt-2">Qualified Teachers</p>
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="py-16 bg-gray-300 text-white text-center px-6">
        <h2 className="text-3xl font-bold mb-4">
          Secure Your Child’s Future Today
        </h2>
        <p className="mb-6 text-lg">
          Join one of the most trusted schools in Somalia
        </p>
       <Link
            to="/student-registration"
            onClick={() => setMenuOpen(false)}
            className="block text-center bg-blue900 w-[300px] h-[50px] ml-148 text-white py-2 rounded hover:bg-blue-600 font-semibold"
          >
            Register now
          </Link>
      </section>
    </div>
  );
}

export default Home;
