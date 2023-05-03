import React from "react";
import reactWeather from "../assets/portfolio/reactWeather.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: reactWeather,
    },
    {
      id: 2,
      src: reactWeather,
    },
    {
      id: 3,
      src: reactWeather,
    },
    {
      id: 4,
      src: reactWeather,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="group w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105">
                  Code
                </button>
                {/* <a
                  href=""
                  className="group w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105"
                >
                  Demo
                </a>

                <a
                  href=""
                  className="group w-1/2 px-6 py-2 m-3 duration-200 hover:scale-105"
                >
                  Code
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
