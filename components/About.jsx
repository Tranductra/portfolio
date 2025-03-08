import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About me</h2>
      <div className="flex w-full sm:max-w-5xl mx-auto justify-center flex-col lg:flex-row items-center gap-20 my-20">
        <div className=" w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.avatar_portfolio}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl">
            I'm a Full Stack Developer with expertise in building
            high-performance mobile applications using Flutter and React Native,
            alongside crafting seamless web experiences with Next.js. With a
            strong foundation in both frontend and backend development, I create
            scalable and efficient applications that enhance user engagement.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            {infoList.map((item, index) => (
              <li
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-200 hover:-translate-y-1 duration-500 hover:shadow-lg"
              >
                <Image src={item.icon} alt={item.title} className="w-7 mt-3" />
                <h3 className="my-4 text-gray-700 font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
          <h4 className="my-6 text-gray-700">Tool I user</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500"
              >
                <Image src={tool} alt="tool" className="w-5 sm:w-7" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
