import Head from "next/head";
import React from "react";

const LoadingScreen = () => {
  return (
    <main className="h-screen w-screen bg-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        data-name="Layer 2"
        viewBox="0 0 424.36 424.36"
        className="h-32 w-32 absolute left-1/2 right-1/2 top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"
      >
        <circle cx="212.18" cy="212.18" r="212.18" fill="#f79050" />
        <circle cx="212.18" cy="212.18" r="162.65" fill="#f1f2f2" />
        <path
          d="M349.64 395.27c7.28-14.37 24.26-20 37.09-13.9 10.65 5.09 16.95 17.61 14.74 30.47-2.53 6-21.67 53.13 4.13 99.1 17.9 31.89 46.85 44.36 54.42 47.36 9.77 3.87 40.93 14.57 76.34 1.35 39-14.57 55.93-48 61.43-61.18 17.31-41.44 3.77-78.56.68-86.46a30.28 30.28 0 0 1 53.79-12.6 165.9 165.9 0 0 1 10.38 56.17 163.94 163.94 0 0 1-16.81 73.89 162 162 0 0 1-25.58 37.42c-24.61 26.75-67.56 53.56-121.87 53.12-9.95-.08-73.1-1.65-119.82-53.79-40.35-45-41.38-97.54-41.18-111.33a164.09 164.09 0 0 1 12.26-59.62Z"
          fill="#72ccd8"
          transform="translate(-287.82 -245.2)"
        />
        <circle cx="212.18" cy="212.18" r="108.52" fill="#231f20" />
      </svg>
    </main>
  );
};

export default LoadingScreen;
