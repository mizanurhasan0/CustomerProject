import React from "react";

import secondaryBanner2 from "../Gallary/Banner/banner5.jpg";

export const SecondaryBanner = () => {
  return (
    <div>
      <div className="px-5 md:container pt-16">
        <img
          src={secondaryBanner2}
          alt=""
          className=" w-full overflow-hidden mb-16"
        />
      </div>
    </div>
  );
};
