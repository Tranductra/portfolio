import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "92eaded4-47d2-4e50-a622-abf1df9b6b24");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] "
      //if isDarkMode is true then not background image else background image is footer-bg-color.png
      style={{
        backgroundImage: isDarkMode ? "none" : `url(${assets.footer_bg})`,
      }}
    >
      <h4 className="text-center mb-2 text-lg">Connect with me</h4>
      <h2 className="text-center text-5xl">Get in touch</h2>
      {/* Introduce */}
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Have a project idea or need a developer for your next big thing? I'm
        open to collaborations and freelance work. Let’s discuss how I can help
        bring your vision to life!
      </p>
      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white"
            name="name"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white  dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white"
            name="email"
          />
        </div>
        <textarea
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6  dark:bg-gray-800 dark:border-white dark:text-white dark:placeholder-white"
          name="message"
        />
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-center gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-white dark:text-black dark:hover:bg-white/70"
        >
          Submit now{" "}
          <Image
            src={
              isDarkMode ? assets.right_arrow_bold : assets.right_arrow_white
            }
            alt=""
            className="w-4"
          />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
