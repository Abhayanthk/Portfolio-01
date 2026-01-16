import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "../config";

const ContactSection = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };
  return (
    <section
      id="contact"
      className="flex flex-col lg:flex-row items-center justify-center w-[80%] min-h-screen my-20 z-10 relative gap-20"
    >
      <h1 className="text-4xl font-bold text-white absolute top-10 lg:top-[10%] lg:left-[40%]">
        Let's Talk
      </h1>

      <div className="flex flex-col gap-6 mt-20 lg:mt-0">
        <a
          href="https://www.linkedin.com/in/abhayanth-k-675905323/"
          className="text-gray-300 text-xl flex items-center hover:text-primary transition group"
        >
          <i className="bx bxl-linkedin-square text-primary text-3xl mr-4 group-hover:scale-110 transition"></i>
          Connect on LinkedIn
        </a>
        <a
          href="mailto:abhayanth2006@gmail.com"
          className="text-gray-300 text-xl flex items-center hover:text-primary transition group"
        >
          <i className="bx bxl-gmail text-primary text-3xl mr-4 group-hover:scale-110 transition"></i>
          abhayanth2006@gmail.com
        </a>
        <a
          href="https://github.com/Abhayanthk"
          className="text-gray-300 text-xl flex items-center hover:text-primary transition group"
        >
          <i className="bx bxl-github text-primary text-3xl mr-4 group-hover:scale-110 transition"></i>
          Check out my GitHub
        </a>
      </div>

      <div className="w-full lg:w-1/2 max-w-[500px] glass p-10 rounded-2xl flex flex-col items-start">
        <p className="text-gray-400 mb-8 leading-relaxed">
          Have a project in mind or just want to say hi? Drop me a message below
          and I'll get back to you as soon as possible.
        </p>
        <form
          ref={form}
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col w-full">
            <label className="text-white text-sm mb-2">Name</label>
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white focus:outline-none focus:border-primary transition"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white text-sm mb-2">Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white focus:outline-none focus:border-primary transition"
              required
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white text-sm mb-2">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] text-white focus:outline-none focus:border-primary transition resize-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 bg-primary text-black font-bold py-3 rounded-xl hover:bg-white transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
