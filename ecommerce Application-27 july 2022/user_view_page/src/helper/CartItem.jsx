import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { bag1, bag2, bottle } from "../helper/Images";
export const CartItem = () => {
  return (
    <div className="bg-blue-50">
      <div
        className="relative flex space-x-2 bg-white 
      rounded overflow-hidden group m-2 shadow-md my-2"
      >
        <div className="relative flex items-center justify-center">
          <img src={bag1} alt="" className="h-20 object-fill " />
        </div>
        <div>
          <div className="relative pt-4  text-start">
            <a
              href="#!"
              className="uppercase font-medium
            text-primary"
            >
              Kitchen Holder
            </a>
            <div className="flex items-baseline gap-2">
              <span className="text-primary text-md font-medium">৳ 500</span>
              <span className="text-gray-400 line-through text-xs">৳ 700</span>
            </div>
            <div className="pb-2">
              <p className="text-gray-500 text-sm">
                Size:
                <span className="font-bold text-base text-primary"> S</span>
              </p>
              <p className="text-gray-500 text-sm">
                Color:
                <span className="font-bold text-base text-primary">Blue</span>
              </p>
              <p className="text-gray-500 text-sm">
                Qty:<span className="text-primary font-bold text-base">X2</span>
              </p>
            </div>
          </div>
        </div>
        <FontAwesomeIcon
          icon={faClose}
          className="absolute top-2
            right-2 text-white bg-primary rounded-full
             p-[.15rem] h-4 w-4 cursor-pointer"
        />
      </div>
    </div>
  );
};
