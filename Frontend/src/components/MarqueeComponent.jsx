import React, { useEffect } from 'react';
import { gsap } from "gsap";

const MarqueeComponent = () => {
  useEffect(() => {
    const dur = 20; // Increase duration for a smoother loop
    const tl = gsap.timeline({ repeat: -1, defaults: { ease: "Power0.easeNone" } }); // Infinite loop with linear ease

    // Animate the first text
    tl.to("#masterTextPath1", {
      duration: dur,
      attr: { startOffset: "-100%" },
    })
    // Animate the second text with a slight delay for continuous flow
    .to("#masterTextPath2", {
      duration: dur,
      attr: { startOffset: "-100%" }, 
    }, `-=${dur / 1.5}`); // Sync to create smoother flow between texts
  }, []);

  return (
    <div className="flex lg:py-20 py-24 bg-[#f4f4f4]">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 2304 298"
        className="h-[56vh]"
      >
        {/* Define path for the text to follow */}
        <path
          id="master-line"
          d="M1 227.5C220.911 293.411 408.068 350.857 573.5 207C700.056 68.5403 784.756 5.29625 1039.5 1C1248.12 14.7202 1361.19 94.5965 1561.5 262C1599.41 286.956 1635.29 289.158 1702.5 290.5C1831.26 282.796 1906.28 264.426 2015.23 239.72C2051.59 231.476 2088.8 227.5 2126.08 227.5H2304"
          stroke="none"
          fill="none"
        />
        <use xlinkHref="#master-line" opacity="0.15" />

        {/* First Text */}
        <text fill="#000">
          <textPath
            id="masterTextPath1"
            xlinkHref="#master-line"
            startOffset="100%"  
            className="text-[12rem] tracking-[0.05em] font-young-serif"
          >
            Follow Us On Social Media
          </textPath>
        </text>

        {/* Second Text */}
        <text fill="#000">
          <textPath
            id="masterTextPath2"
            xlinkHref="#master-line"
            startOffset="200%"  
            className="text-[8rem] tracking-[0.05em] font-young-serif"
          >
            Follow Us On Social Media
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default MarqueeComponent;
