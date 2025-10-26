import React from "react";
import { ReviewOnScroll } from "../ReviewOnScroll";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <ReviewOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Hi, I'm Ankur Bose
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I'm an aspiring software developer who loves crafting clean,
            scalable webapps. My goal is to build solution that offer both
            performance and a delightful user experience.
          </p>

          <div className="flex justify-center space-x-7">
            <a
              href="#projects"
              className="bg-white/8 text-white py-3 px-5 rounded-2xl font-medium hover:scale-105 hover:bg-white/15 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm border border-white/15 hover:border-white/30"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-white/25 text-white py-3 px-6 font-medium rounded-2xl hover:scale-105 hover:border-white/50 hover:bg-white/8 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </div>
        </div>
      </ReviewOnScroll>
    </section>
  );
};

export default Home;