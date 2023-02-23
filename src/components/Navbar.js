import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Navbar = () => {
  const [showBg, handleShowBg] = useState(false);
  const [showMobileNav, handleShowMobileNav] = useState(false);

  const transitionNavbar = () => {
    window.pageYOffset > 100 ? handleShowBg(true) : handleShowBg(false);
  };

  useEffect(() => {
    handleShowBg;
    window.addEventListener("scroll", transitionNavbar);

    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  const handleMobileNav = () => {
    handleShowMobileNav(!showMobileNav);
  };
  const router = useRouter();

  const navLinks = [
    {
      title: "Services",
      dest: "/services",
    },
    {
      title: "About Us",
      dest: "/about-us",
    },
    {
      title: "Portfolio",
      dest: "/portfolio",
    },{
      title: "Blog",
      dest: "/blog",
    },
    {
      title: "Contact Us",
      dest: "/contact-us",
    },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 container max-w-6xl h-20 flex items-center justify-between z-50">
      <div className={`w-7xl h-20 fixed inset-x-0 transition-opacity backdrop-blur-lg -z-10 ${showMobileNav ? "bg-black" : showBg ? "bg-black/70 opacity-100" : "opacity-0 ease-out duration-300"}`} />

      <Link href="/">
        <div className="flex gap-2 items-center">
          <svg data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 424.36 424.36" className="h-11 sm:h-10">
            <circle cx="212.18" cy="212.18" r="212.18" fill="#f79050" />
            <circle cx="212.18" cy="212.18" r="162.65" fill="#f1f2f2" />
            <path
              d="M61.82 150.07c7.28-14.37 24.26-20 37.09-13.9 10.65 5.09 16.95 17.61 14.74 30.47-2.53 6-21.67 53.13 4.13 99.1 17.9 31.89 46.85 44.36 54.42 47.36 9.77 3.87 40.93 14.57 76.34 1.35 39-14.57 55.93-48 61.43-61.18 17.31-41.44 3.77-78.56.68-86.46a30.28 30.28 0 0 1 53.79-12.6 165.9 165.9 0 0 1 10.38 56.17 163.94 163.94 0 0 1-16.81 73.89 162 162 0 0 1-25.58 37.42c-24.61 26.75-67.56 53.56-121.87 53.12-9.95-.08-73.1-1.65-119.82-53.79-40.35-45-41.38-97.54-41.18-111.33a164.09 164.09 0 0 1 12.26-59.62Z"
              fill="#72ccd8"
            />
            <circle cx="212.18" cy="212.18" r="108.52" fill="#231f20" />
          </svg>
          <h1 className="text-2xl font-bold">Dynamic Biz</h1>
        </div>
      </Link>

      <ul className="flex items-center gap-10 text-md font-medium md:hidden">
        {navLinks.map(({ title, dest }, index) => {
          return (
            <li className="relative group" key={index}>
              <Link className="py-4" href={dest}>
                {title}
              </Link>
              <div className="absolute -bottom-1 bg-orange-600 h-[2px] group-hover:w-8 delay-300 ease-in-out transition-width" />
              <div className={`absolute -bottom-1 bg-orange-600 h-[2px] ${router.pathname == dest && "w-8"}`} />
            </li>
          );
        })}
      </ul>

      <button className="hidden md:block" onClick={() => handleMobileNav()} aria-label="Hamberger Menu Button">
        <>
          {showMobileNav ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2 " className="w-8 h-8" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </>
      </button>

      <AnimatePresence>
        {showMobileNav && (
          <ul className="hidden text-md font-semibold absolute top-20 left-0 sm:flex flex-col w-screen">
            {navLinks.map(({ title, dest }, index) => {
              return (
                <Link href={dest} key={index}>
                  <motion.li
                    initial={{ x: "100%", opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      delay: (navLinks.length - index) / 100,
                    }}
                    animate={{ x: "0%", opacity: 100 }}
                    exit={{ x: "100%", opacity: 0 }}
                    className="hover:bg-neutral-900 p-4 bg-black"
                    onClick={() => handleMobileNav()}
                  >
                    {title}
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
