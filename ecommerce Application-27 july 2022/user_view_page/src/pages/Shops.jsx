import React from "react";
import { useContext } from "react";
import { GlobalState } from "../globalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTh,
  faList,
  faStar,
  faHeart,
  faSearch,
  faAngleDown,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import { bag1, bag2, bottle, box1, brashHolder } from "../helper/Images";
import { useState } from "react";

export const Shops = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;
  const [catagoryDropDown, setCategoryDropdown] = useState(false);
  const [brandDropDown, setBrandDropdown] = useState(false);

  const onDropDown = (section) => {
    if (section === "category") {
      setCategoryDropdown(!catagoryDropDown);
    } else if (section === "brand") {
      setBrandDropdown(!brandDropDown);
      console.log(section);
    }
  };
  return (
    <div className="px-5 md:container py-4">
      {/*  */}
      <div className=" grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/*  */}
        <div className="col-span-4 md:col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="space-y-5 divide-y-5 divide-y divide-gray-200">
            <div>
              <div
                className="flex justify-between cursor-pointer pt-2
                "
                onClick={() => onDropDown("category")}
              >
                <h3
                  className=" text-primary mb-3 uppercase font-medium 
                text-base xl:text-xl"
                >
                  Categories
                </h3>
                {catagoryDropDown ? (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-primary mt-[0.35rem]"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-primary mt-[0.35rem]"
                  />
                )}
              </div>
              <div
                className={`space-y-2 ${
                  catagoryDropDown ? "opacity-100 " : "hidden opacity-0 "
                } `}
              >
                {/* map loap */}
                {categories.map((category) => {
                  return (
                    <div className="flex items-center" key={category._id}>
                      <input
                        type="checkbox"
                        id="cat-1"
                        className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                      />
                      <label
                        htmlFor="cat-1"
                        className="text-gray-600 ml-3 cursor-pointer text-sm xl:text-base"
                      >
                        {category.title}
                      </label>
                      <div className="ml-auto text-gray-600 text-sm">(15)</div>
                    </div>
                  );
                })}

                {/*  */}
              </div>
            </div>
            {/*  */}
            <div className="pt-4">
              <div
                className="flex justify-between cursor-pointer"
                onClick={() => onDropDown("brand")}
              >
                <h3
                  className=" text-primary mb-3 uppercase
               font-medium text-base xl:text-xl"
                >
                  Brands
                </h3>
                {brandDropDown ? (
                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="text-primary mt-[0.35rem]"
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="text-primary mt-[0.35rem]"
                  />
                )}
              </div>
              <div
                className={`space-y-2 ${
                  brandDropDown ? "opacity-100" : "hidden opacity-0"
                } `}
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer text-sm xl:text-base"
                  >
                    LG
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-500 capitalize text-sm xl:text-base"
                  >
                    Samsung
                  </label>
                  <div className="ml-auto text-gray-500">(10)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-500 capitalize text-sm xl:text-base"
                  >
                    Walton
                  </label>
                  <div className="ml-auto text-gray-500">(20)</div>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-2"
                    className="mr-3  text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-500 capitalize text-sm xl:text-base"
                  >
                    Sony
                  </label>
                  <div className="ml-auto text-gray-500">(09)</div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
        {/*  */}
        <div className="col-span-4 md:col-span-3">
          <div className="flex ">
            <select
              className="w-40 text-sm text-primary py-3 px-4  border-gray-300 shadow-sm 
        focus:ring-primary focus:border-primary"
            >
              <option>Default sorting </option>
              <option>Men </option>
              <option>Women </option>
              <option>Other </option>
            </select>
            <div className="flex gap-1 ml-auto">
              <div className="h-9 w-10 cursor-pointer flex justify-center items-center rounded bg-primary">
                <FontAwesomeIcon icon={faTh} className="text-xl  text-white" />
              </div>
              <div
                className="h-9 w-10 cursor-pointer flex justify-center
           items-center rounded bg-gray-200"
              >
                <FontAwesomeIcon
                  icon={faList}
                  className="text-xl  text-gray-800 "
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 items-start mt-4 gap-4">
            <div className="shadow group">
              <div className="relative">
                <img src={bag1} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
            items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Pink Bag</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">৳ 500</span>
                  <span className="text-gray-400 text-xs line-through">
                    ৳ 900
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
          "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={bag2} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
            items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Red bag</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">৳ 700</span>
                  <span className="text-gray-400 text-xs line-through">
                    ৳ 1000
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
          "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={bottle} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
            items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Bottle</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">৳ 200</span>
                  <span className="text-gray-400 text-xs line-through">
                    ৳ 300
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
          "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={brashHolder} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
            items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Brash holder</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">৳ 100</span>
                  <span className="text-gray-400 text-xs line-through">
                    ৳ 200
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
          "
              >
                Add to cart
              </button>
            </div>
            <div className="shadow group">
              <div className="relative">
                <img src={box1} alt="" />
                <div
                  className="bg-black inset-0 absolute bg-opacity-40 flex 
            items-center justify-center space-x-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
                >
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                  <FontAwesomeIcon
                    icon={faSearch}
                    className="text-white bg-primary rounded-full p-2 text-md"
                  />
                </div>
              </div>
              <div className="px-3 pt-3">
                <h3 className="font-medium uppercase ">Seed Holder</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">৳ 250</span>
                  <span className="text-gray-400 text-xs line-through">
                    ৳ 500
                  </span>
                </div>
                <div className="flex space-x-1 pt-2 pb-3 items-center">
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <FontAwesomeIcon
                    icon={faStar}
                    className="text-sm text-yellow-400"
                  />
                  <span className="text-sm text-gray-400 pl-3">(110)</span>
                </div>
              </div>
              <button
                className="bg-primary w-full rounded-b-sm p-1 text-white capitalize
          "
              >
                Add to cart
              </button>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};
