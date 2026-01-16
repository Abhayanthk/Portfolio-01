import React from "react";
// import Link
const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Portfolio Website",
      desc: "Responsive portfolio with glassmorphism design and interactive elements.",
      video: "/videos/project2.mp4",
      highlight: "Portfolio",
    },
    {
      id: 2,
      title: "Achron",
      desc: "AI powered productivity tool",
      video: "/videos/Achron.mp4",
      website: "https://achron.vercel.app/",
      highlight: "Achron",
    },
    {
      id: 3,
      title: "Gocart",
      desc: "Multi-Vendor Full Stack E-Commerce App with admin and vendor panel",
      video: "/videos/Gocart.mp4", // Using project1 as per legacy, but could be project3 if available
      website: "https://gocart-sage-nu.vercel.app/",
      highlight: "Gocart",
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center w-[80%] min-h-screen my-20 relative z-10"
    >
      <h1 className="text-4xl font-bold mb-20 text-white">My Projects</h1>

      <div className="flex flex-col gap-32 w-full">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } items-center justify-center gap-10 lg:gap-[10%] w-full`}
          >
            {/* Video Box */}
            <div className="flex items-center justify-center w-full lg:w-1/2 relative group cursor-pointer min-w-[300px] transition duration-500 mix-blend-mode-exclusion">
              <video
                src={project.video}
                className="w-full rounded-3xl shadow-[0_0_10px_lightgray] transition duration-500 object-cover group-hover:shadow-[0_0_20px_lightgray]"
                autoPlay
                muted
                loop
                playsInline
                onClick={() => window.open(project.website, "_blank")}
              ></video>
            </div>

            {/* Info Box */}
            <div className="flex flex-col items-start justify-center w-full lg:w-1/2 p-5">
              <h1 className="text-3xl font-bold mb-4 text-white">
                {project.title.split(project.highlight)[0]}
                <span className="gradient-text">{project.highlight}</span>
                {project.title.split(project.highlight)[1]}
              </h1>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-[400px]">
                {project.desc}
              </p>
              <a
                href={project.website}
                className="text-white px-6 py-2 rounded-xl border border-[#727fde8e] bg-[#2200493d] shadow-[0_0_5px_#727fde] hover:bg-primary hover:text-black hover:shadow-[0_0_15px_#727fde] transition duration-300 flex items-center gap-2 cursor-pointer"
              >
                <i className="bx bx-link-external"></i> Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
