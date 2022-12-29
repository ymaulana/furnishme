import React from "react";

// data
import { features } from "../../utils/data";
import Features1Img from "../../assets/img/features-1.png";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Features() {
  const { title, subtitle, image, items } = features;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[110px]">
          {/* image */}
          <div className="order-1 flex-1 lg:-order-1">
            <img src={Features1Img} alt="couch-image" />
          </div>
          {/* text */}
          <div className="flex flex-1 flex-col justify-end">
            <h2 className="title">{title}</h2>
            <p className="subtitle">{subtitle}</p>
            {/* items */}
            <div>
              {items.map((item, idx) => {
                const { title, subtitle } = item;
                return (
                  <div className="mb-6 flex lg:last:mb-0" key={idx}>
                    <div className="mr-4 text-2xl lg:text-3xl">
                      <IoIosCheckmarkCircle />
                    </div>
                    <div>
                      <h4 className="mb-3 text-base font-semibold lg:text-xl">
                        {title}
                      </h4>
                      <p>{subtitle}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
