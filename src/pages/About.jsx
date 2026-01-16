import React from "react";
import background from "../assets/back3.jpeg";
import { IoAccessibilityOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ===== General fade animation ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

/* ===== Special text reveal animation (About paragraph) ===== */
const textReveal = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    letterSpacing: "-0.08em",
    originY: 0,
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    letterSpacing: "0em",
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

function About() {
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-20"
        >
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-6xl font-bold mb-6"
          >
            About Barbe School
          </motion.h1>

          {/* 🔥 SPECIAL ANIMATED PARAGRAPH */}
          <motion.p
            variants={textReveal}
            initial="hidden"
            animate="visible"
            className="text-sm md:text-2xl max-w-3xl mb-8 overflow-hidden origin-top"
          >
            Baarbe primary & secondary school, waa school astaantisu tahay aqoon
            iyo tayo. Waa ka mid ah schoolada ugu faca weyn guud ahaan gayiga
            Soomaaliyed.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              to="/student-registration"
              className="inline-block bg-orange-500 px-6 py-3 rounded hover:bg-orange-600 font-semibold transition"
            >
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* ================= INFO SECTION ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-gray-100 py-16 px-4 md:px-20 flex flex-col gap-12"
      >
        {/* History */}
        <motion.div
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
            Our History
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Schoolka waxa la aas aasay sanadii 1982. Tan iyo markaas, Barbe School
            waxay bixisaa waxbarasho tayo leh oo u hogaansan heerarka ugu
            wanaagsan ee Soomaaliya.
          </p>
        </motion.div>

        {/* Online Registration */}
        <motion.div
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
            Online Registration
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Schoolku wuxuu fursad u siinayaa waalidiinta Soomaaliyeed in ay
            ubadkooda si online ah iskaga diiwaan geliyaan meel kasta oo ay
            joogaan, gudaha iyo dibadda dalka.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={fadeUp}
          className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-900">
            Our Mission
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            In Barbe School ay bixiso waxbarasho tayo leh, kuna dhisto ardayda
            anshax, aqoon iyo karti ay ugu adeegaan mustaqbalka dalkooda.
          </p>
        </motion.div>
      </motion.div>

      {/* ================= WHY CHOOSE US ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-white py-16 px-4 md:px-20"
      >
        <motion.h2
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            variants={fadeUp}
            className="bg-gray-100 p-6 rounded shadow-md text-center"
          >
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Quality Education</h3>
            <p className="text-gray-700">
              Waxbarasho tayo sare leh oo u hogaansan manhaj casri ah.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-gray-100 p-6 rounded shadow-md text-center"
          >
            <IoAccessibilityOutline className="text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Activities</h3>
            <p className="text-gray-700">
              Tartamo aqooneed iyo sports lagu horumarinayo maskaxda iyo jirka
              ardayda.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="bg-gray-100 p-6 rounded shadow-md text-center"
          >
            <div className="text-4xl mb-4">🏆</div>
            <h3 className="text-xl font-semibold mb-2">
              Experienced Teachers
            </h3>
            <p className="text-gray-700">
              Macallimiin khibrad leh oo si dhow ula shaqeeya ardayda.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
