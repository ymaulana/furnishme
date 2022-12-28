import React from "react";
import { CgClose } from "react-icons/cg";
import { navigation } from "../../utils/data";

export default function NavMobile({ mobileNav, handleToggleMobileIcon }) {
  return (
    <nav className="h-full w-full bg-slate-200 shadow-2xl">
      <div
        onClick={handleToggleMobileIcon}
        className="flex cursor-pointer items-center justify-end px-6 py-10 text-2xl text-black lg:text-3xl"
      >
        {mobileNav ? <CgClose /> : ""}
      </div>
      <ul className="-my-32 flex h-full flex-col items-center justify-center gap-y-5 text-center">
        {navigation.map((item, idx) => {
          return (
            <li key={idx}>
              <a className="text-xl font-medium capitalize" href={item.href}>
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
