import React from "react";

// import data
import { newInStore } from "../../utils/data";
// import arrow icon
import { IoIosArrowRoundForward } from "react-icons/io";
import { NewItemsSlider } from "../NewItemsSlider";

export default function NewItems() {
  const { title, subtitle, link, icon } = newInStore;
  return (
    <section className="section relative overflow-hidden lg:min-h-[540px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <div className="mb-6 flex items-baseline gap-x-6 md:flex-col lg:mb-0">
            <h2 className="title max-w-[245px] lg:mt-[30px] lg:mb-[90px]">
              {title}
            </h2>
            <p className="max-w-[245px] lg:mb-12">{subtitle}</p>
            <div className="hidden items-center lg:flex">
              <a
                className="border-primary font-medium transition-all hover:border-b lg:items-center"
                href="#"
              >
                {link}
              </a>
              <div className="text-3xl">
                <IoIosArrowRoundForward />
              </div>
            </div>
          </div>
          {/* product slider */}
          <div className="lg:absolute lg:-right-24 lg:max-w-[800px] xl:max-w-[990px]">
            <NewItemsSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
