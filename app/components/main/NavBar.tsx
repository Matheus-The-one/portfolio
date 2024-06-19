"use client"

import { Socials } from "@/app/constants";
import Image from "next/image";
import React, { useState } from "react";
import { ModelViewer } from "../sub/Planet";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="/" className="h-auto w-20 flex flex-row items-center">
          <ModelViewer />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              About me
            </a>
            <a href="#skills" className="cursor-pointer">
              Skills
            </a>
            <a href="#projects" className="cursor-pointer">
              Projects
            </a>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <FaTimes size={24} className="text-gray-200" />
            ) : (
              <FaBars size={24} className="text-gray-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-screen bg-[#030014] flex flex-col items-center justify-center md:hidden`}
        >
          <a
            href="#about-me"
            className="py-4 text-2xl text-gray-200 cursor-pointer"
            onClick={toggleMenu}
          >
            About me
          </a>
          <a
            href="#skills"
            className="py-4 text-2xl text-gray-200 cursor-pointer"
            onClick={toggleMenu}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="py-4 text-2xl text-gray-200 cursor-pointer"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <div className="flex flex-row gap-5 mt-10">
            {Socials.map((social, index) => (
              <a href={social.link} key={index}>
                <Image
                  src={social.src}
                  alt={social.name}
                  key={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social, index) => (
            <a href={social.link} key={index}>
              <Image
                src={social.src}
                alt={social.name}
                key={social.name}
                width={24}
                height={24}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
