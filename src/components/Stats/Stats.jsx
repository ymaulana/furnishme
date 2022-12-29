import React from "react";

import { stats } from "../../utils/data";

export default function Stats() {
  return (
    <div className="rounded-[20px] bg-tosca py-8 px-2 lg:p-[46px]">
      <div className="flex flex-wrap gap-y-14 lg:gap-y-[30px]">
        {stats.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex min-h-[70px] w-3/6 flex-col justify-center odd:border-r lg:flex-1 lg:odd:border-r  lg:even:border-r lg:even:last:border-none"
            >
              <div className="text-2xl font-semibold lg:text-4xl">
                {item.value}
              </div>
              <div className="mx-auto max-w-[110px] font-light lg:text-xl">
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
