import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { AiOutlineHome } from "react-icons/ai";
import { RiGraduationCapLine } from "react-icons/ri";
import { GoTerminal } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Mobile View */}
      <div className="sm:hidden flex justify-between items-center px-[5%]">
        <div className="z-50">
          <span className="text-2xl font-semibold">Alan Khalili</span>
        </div>
        <div className="z-50">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black/75 flex flex-col justify-center items-center z-40 text-black">
            <a
              href="#Intro"
              className="w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <div className="flex-1 flex justify-end">
                <AiOutlineHome size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Home</span>
              </div>
            </a>
            <a
              href="#Experience"
              className="w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <div className="flex-1 flex justify-end">
                <MdOutlineWorkOutline size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Experience</span>
              </div>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <div className="flex-1 flex justify-end">
                <GoTerminal size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Projects</span>
              </div>
            </a>
            <a
              href="#main"
              className="w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200"
            >
              <div className="flex-1 flex justify-end">
                <RiGraduationCapLine size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Contact</span>
              </div>
            </a>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden sm:flex justify-between px-[10%] pt-2 text-xl">
        {/* Left side */}
        <div>
          <a href="#main" className="text-2xl font-semibold">
            <span>Alan Khalili</span>
          </a>
        </div>

        {/* Right side */}
        <div className="flex text-md space-x-6">
          <a href="#main">
            <span>About</span>
          </a>
          <a href="#Experience">
            <span>Experience</span>
          </a>
          <a href="#Projects">
            <span>Projects</span>
          </a>
          <a href="#Contact">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
}
