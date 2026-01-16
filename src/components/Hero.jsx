import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex w-full h-screen items-center justify-between overflow-hidden"
    >
      <div className="absolute left-[5%] flex flex-col items-start z-10 p-5">
        <div className="text-[#727fde] w-fit px-4 py-2 border border-[#727fde77] bg-[#2200493d] shadow-[0_0_5px_#727fde] rounded-full mb-5">
          Full-Stack Developer & Engineer
        </div>
        <p className="text-xl font-medium text-gray-300 mb-2 pl-1">
          Hi, I am <span className="text-white font-bold">Abhayanth K</span>
        </p>
        <h1 className="text-5xl md:text-6xl max-w-[600px] font-bold mb-8 text-white">
          Building <span className="gradient-text">Scalable</span> Web{" "}
          <span className="gradient-text">Applications</span>
        </h1>
        <p className="max-w-[550px] leading-relaxed mb-10 text-xl text-gray-300">
          I craft high-performance web solutions with a focus on seamless user
          experiences and robust backend architecture.
        </p>
        <div className="flex md:flex-row flex-col gap-4  items-start">
          <a href="#contact">
            <button className="text-white px-9 py-4 rounded-xl border border-[#727fde8e] bg-[#2200493d] shadow-[0_0_5px_#727fde] hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde] transition duration-300 cursor-pointer">
              Contact Me
            </button>
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-white px-9 py-4 rounded-xl border border-[#727fde8e] bg-[#2200493d] shadow-[0_0_5px_#727fde] hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde] transition duration-300 cursor-pointer flex items-center justify-center"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div className="absolute right-[3%] hidden lg:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-[80vh] mix-blend-lighten object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute left-1/2 bottom-[8%] w-[30px] h-[50px] border-2 border-gray-300 rounded-full cursor-pointer shadow-[0_0_15px_rgba(211,211,211,0.48)] -translate-x-1/2 scroll-down-btn">
        <div className="absolute top-[20%] left-1/2 w-[10px] h-[10px] border-2 border-gray-300 border-t-0 border-l-0 rotate-45 -translate-x-1/2 animate-scroll-down"></div>
      </div>
    </section>
  );
};

export default Hero;
