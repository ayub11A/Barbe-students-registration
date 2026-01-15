import React, { useContext } from "react";
import { TeacherContext } from "../context/TeacherContext";

function Teachers() {
  const { teachers } = useContext(TeacherContext);

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-14">
        Our Teachers
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {teachers.length === 0 ? (
          <p className="text-gray-500 col-span-3 text-center">No teachers yet</p>
        ) : (
          teachers.map((teacher) => (
            <div
              key={teacher.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition transform hover:-translate-y-2 hover:shadow-xl"
            >
              <img
                src={teacher.image || ""}
                alt={teacher.name}
                className="w-full h-72 object-cover"
              />
              <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-blue-900 mb-1">{teacher.name}</h2>
                <p className="text-orange-500 font-semibold mb-3">{teacher.subject}</p>
                {teacher.description && (
                  <p className="text-gray-700 text-sm leading-relaxed">{teacher.description}</p>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Teachers;
