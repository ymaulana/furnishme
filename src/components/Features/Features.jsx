import React from "react";

// data
import { features } from "../../utils/data";
import Features1Img from "../../assets/img/features-1.png";

export default function Features() {
  const { title, subtitle, image, items } = features;
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-x-[110px]">
          {/* image */}
          <div className="flex-1 ">
            <img src={Features1Img} alt="couch-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
