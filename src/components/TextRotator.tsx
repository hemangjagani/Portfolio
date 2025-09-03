"use client";
import React, { useEffect, useState } from "react";
import { portfolioConfig } from "@/config/portfolio.config";

function TextRotator() {
  const roles = portfolioConfig.skills.roles;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % roles.length);
    }, 2000); // 2s per role
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <div className="py-4 rounded-md flex flex-col justify-center items-center overflow-hidden">
      <div className="font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700 flex items-center">
        I am a {portfolioConfig.title} &{" "}
        <span className="ml-2 font-rubik text-lg sm:text-3xl text-[#2f7df4] h-[1.5em] sm:h-[2.5em] flex items-center transition-transform duration-500">
          {roles[currentIndex]}
        </span>
      </div>
    </div>
  );
}

export default TextRotator;
