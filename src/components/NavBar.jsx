import { useState, useEffect } from "react";
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
    <div className="h-12">
      {/* Mobile View */}
      <div className="lg:hidden flex justify-between items-center px-12">
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
              target="_blank"
              href="https://drive.google.com/file/d/1Tl-Rk3PzGutTMBqUW4pap3Og_XXCxw2E/view?usp=sharing"
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
      <div className="hidden lg:flex justify-between px-36 pt-2 text-xl">
        {/* Left side */}
        <div>
          <a href="#main" className="text-2xl font-semibold">
            <span>Alan Khalili</span>
          </a>
        </div>

        {/* Right side */}
        <div className="flex text-md space-x-8">
          <a href="#Experience">
            <span>Experience</span>
          </a>
          <a href="#Projects">
            <span>Projects</span>
          </a>
          <a href="#Contact">
            <span>Contact</span>
          </a>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1Tl-Rk3PzGutTMBqUW4pap3Og_XXCxw2E/view?usp=sharing"
          >
            <span>Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
