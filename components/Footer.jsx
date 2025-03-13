import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <h2 className="text-2xl font-bold">Information</h2>
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          tranductra2002@gmail.com
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          {/* <Image src={assets.mail_icon} alt="" className="w-6" /> */}
          0931 269 870
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          {/* <Image src={assets.mail_icon} alt="" className="w-6" /> */}
          Thuan An, Binh Duong, Viet Nam
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          &copy; 2025 Tran Duc Tra. All rights reserved. Developed by Tran Duc
          Tra
        </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/Tranductra" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/vvvtra" target="_blank">
              Facebook
            </a>
          </li>
          {/* <li>
            <a href="#top" target="_blank">
              GitHub
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
