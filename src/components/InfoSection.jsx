import React from "react";

const InfoSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center w-[80%] my-[100px] z-10 relative"
    >
      <h1 className="text-4xl font-bold mb-10 text-white">Hello, There</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-5">
        {/* Card 1 */}
        <div className="card glass group p-8 rounded-3xl relative h-[320px] overflow-hidden hover:-translate-y-2 hover:bg-[rgba(16,20,60,0.6)] transition duration-300">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Frontend Development
          </h1>
          <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">
            I craft responsive, interactive, and aesthetic user interfaces using
            modern frameworks like React and Next.js, ensuring a seamless
            experience across all devices.
          </p>
          <i className="bx bxl-react absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>

        {/* Card 2 */}
        <div className="card glass group p-8 rounded-3xl relative h-[320px] overflow-hidden hover:-translate-y-2 hover:bg-[rgba(16,20,60,0.6)] transition duration-300">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Backend Development
          </h1>
          <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">
            I build robust, scalable server-side applications using Node.js,
            Express, and Golang (Fiber), focusing on performance and security.
          </p>
          <i className="bx bxl-nodejs absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>

        {/* Card 3 */}
        <div className="card glass group p-8 rounded-3xl relative h-[320px] overflow-hidden hover:-translate-y-2 hover:bg-[rgba(16,20,60,0.6)] transition duration-300">
          <h1 className="text-2xl font-bold mb-4 text-white">Databases</h1>
          <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">
            Proficient in managing data with PostgreSQL, MongoDB, and Redis. I
            design efficient schemas and optimize queries for speed.
          </p>
          <i className="bx bxl-postgresql absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>

        {/* Card 4 */}
        <div className="card glass group p-8 rounded-3xl relative h-[320px] overflow-hidden hover:-translate-y-2 hover:bg-[rgba(16,20,60,0.6)] transition duration-300">
          <h1 className="text-2xl font-bold mb-4 text-white">AI Integrated</h1>
          <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">
            Leveraging AI tools and simple implementations to enhance
            application functionality and user engagement.
          </p>
          <i className="bx bx-brain absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>

        {/* Card 5 */}
        <div className="card glass group p-8 rounded-3xl relative h-[320px] overflow-hidden hover:-translate-y-2 hover:bg-[rgba(16,20,60,0.6)] transition duration-300">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Engineering Practices
          </h1>
          <p className="text-gray-400 text-[15px] leading-relaxed relative z-10">
            I follow clean code principles, CI/CD pipelines, and writing
            maintainable, reusable code for long-term project health.
          </p>
          <i className="bx bx-code-block absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>

        {/* Card 6: Competitive Programming */}
        <div className="card glass group p-8 rounded-3xl relative h-[320px] overflow-hidden hover:-translate-y-2 hover:bg-[rgba(16,20,60,0.6)] transition duration-300 border-primary/30">
          <h1 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            Competitive Programmer{" "}
            <i className="bx bxs-trophy text-yellow-500"></i>
          </h1>
          <div className="relative z-10 text-gray-300">
            <p className="text-[15px] leading-relaxed mb-4">
              Active problem solver on Codeforces and LeetCode. Enhancing
              algorithmic thinking and optimization skills.
            </p>
            <div className="font-bold text-lg text-primary mb-1">
              Specialist
            </div>
            {/* <div className="text-sm text-gray-400">
              Codeforces Max Rating: 1405
            </div>
            <div className="text-sm text-gray-400">Problems Solved: 500+</div> */}
          </div>
          <a
            href="https://codeforces.com/profile/Abhayanth"
            target="_blank"
            className="absolute bottom-5 left-8 z-10 text-sm border border-primary/50 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition"
          >
            View Profile
          </a>
          <i className="bx bx-code-alt absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
