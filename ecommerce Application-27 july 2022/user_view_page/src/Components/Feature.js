import { faCar, faClock, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Feature = () => {
  return (
    <div className="container py-12 ">
      <div className="w-10/12 grid grid-cols-3 gap-6 justify-center mx-auto">
        {/*  */}
        <div className=" border border-primary  text-center cursor-help">
          <div
            className="flex items-center rounded-sm
           space-x-2 mb-1 p-2"
          >
            <FontAwesomeIcon
              icon={faCar}
              className="w-6 h-6 md:w-8 md:h-8 xl:h-10
               xl:w-10 text-primary"
            />
            <h4
              className="font-medium capitalize text-sm
                md:text-base xl:text-2xl
              text-primary  w-full"
            >
              Free Shipping
            </h4>
          </div>
          <p className="p-1 text-white text-sm md:text-base bg-primary">
            Order over <span className="font-bold">৳ 1500/-</span>
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className=" border border-primary  text-center cursor-help">
          <div
            className="flex items-center rounded-sm
           space-x-2 mb-1 p-2"
          >
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="w-6 h-6 md:w-8 md:h-8 xl:h-10
               xl:w-10 text-primary"
            />
            <h4
              className="font-medium capitalize text-sm
                md:text-base xl:text-2xl
              text-primary  w-full"
            >
              Money Return
            </h4>
          </div>
          <p className="p-1 text-white text-sm md:text-base bg-primary">
            30 days money return
          </p>
        </div>
        {/*  */}
        {/*  */}
        <div className=" border border-primary  text-center cursor-help">
          <div
            className="flex items-center rounded-sm
           space-x-2 mb-1 p-2"
          >
            <FontAwesomeIcon
              icon={faClock}
              className="w-6 h-6 md:w-8 md:h-8 xl:h-10
               xl:w-10 text-primary"
            />
            <h4
              className="font-medium capitalize text-sm
                md:text-base xl:text-2xl
              text-primary  w-full"
            >
              24/7 supporting
            </h4>
          </div>
          <p className="p-1 text-white text-sm md:text-base bg-primary">
            Customer support
          </p>
        </div>
        {/*  */}
        {/* <div className="flex border border-primary rounded-sm px-3 items-center gap-5">
          <FontAwesomeIcon icon={faClock} className="text-primary w-12 h-12" />
          <div>
            <h4 className="capitalize text-lg font-medium">24/7 support</h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div> */}
        {/*  */}
        {/* <div className="flex border border-primary rounded-sm px-3 items-center gap-5">
          <FontAwesomeIcon
            icon={faMoneyBill}
            className="text-primary w-12 h-12"
          />
          <div>
            <h4 className="capitalize text-lg font-medium">Money return</h4>
            <p className="text-gray-500 text-sm">30 days money return</p>
          </div>
        </div> */}
        {/*  */}
      </div>
    </div>
  );
};
