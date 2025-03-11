import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">My portfolio</h4>
      <h2 className="text-center text-5xl">My latest work</h2>
      {/* Introduce */}
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Here are some of my most recent projects, demonstrating my ability to
        create high-quality applications with a focus on user experience and
        performance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {workData.map((item, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${item.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group -z-10"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-700">{item.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-stone-900 group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <a
          className="w-max flex items-center justify-between gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-blue-200 duration-500 dark:border dark:text-white dark:border-white/80 dark:hover:bg-gray-800"
          href=""
        >
          Show more{" "}
          <Image
            src={
              isDarkMode ? assets.right_arrow_white : assets.right_arrow_bold
            }
            alt=""
            className="w-4"
          />
        </a>
      </div>
    </div>
  );
};

export default Work;
