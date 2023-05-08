import React from "react";
import hero from "../assets/heroImage1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Hello! I am a full-stack developer with experience in Ruby on Rails
            and React, as well as a beginner-level knowledge in Angular.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-gradient-to-r from-sky-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={24} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={hero}
            alt="my-picrure"
            className="rounded-lg mx-auto w-2/3 md:w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
