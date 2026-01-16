import React from "react";
import background from "../assets/Background2.jpeg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ================= ANIMATION VARIANTS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

function Home() {
  return (
    <div className="w-full">
      {/* ================= HERO SECTION ================= */}
      <div className="relative w-full h-screen">
        {/* BACKGROUND IMAGE – NO ANIMATION */}
        <img
          src={background}
          alt="School Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>

        {/* HERO CONTENT */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4"
        >
          <motion.h1
            variants={fadeUp}
            className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4"
          >
            Welcome to Barbe Primary & Secondary School
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-sm sm:text-base md:text-2xl mb-6 max-w-2xl"
          >
            A school built on quality education, discipline and excellence
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              to="/student-registration"
              className="bg-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded font-semibold hover:bg-orange-600 transition"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= WHY CHOOSE US ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white py-16 sm:py-20 px-4 sm:px-10 md:px-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Why Choose Barbe School?
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: "🎓",
              title: "Quality Education",
              text: "Waxbarasho tayo leh oo ku saleysan manhaj casri ah.",
            },
            {
              icon: "⚽",
              title: "Activities & Sports",
              text: "Tartamo aqooneed iyo sports horumariya ardayda.",
            },
            {
              icon: "🏆",
              title: "Experienced Teachers",
              text: "Macallimiin khibrad leh oo u heellan guusha ardayda.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-gray-100 p-6 rounded-xl shadow text-center"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= SCHOOL STATS ================= */}
      <motion.section
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="py-12 bg-blue-900 text-white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center px-6">
          {[
            { value: "40+", label: "Years of Excellence" },
            { value: "1200+", label: "Students Enrolled" },
            { value: "60+", label: "Qualified Teachers" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeUp}>
              <h3 className="text-3xl sm:text-4xl font-bold">
                {stat.value}
              </h3>
              <p className="mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= CALL TO ACTION ================= */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-14 bg-gray-300 text-center px-6"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl sm:text-3xl font-bold mb-4"
        >
          Secure Your Child’s Future Today
        </motion.h2>

        <motion.p variants={fadeUp} className="mb-6">
          Join one of the most trusted schools in Somalia
        </motion.p>

        <motion.div variants={fadeUp}>
          <Link
            to="/student-registration"
            className="bg-blue-900 text-white px-8 py-3 rounded hover:bg-blue-600 transition font-semibold"
          >
            Register Now
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Home;
