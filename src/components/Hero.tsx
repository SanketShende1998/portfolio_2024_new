import Image from "next/image";
import React from "react";
import profile from "../assets/profile.jpg";

const Hero = () => {
  return (
    <div className="border border-gray-600/50 w-full rounded-md px-4 py-6 mb-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center">
          <Image
            src={profile}
            alt="Sanket"
            className="rounded-md w-[60px] h-[60px]"
          />
          <h1 className="ml-5 flex flex-col justify-center text-white">
            <span className="text-lg font-semibold">Namaste!</span>
            <span className="text-2xl lg:text-3xl font-bold Lg:font-semibold">
              I&apos;m Sanket Shende
            </span>
          </h1>
        </div>
        <p className="mt-6 text-gray-300 text-md lg:text-xl font-semibold lg:font-medium">
          Welcome to my portfolio!
        </p>
        <br />
        <p className="text-gray-300 text-md lg:text-xl font-semibold lg:font-medium">
          I am a passionate{" "}
          <span className="blue-text text-nowrap">Front-end developer</span>{" "}
          with <span className="red-text text-nowrap">3+ years</span> of
          experience in crafting dynamic and responsive web applications.
        </p>
        <br />
        <p className="text-gray-300 text-md lg:text-xl font-semibold lg:font-medium">
          Specializing in React.js, Node.js, HTML, CSS, and JavaScript (ES6+), I
          am dedicated to transforming ideas into seamless digital experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
