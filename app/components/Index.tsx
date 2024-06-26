"use client";

import React, { useEffect, useState } from "react";
import HomeSlider from "./HomeSlider";
import Index_BG from "./Index_BG";

export const Index: React.FC = () => {
  /* AppContent Divider Size Rendering based on User's Width*/
  const [clientWidth, setClientWidth] = useState<number>(1600);
  const [clientHeight, setClientHeight] = useState<number>(900);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    setClientWidth(window.innerWidth);
    setClientHeight(window.innerHeight);
  };

  return (
    <>
      <Index_BG />
      <div
        className={
          clientWidth < 640
            ? `h-screen overflow-hidden bg-neutral-300 pl-0
            text-neutral-900 transition-colors duration-150 ease-linear 
            dark:bg-neutral-900 dark:text-neutral-300`
            : `h-screen overflow-hidden bg-neutral-300 pl-[64px] 
            text-neutral-900 transition-colors duration-150 ease-linear 
            dark:bg-neutral-900 dark:text-neutral-300 lg:pl-[80px]`
        }
      >
        <HomeSlider clientWidth={clientWidth} clientHeight={clientHeight} />
      </div>
    </>
  );
};
