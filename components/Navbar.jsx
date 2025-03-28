import { assets } from "@/assets/assets";
import DarkModeToggle from "@/components/DarkModeToggle";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const sideMenuRef = useRef();
  const openSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };

  const closeSideMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>
      <nav
        className={
          "w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50" +
          (isScroll
            ? "bg-white/80 backdrop-blur-lg shadow-sm dark:border-b-[1px] dark:border-gray-700"
            : "")
        }
      >
        <a href="#top">
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </a>

        <ul
          className={
            "hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3" +
            (isScroll
              ? ""
              : "shadow-sm bg-opacity-50 border-[1px] border-darkTheme/50 py-3 px-12 dark:border dark:border-gray-700 dark:px-12 dark:p-3 dark:bg-transparent ")
          }
        >
          <li>
            <a href="#top" className="font-ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)}>
            <Image
              src={!isDarkMode ? assets.moon_icon : assets.sun_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#top"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 dark:border-white/80"
          >
            Contact{" "}
            <Image
              alt=""
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
            />
          </a>

          <button className="block md:hidden ml-3" onClick={openSideMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-blue-950"
        >
          <div
            className="absolute top-6 right-6 cursor-pointer"
            onClick={closeSideMenu}
          >
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5"
            />
          </div>
          <li>
            <a href="#top" onClick={closeSideMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeSideMenu}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" onClick={closeSideMenu}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" onClick={closeSideMenu}>
              My work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={closeSideMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
