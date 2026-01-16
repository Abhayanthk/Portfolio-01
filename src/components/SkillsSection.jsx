import React from "react";

const SkillsSection = () => {
  const techItems = [
    {
      id: 1,
      name: "C++",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      id: 2,
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 3,
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 4,
      name: "Tailwind",
      img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    },
    {
      id: 5,
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 6,
      name: "TypeScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      id: 7,
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      id: 8,
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      className: "invert",
    },
    {
      id: 9,
      name: "Redux",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      id: 11,
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 12,
      name: "Express",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      className: "invert",
    },
    {
      id: 13,
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      id: 14,
      name: "PostgreSQL",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      id: 15,
      name: "Prisma",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      className: "invert",
    },
    { id: 16, name: "JWT", img: "https://jwt.io/img/pic_logo.svg" },
    {
      id: 18,
      name: "Git",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
  ];

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center w-full min-h-screen justify-center z-10 overflow-hidden"
    >
      {/* Background Image/Symbol */}
      <div className="absolute inset-0 flex justify-center items-center opacity-70 mix-blend-lighten pointer-events-none">
        <img
          src="/images/digital%20brain.png"
          alt="Skills BG"
          className="w-[70%] object-contain opacity-50 animate-pulse"
        />
      </div>

      {/* Persona Text */}
      <div className="absolute top-[20%] left-[5%] md:left-[10%] flex flex-col items-start max-w-[300px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
          Problem
          <br />
          Solver
        </h1>
        <p className="hidden md:block text-gray-400 leading-relaxed font-light">
          I approach every challenge with a logical mindset, breaking down
          complex problems into manageable solutions using algorithms and data
          structures.
        </p>
      </div>

      <div className="absolute top-[20%] right-[5%] md:right-[10%] flex flex-col items-end text-end max-w-[300px]">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-wide drop-shadow-lg">
          Software
          <br />
          Engineer
        </h1>
        <p className="hidden md:block text-gray-400 leading-relaxed font-light">
          Building systems that matter. From architecture to deployment, I
          ensure every line of code contributes to a reliable and scalable
          product.
        </p>
      </div>

      {/* Slider Container */}
      <div className="absolute bottom-[10%] w-full md:w-[80%] h-[200px] overflow-hidden mask-gradient-to-r group flex items-center justify-center">
        {/* Animated Track - using gap instead of margins for precision */}
        <div className="flex w-max animate-scroll group-hover:paused items-center gap-8">
          {/* Duplicate list 3 times to ensure no gaps on wide screens */}
          {[...techItems, ...techItems, ...techItems].map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="relative w-[100px] h-[100px] flex-shrink-0 flex items-center justify-center p-4 group/item
                         bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl
                         grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 hover:z-20
                         shadow-[0_0_20px_rgba(0,0,0,0.2)] hover:shadow-[0_0_20px_rgba(114,127,222,0.4)]"
            >
              {/* Tooltip */}
              <div className="absolute -top-12 opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 px-4 py-2 pointer-events-none z-30">
                <span className="text-white font-semibold text-lg tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  {item.name}
                </span>
              </div>

              <img
                src={item.img}
                alt={item.name}
                className={`w-full h-full object-contain drop-shadow-md ${
                  item.className || ""
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
