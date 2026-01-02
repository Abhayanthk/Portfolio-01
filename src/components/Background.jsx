import React from "react";

const Background = () => {
  return (
    <>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="back-vid fixed right-0 bottom-0 min-w-full min-h-full -z-10 mix-blend-lighten object-cover"
      >
        <source src="/videos/galaxy.mp4" type="video/mp4" />
      </video>
      <div className="blackhole-box absolute top-0 w-full flex justify-center -z-10 mix-blend-lighten">
        <video autoPlay muted loop playsInline className="w-full -mt-[23.5%]">
          <source src="/videos/blackhole.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Background;
