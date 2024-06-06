import React, { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { AiOutlineHome, AiTwotoneFileText } from "react-icons/ai";
import { RiGraduationCapLine } from "react-icons/ri";
import { GoTerminal } from "react-icons/go";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateIndex, setAnimateIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsAnimating(true);
    setAnimateIndex(0);
  };

  useEffect(() => {
    let timeout;

    if (isAnimating) {
      timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
    }

    return () => clearTimeout(timeout);
  }, [isAnimating]);

  useEffect(() => {
    let timeout;

    if (animateIndex !== null && animateIndex < 5) {
      timeout = setTimeout(() => {
        setAnimateIndex(animateIndex + 1);
      }, 200);
    }

    return () => clearTimeout(timeout);
  }, [animateIndex]);

  return (
    <div className="h-[5vh]">
      {/* Mobile View */}
      <div className="sm:hidden flex justify-between items-center px-[5%]">
        <div className="z-50">
          <span className="text-2xl font-semibold">Alan Khalili</span>
        </div>
        <div className="z-50">
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />
        </div>
        {isMenuOpen && (
          <div
            className={`fixed inset-0 ${
              isAnimating ? "animate-bgFadeIn bg-black/75" : "bg-black/75"
            } flex flex-col justify-center items-center z-40 text-black`}
          >
            <a
              onClick={toggleMenu}
              href="#Intro"
              className={`w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
                animateIndex >= 1
                  ? "animate-slideUp opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <div className="flex-1 flex justify-end">
                <AiOutlineHome size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Home</span>
              </div>
            </a>
            <a
              onClick={toggleMenu}
              href="#Experience"
              className={`w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
                animateIndex >= 2
                  ? "animate-slideUp opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <div className="flex-1 flex justify-end">
                <MdOutlineWorkOutline size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Experience</span>
              </div>
            </a>
            <a
              onClick={toggleMenu}
              href="#Projects"
              className={`w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
                animateIndex >= 3
                  ? "animate-slideUp opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <div className="flex-1 flex justify-end">
                <GoTerminal size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Projects</span>
              </div>
            </a>
            <a
              onClick={toggleMenu}
              href="#Contact"
              className={`w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
                animateIndex >= 4
                  ? "animate-slideUp opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <div className="flex-1 flex justify-end">
                <RiGraduationCapLine size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Contact</span>
              </div>
            </a>
            <a
              onClick={toggleMenu}
              href="https://storage.googleapis.com/simplify-resumes/965f5507-fe8d-4fda-8b11-7bad95756b65/b5ae80cf-0603-47c1-9dec-f2619b2a1915/1717374863.pdf?Expires=1717979663&GoogleAccessId=gcs-signing-service-account%40mifflin-backend.iam.gserviceaccount.com&Signature=wHuhRfh1TKVuD7%2B7lq57QZk27cBpgB1RWlR3YxYShapKqxTwlXL22zM8StJKTNTMOzz9i7eIeFNbv%2BcYEmRg%2F0zVDuWsJWStS8BZTzRYoWUPIUfMbl%2Fq9xx36C3yK3j0wGWvTWhJJT6S7z%2Fk35bQ5ODbOR%2FV48HJXX1%2FGjoUR3YmJHW%2F4VaexnkSDMrAeyUE3YkmAQ%2Bzp4zR%2FcMIKbfSnAYR09Zs6B66pvbz1aTJTwsKFoMf4I2ghsPhPPNkg1qEIPaMtxWIOnUgHWp%2FOxHNgvSPMAJeoWMHlOuwwn9Jc9wZB1MIt6%2Fw2%2FkruF2wSK7G%2Ffav%2BZaksr5rVgJ%2BL0jYMA%3D%3D"
              className={`w-[75%] flex justify-between items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-110 ease-in duration-200 ${
                animateIndex >= 5
                  ? "animate-slideUp opacity-100"
                  : "translate-y-full opacity-0"
              }`}
            >
              <div className="flex-1 flex justify-end">
                <AiTwotoneFileText size={20} />
              </div>
              <div className="flex-1 pl-4">
                <span>Resume</span>
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
          <a href="#Experience">
            <span>Experience</span>
          </a>
          <a href="#Projects">
            <span>Projects</span>
          </a>
          <a href="#Contact">
            <span>Contact</span>
          </a>
          <a href="https://storage.googleapis.com/simplify-resumes/965f5507-fe8d-4fda-8b11-7bad95756b65/b5ae80cf-0603-47c1-9dec-f2619b2a1915/1717374863.pdf?Expires=1717979663&GoogleAccessId=gcs-signing-service-account%40mifflin-backend.iam.gserviceaccount.com&Signature=wHuhRfh1TKVuD7%2B7lq57QZk27cBpgB1RWlR3YxYShapKqxTwlXL22zM8StJKTNTMOzz9i7eIeFNbv%2BcYEmRg%2F0zVDuWsJWStS8BZTzRYoWUPIUfMbl%2Fq9xx36C3yK3j0wGWvTWhJJT6S7z%2Fk35bQ5ODbOR%2FV48HJXX1%2FGjoUR3YmJHW%2F4VaexnkSDMrAeyUE3YkmAQ%2Bzp4zR%2FcMIKbfSnAYR09Zs6B66pvbz1aTJTwsKFoMf4I2ghsPhPPNkg1qEIPaMtxWIOnUgHWp%2FOxHNgvSPMAJeoWMHlOuwwn9Jc9wZB1MIt6%2Fw2%2FkruF2wSK7G%2Ffav%2BZaksr5rVgJ%2BL0jYMA%3D%3D">
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
