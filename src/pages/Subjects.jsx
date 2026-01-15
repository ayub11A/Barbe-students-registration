import React, { useContext } from "react";
import { SubjectContext } from "../context/SubjectContext";

function Subjects() {
  const { subjects } = useContext(SubjectContext);

  // Halkan waxaan ku daray description default ah haddii branch-ku uusan lahayn
  const getBranchDescription = (branch) => {
    switch(branch) {
      case "Science": return "Science branch covers Physics, Chemistry, Biology etc.";
      case "Languages": return "Languages branch includes English, Somali, Arabic etc.";
      case "Social Studies": return "Social Studies includes History and Geography.";
      case "Islamic Studies": return "Islamic Studies includes Fiqh and Prophet SW stories.";
      default: return "No description available";
    }
  };

  // Group subjects by branch
  const branches = [...new Set(subjects.map(s => s.branch))];

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Subjects Structure</h1>

      <div className="space-y-6">
        {branches.map((branch) => {
          const branchSubjects = subjects.filter(s => s.branch === branch);
          return (
            <div key={branch} className="bg-white border rounded-xl">
              {/* Branch Header + Description */}
              <div className="px-6 py-4 bg-gray-100 border-b rounded-t-xl">
                <h2 className="text-xl font-semibold">{branch}</h2>
                <p className="text-gray-600 text-sm mt-1">{getBranchDescription(branch)}</p>
              </div>

              {/* Subjects List */}
              <ul className="p-6 space-y-2">
                {branchSubjects.length > 0 ? (
                  branchSubjects.map((s) => <li key={s.id}>• {s.name}</li>)
                ) : (
                  <li>No subjects yet</li>
                )}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Subjects;
