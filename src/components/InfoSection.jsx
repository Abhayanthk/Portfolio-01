import React from "react";

const InfoSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center w-[80%] my-[100px] z-10 relative"
    >
      <h1 className="text-4xl font-bold mb-10 text-white">
        Engineering Impact
      </h1>
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
            <div className="text-sm text-gray-400">
              Codeforces Max Rating: 1485
            </div>
            <div className="text-sm text-gray-400">Problems Solved: 1300+</div>
          </div>
          <a
            href="https://codeforces.com/profile/Harly24"
            target="_blank"
            className="absolute bottom-5 left-8 z-10 text-sm border border-primary/50 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAw0lEQVR4nO2VQQqDMBBFXZlrKHgFh+6KyZWEXqDpDcx11GuIhyhOFrqaEkttY7NpmYWLfHjwCcM8skmSJIYjmcFb1kxLbpAcrmcNaj5B816+Scw0swny3fIXxxBQKwrq05q69LLieisKPkGfjtQL2jEwCgSFOJzgfj4VtoLayvKyUkHtztgEVsFoFZCHLAdOAYWIgi1RQP8LOrEEBPOvzzVKWPbLUcLsbqA9ybNffQHqrw/HoDeDqtSfEtdRgTcTk4TyANaBm3IkpesMAAAAAElFTkSuQmCC"
              alt="external-codeforces-programming-competitions-and-contests-programming-community-logo-color-tal-revivo"
            ></img>
          </a>
          <a
            href="https://leetcode.com/u/Harly24/"
            target="_blank"
            className="absolute bottom-5 left-24 z-10 text-sm border border-primary/50 px-3 py-1 rounded-full hover:bg-primary hover:text-white transition"
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAACgklEQVR4nGNgIBH4GEtyGWrJvFNTU/lvbyx5goGawMJChlNPQ/azurrafxDWVFP4TTPD1dRU/zubSi2miuEqKgzsepqyH2GGg7CtkdQ2ahr+CdlwL2uZvVQzXFcD1fCWNM3/L9db/3ux2vjw//3yHJQZrokaLI0pmv9fbbCB45drTV/dWmzGR475bLoaciiGp/orvXm5xmj/i9Um919tsEa25MXLVVo8JBou+wHZcDcL6UPICp6v0i97tR7JkjWmz/6v0mIjy3AvK5kj2BQ+X2WY+3K91T+4Jav1Gwiarq8p+xrZcD9bmeP41L9Yo5/2cp3Vv5frLf8+X21sjtdwRxOJJciGBzjInCboIgYGhrurjPn/L9LjJqhQQ1X+F8xwd0vZ2wxUBmyqqirQIkD5/8w0Bi5kyS0bNjhu3rjh/eaNG/4Tgf9s3rBhDorpHBwcsiIiwv9BWE9N5A+67cuWLN60ZNHC/8TjBb/QzWAU5uf4z87O9p+fl/1/ko+QG4oFyxaZL5o/787C+fMeE4MXL144GSOMLDS5P4AsAGFLTe5fnUnCUhQGOypwNeGLEOBjB1sAwra6PD/rQ7kkCOm7OUu28eZs+WqiLHEy5FvIzYViyY/KCG5xXOrvzpY7/HyJ/H8QvjNTNp0oSxz1eZYjW2Kjy/0jN5RHFF3dvblyJ2GGg/CN2bLhRFkA9okBz0pkS+z0eH6c6pbRAcndmCkpcm+ezFVkw2/Pkp3LQCpw1udejWzJ2Ymy/x4vlPvxdLHcP2TDb82WXUSy4TDgasy7UlqU43+wDd//Z4sRhoLwM0oNh4Ebs6Sd7s6Tu/F4gdwfkCWPF8n9vT9P9uH12TJRxBgAABE1rBTkH+ppAAAAAElFTkSuQmCC"
              alt="external-level-up-your-coding-skills-and-quickly-land-a-job-logo-shadow-tal-revivo"
            ></img>
          </a>
          <i className="bx bx-code-alt absolute right-5 bottom-5 text-8xl opacity-15 group-hover:opacity-30 group-hover:scale-110 group-hover:rotate-12 group-hover:text-white transition duration-300"></i>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
