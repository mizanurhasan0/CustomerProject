import React from "react";
import { useContext } from "react";
import { GlobalState } from "../globalState";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faArrowRight,
  faTh,
  faList,
  faStar,
  faHeart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  bag1,
  bag2,
  balon,
  bottle,
  box1,
  brashHolder,
  catly,
} from "../helper/Images";

export const Shops = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;
  // console.log(categories);
  return (
    <div className="container py-4">
      {/*  */}
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
        {/*  */}
        <div className="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
          <div className="space-y-5 divide-y-5 divide-y divide-gray-200">
            <div>
              <h3 className="text-xl text-primary mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
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
                        className="text-gray-600 ml-3 cursor-pointer"
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
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="cat-1"
                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
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
                  <label htmlFor="cat-2" className="text-gray-500 capitalize">
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
                  <label htmlFor="cat-2" className="text-gray-500 capitalize">
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
                  <label htmlFor="cat-2" className="text-gray-500 capitalize">
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
        <div className="col-span-3">
          <div className="flex ">
            <select
              className="w-40 text-sm text-gray-600 py-3 px-4  border-gray-300 shadow-sm 
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

          <div className="grid grid-cols-3 items-start mt-4 gap-4">
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
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
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
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
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
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
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
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
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
                <h3 className="font-medium uppercase ">Guyer chair</h3>
                <div className="flex items-center">
                  <span className="font-medium  text-primary mr-4">$45.00</span>
                  <span className="text-gray-400 text-xs line-through">
                    $50.00
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
        </div>
        {/*  */}
      </div>
      {/*  */}
    </div>
  );
};
