import React, { useEffect, useState } from "react";

import { navigation } from "../../utils/data";

// import mobile menu icon
import { CgMenuRight, CgClose } from "react-icons/cg";

// import nav mobile
import { NavMobile } from "../NavMobile";

export default function Header() {
  const [bg, setBg] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);
  useEffect(() => {
    // scroll event listener
    window.addEventListener("scroll", () => {
      // if scrollY > 50 setbg = true else false
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  const handleToggleMobileIcon = () => {
    setMobileNav((prev) => !prev);
  };

  return (
    <header
      className={`${
        // if bg true
        bg ? "bg-primary py-4 lg:py-6" : "bg-none"
      }
        fixed left-0 z-10 w-full  py-7 transition-all duration-300`}
    >
      <div className="container mx-auto max-w-[1160px] px-6 xl:px-0">
        <div className="flex items-center justify-between align-middle">
          {/* logo */}
          <a href="/">
            <h1 className="cursor-pointer text-4xl font-semibold text-white">
              FurnishMe
            </h1>
          </a>

          {/* menu icon */}
          <div
            onClick={handleToggleMobileIcon}
            className="cursor-pointer text-2xl text-white md:hidden lg:text-3xl"
          >
            {mobileNav ? "" : <CgMenuRight />}
          </div>

          {/* nav */}
          <nav className="hidden items-center justify-center md:flex">
            <ul className="flex flex-row justify-center gap-10 align-middle">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <a
                      className="capitalize text-white transition-all hover:border-b"
                      href={item.href}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* nav mobile */}
          <div
            className={`${
              mobileNav ? "right-0" : "-right-full"
            } fixed bottom-0 h-screen w-full max-w-xs transition-all md:hidden`}
          >
            <NavMobile
              mobileNav={mobileNav}
              handleToggleMobileIcon={handleToggleMobileIcon}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
