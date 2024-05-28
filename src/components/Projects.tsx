"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import carHub from "../assets/project-thumbnail/car-hub.jpg";
import crypto from "../assets/project-thumbnail/crypto.jpg";
import voltRide from "../assets/project-thumbnail/volt-ride.jpg";

const projectContent = [
  {
    id: 1,
    title: "Car hub",
    description:
      "Platform for developers to boost their coding skills by solving real-world problems and daily practices.",
    status: "Completed",
    image: carHub,
    link: "https://car-showcase-8mq2-ax1thhi2s-sanketshende9890.vercel.app/",
    more: "",
  },
  {
    id: 2,
    title: "Cryptolly",
    description:
      "Platform for developers to boost their coding skills by solving real-world problems and daily practices.",
    status: "In progress",
    image: crypto,
    link: "https://cryptolly-app.vercel.app/",
    more: "",
  },
  {
    id: 3,
    title: "VoltRide",
    description:
      "Platform for developers to boost their coding skills by solving real-world problems and daily practices.",
    status: "In progress",
    image: voltRide,
    link: "https://voltride.vercel.app/",
    more: "",
  },
  // {
  //   id: 4,
  //   title: "BetterDevs",
  //   description:
  //     "Platform for developers to boost their coding skills by solving real-world problems and daily practices.",
  //   status: "Completed",
  //   image: carHub,
  //   link: "",
  //   more: "",
  // },
];

const Projects = () => {
  return (
    <div className="border border-gray-600/50 w-full rounded-md p-4 mb-4">
      <div className="relative w-full max-w-2xl mx-auto h-full px-0 lg:px-6">
        <h2 className="relative z-10 text-2xl pt-1 lg:pt-0 md:text-3xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 font-sans font-bold mb-6">
          Projects
        </h2>
        {projectContent.map((item) => (
          <ProjectCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            status={item.status}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
