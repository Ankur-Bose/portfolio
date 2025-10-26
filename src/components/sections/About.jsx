import React, { useState } from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillsData = {
    "Frontend Development": {
      skills: ["HTML", "CSS", "React", "TailwindCSS", "SCSS", "Streamlit"],
    },
    "Backend Development": {
      skills: ["Python", "Spring", "SpringBoot", "NodeJS"],
    },
    Database: {
      skills: ["MySQL", "MongoDB", "Firebase"],
    },
    "Programming Languages": {
      skills: ["C", "Java", "Python", "Javascript"],
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <ReviewOnScroll>
        <div className="max-w-4xl mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className=" backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-2xl">
            <p className="text-gray-300 mb-8 text-lg leading-relaxed text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {Object.entries(skillsData).map(([category, data]) => (
                <div
                  key={category}
                  className="group  rounded-xl p-6 border border-white/10 hover:-translate-y-1 hover: transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-xl font-bold text-blue-400">
                      {category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill, index) => (
                      <span
                        key={index}
                        onMouseEnter={() =>
                          setHoveredSkill(`${category}-${index}`)
                        }
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`
                        px-3 py-1 rounded-full text-sm transition-all duration-200
                        ${
                          hoveredSkill === `${category}-${index}`
                            ? "bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-400/50 shadow-lg shadow-blue-500/20 scale-105"
                            : "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:from-blue-500/30 hover:to-cyan-500/30 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20"
                        }
                        text-white border cursor-pointer
                      `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Contains each individual items */}
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Education</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      BTech in Computer Science
                    </h3>
                    <p className="text-gray-400">
                      St Thomas College of Engineering and Technology
                    </p>
                    <p className="text-sm text-gray-500">
                      2022 - Present | CGPA: 7.63
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">ICSE</h3>
                    <p className="text-gray-400">
                      St Thomas' Boys' School, Khiddirpore
                    </p>
                    <p className="text-sm text-gray-500">2019 - 2020</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">ISC</h3>
                    <p className="text-gray-400">
                      St Thomas' Boys' School, Khiddirpore
                    </p>
                    <p className="text-sm text-gray-500">2021 - 2022</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience */}

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-2">
                    GenAI intern at LTI Mindtree
                  </h4>
                  <p className="text-sm text-gray-500 mb-3">
                    July 2025 - Present
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Built and optimized multi-agent AI systems, including an
                        A2A project with Semantic Kernel and end-to-end tracing
                        for observability.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Prototyped Streamlit applications and leveraged AI/LLM
                        tools to accelerate development and meet agile
                        deadlines.
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>
                        Collaborated with Data Engineering and AI Research teams
                        to improve pipelines, workflows, and system efficiency.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default About;
