import React from "react";
import TypingTestGif from "../assets/TypingTest.gif";
import DroneSimImg from "../assets/Dronesim.png";
import NumPadImg from "../assets/NumPad.JPEG";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-gray-100 bg-[#0d47a1]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
        <p className='text-4xl font-bold inline border-b-4 border-gray-200 '>Projects</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-4">
          <div
            style={{ backgroundImage: `url(${TypingTestGif})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React Typing Test
              </span>
              <div className="pt-8 text-center">
                <a href="https://ethan-haque.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/Ethan-Haque/typing-test-react">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>


          <div
            style={{ backgroundImage: `url(${NumPadImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Numpad Calculator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Ethan-Haque/duckboard-apps">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Repo
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${DroneSimImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Drone Simulator
              </span>
              <div className="pt-8 text-center">
                <a href="https://ethan-haque.github.io/DroneSim/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
