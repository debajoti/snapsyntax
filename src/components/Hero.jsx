import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full justify-center item-center font-poppins font-bold text-[5rem] leading-[4.5rem]">
        <div className="text-center font-semibold mt-10 font-poppins">
          SENIOR <br />
          <span className="">EXPERIENCE</span> <br /> DESIGNER&#169;
          <div className="flex flex-row justify-between w-[95%] ml-5 mt-2">
            <p className="text-xs text-left ml-5">
              Website without visitors is like <br /> a ship lost in the
              horizon.{" "}
            </p>
            <p className="text-xs mr-5">cool</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center mt-14">
        <img
          className="rounded-xl"
          src="/fauzan-saari-CWNXlkekBeA-unsplash.jpg"
          width={250}
          height={500}
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
