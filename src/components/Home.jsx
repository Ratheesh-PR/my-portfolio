import React from "react";
import hero from "../assets/heroImage1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const Home = () => {
  return (
    <div
      name="name"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl md:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English.
          </p>
          <div>
            <button
              className="group text-white w-fit px-6 py-3 my-2 flex items-center
             rounded-md bg-gradient-to-r from-sky-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={24} className="ml-1"/>
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
