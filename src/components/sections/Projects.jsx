import { useState } from "react";
import React from "react";
import { projects } from "../../data/project.js";
import { ReviewOnScroll } from "../ReviewOnScroll.jsx";

const Projects = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-30"
    >
      <ReviewOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-15 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, projectIndex) => (
              <div
                key={project.title}
                className="bg-white/5 rounded-2xl border border-white/10 hover:border-blue-400/30 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 transition-all duration-300 ease-out overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-lg font-bold mb-4 text-white">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        onMouseEnter={() =>
                          setHoveredTech(`project-${projectIndex}-${techIndex}`)
                        }
                        onMouseLeave={() => setHoveredTech(null)}
                        className={`px-3 py-1 rounded-full text-xs transition-all duration-200 cursor-pointer
                        ${
                          hoveredTech === `project-${projectIndex}-${techIndex}`
                            ? "bg-blue-500/30 border-blue-400/50 shadow-lg shadow-blue-500/20 scale-105"
                            : "bg-blue-500/20 border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20"
                        }
                        text-white border`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.status === "Completed" && (
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-lg border border-blue-500/30 hover:bg-blue-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Projects;
