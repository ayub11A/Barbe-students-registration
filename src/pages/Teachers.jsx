import React, { useContext } from "react";
import { TeacherContext } from "../context/TeacherContext";
import { motion } from "framer-motion";

/* ============ ANIMATIONS ============ */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Teachers() {
  const { teachers } = useContext(TeacherContext);

  return (
    <motion.section
      className="bg-gray-100 py-20 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* TITLE */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-14"
      >
        Our Teachers
      </motion.h1>

      {/* TEACHERS GRID */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto"
      >
        {teachers.length === 0 ? (
          <motion.p
            variants={fadeUp}
            className="text-gray-500 col-span-3 text-center"
          >
            No teachers yet
          </motion.p>
        ) : (
          teachers.map((teacher) => (
            <motion.div
              key={teacher.id}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-md overflow-hidden
                         transition hover:shadow-xl"
            >
              {/* IMAGE – NO ANIMATION */}
              <img
                src={teacher.image || ""}
                alt={teacher.name}
                className="w-full h-72 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-blue-900 mb-1">
                  {teacher.name}
                </h2>
                <p className="text-orange-500 font-semibold mb-3">
                  {teacher.subject}
                </p>
                {teacher.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {teacher.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))
        )}
      </motion.div>
    </motion.section>
  );
}

export default Teachers;
