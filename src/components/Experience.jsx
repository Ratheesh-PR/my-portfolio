import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/javascript.png";
import reactImg from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import angular from "../assets/angular.png";

// import html from '../assets/html.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImg,
      title: "React",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: tailwind,
      title: "TailWind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: angular,
      title: "Angular",
      style: "shadow-red-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col w-full h-full text-white justify-center">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are technologies I've worked width</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map((tech) => (
            <div key={tech.id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${tech.style}`}>
              <img src={tech.src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
