import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col
      justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, nihil
          placeat consequuntur omnis tenetur quisquam inventore dicta illum
          distinctio temporibus magni deserunt laborum incidunt eius possimus
          cum praesentium? Vero maiores aut ad itaque voluptates, id quas
          fugiat, laudantium repellat, necessitatibus saepe. Soluta corporis
          dicta placeat iste in nisi, deleniti quasi!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          voluptatem porro veniam omnis incidunt necessitatibus deleniti nam
          voluptas perspiciatis sed itaque quo amet, quidem inventore officia
          tempore quam perferendis eius veritatis aliquam quia totam optio vero.
          Aspernatur soluta libero, quo porro, animi quae iusto temporibus ipsum
          et non, odio adipisci.
        </p>
      </div>
    </div>
  );
};

export default About;
