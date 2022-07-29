import React from "react";
import banner4 from "../Gallary/Banner/banner4.jpg";

export const HeaderBanner = () => {
  return (
    <div
      className="bg-cover bg-no-repeat 
      bg-center h-96 xl:h-[26rem]
     bg-white border-b-2 border-primary
     shadow-md border-opacity-40"
    >
      <div className="px-5 md:px-0 md:container flex justify-between">
        <div
          className="hidden invisible md:inline-block md:visible w-[17rem] h-96 xl:h-[25rem]
           md:transition-all md:duration-500 md:ease-in-out
          transition-all ease-in-out duration-500 "
        ></div>

        <div className="relative bg-yellow-300 h-[23rem] xl:h-[25rem] w-full  mr-0">
          <img
            src={banner4}
            alt=""
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
