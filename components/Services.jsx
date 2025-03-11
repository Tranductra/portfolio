import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg">What I offer</h4>
      <h2 className="text-center text-5xl">My Services</h2>
      {/* Introduce */}
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I offer end-to-end development services, specializing in mobile and web
        applications with a focus on performance, scalability, and user
        experience. My expertise includes:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg hover:bg-purple-200 cursor-pointer hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white/20 dark:hover:bg-gray-800"
          >
            <Image src={service.icon} alt={service.icon} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700  dark:text-white">
              {" "}
              {service.title}
            </h3>
            <p className="text-sm text-gray-600 leading-5  dark:text-white">
              {" "}
              {service.description}
            </p>
            <a
              href={service.link}
              className="flex items-center gap-2 text-sm mt-5"
            >
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
