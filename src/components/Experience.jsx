import React from "react";
import Card from "./Card";

const Experience = () => {
  return (
    <section className="relative w-screen min-h-screen p-8 font-poppins overflow-hidden mt-20">
      <div className="w-full h-full relative">
        <h1 className="relative text-[6.5rem] leading-[6rem] font-poppins font-bold">
          RELEVANT
        </h1>
        <h1 className="relative text-[6.5rem] leading-[6rem] font-poppins font-bold">
          EXPERIENCE
        </h1>
      </div>
      <div className="experience relative w-[60%] h-fit mx-auto flex flex-col gap-12 items-center justify-center p-12 mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Experience;
