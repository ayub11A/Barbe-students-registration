import React, { useContext } from "react";
import { SubjectContext } from "../context/SubjectContext";
import { motion } from "framer-motion";

/* ================= ANIMATIONS ================= */

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

function Subjects() {
  const { subjects } = useContext(SubjectContext);

  const getBranchDescription = (branch) => {
    switch (branch) {
      case "Science":
        return "Science branch covers Physics, Chemistry, Biology etc.";
      case "Languages":
        return "Languages branch includes English, Somali, Arabic etc.";
      case "Social Studies":
        return "Social Studies includes History and Geography.";
      case "Islamic Studies":
        return "Islamic Studies includes Fiqh and Prophet (SCW) stories.";
      default:
        return "No description available";
    }
  };

  const branches = [...new Set(subjects.map((s) => s.branch))];

  return (
    <motion.div
      className="p-6 max-w-5xl mx-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      {/* TITLE */}
      <motion.h1
        variants={fadeUp}
        className="text-3xl font-bold text-gray-800 mb-8 text-center"
      >
        Subjects Structure
      </motion.h1>

      <div className="space-y-6">
        {branches.map((branch) => {
          const branchSubjects = subjects.filter(
            (s) => s.branch === branch
          );

          return (
            <motion.div
              key={branch}
              variants={fadeUp}
              className="bg-white border rounded-xl shadow-sm"
            >
              {/* BRANCH HEADER */}
              <div className="px-6 py-4 bg-gray-100 border-b rounded-t-xl">
                <h2 className="text-xl font-semibold text-blue-900">
                  {branch}
                </h2>
                <p className="text-gray-600 text-sm mt-1">
                  {getBranchDescription(branch)}
                </p>
              </div>

              {/* SUBJECTS */}
              <motion.ul
                variants={container}
                className="p-6 space-y-2"
              >
                {branchSubjects.length > 0 ? (
                  branchSubjects.map((s) => (
                    <motion.li
                      key={s.id}
                      variants={fadeUp}
                      className="text-gray-700"
                    >
                      • {s.name}
                    </motion.li>
                  ))
                ) : (
                  <motion.li variants={fadeUp} className="text-gray-400">
                    No subjects yet
                  </motion.li>
                )}
              </motion.ul>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default Subjects;
