import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative flex flex-col lg:flex-row items-center justify-center w-[80%] min-h-screen gap-10 lg:gap-[10%] z-10 my-20 lg:my-0"
    >
      <h1 className="text-4xl font-bold text-white absolute top-10 lg:top-[10%] lg:left-[40%]">
        Let's Talk
      </h1>

      <div className="flex flex-col gap-6 mt-20 lg:mt-0">
        <a
          href="#"
          className="text-gray-300 text-xl flex items-center hover:text-primary transition group"
        >
          <i className="bx bxs-phone-call text-primary text-3xl mr-4 group-hover:scale-110 transition"></i>
          +91 1122334455
        </a>
        <a
          href="#"
          className="text-gray-300 text-xl flex items-center hover:text-primary transition group"
        >
          <i className="bx bxl-linkedin-square text-primary text-3xl mr-4 group-hover:scale-110 transition"></i>
          Connect on LinkedIn
        </a>
        <a
          href="#"
          className="text-gray-300 text-xl flex items-center hover:text-primary transition group"
        >
          <i className="bx bxl-gmail text-primary text-3xl mr-4 group-hover:scale-110 transition"></i>
          email@example.com
        </a>

        <div className="flex gap-4 mt-10">
          <a
            href="#"
            className="text-3xl text-gray-400 hover:text-primary transition"
          >
            <i className="bx bxl-github"></i>
          </a>
          <a
            href="#"
            className="text-3xl text-gray-400 hover:text-primary transition"
          >
            <i className="bx bxl-twitter"></i>
          </a>
          <a
            href="#"
            className="text-3xl text-gray-400 hover:text-primary transition"
          >
            <i className="bx bxl-instagram"></i>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/2 max-w-[500px] glass p-10 rounded-2xl flex flex-col items-start">
        <p className="text-gray-400 mb-8 leading-relaxed">
          Have a project in mind or just want to say hi? Drop me a message below
          and I'll get back to you as soon as possible.
        </p>
        <form className="w-full flex flex-col gap-4">
          <div className="flex flex-col w-full">
            <label className="text-white text-sm mb-2">Name</label>
            <input
              type="text"
              className="w-full p-4 bg-black/20 border border-white/10 rounded-lg text-white outline-none focus:border-primary focus:bg-black/40 transition duration-300"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white text-sm mb-2">Email</label>
            <input
              type="email"
              className="w-full p-4 bg-black/20 border border-white/10 rounded-lg text-white outline-none focus:border-primary focus:bg-black/40 transition duration-300"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex flex-col w-full">
            <label className="text-white text-sm mb-2">Message</label>
            <textarea
              className="w-full h-[120px] p-4 bg-black/20 border border-white/10 rounded-lg text-white outline-none focus:border-primary focus:bg-black/40 transition duration-300 resize-none"
              placeholder="Write your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-4 px-8 py-3 bg-gradient-to-r from-[#727fde] to-[#5a66c5] text-white font-bold rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-primary/40 transition duration-300 self-start"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
