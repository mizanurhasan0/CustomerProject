import { faSearch, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const Headers = () => {
  return (
    <header className="shadow-md p-5">
      <div
        className="md:container flex 
      justify-between items-center"
      >
        <a
          href="#!"
          className=" text-primary 
        text-2xl font-bold hidden md:block"
        >
          GlobalBD
        </a>
        <div
          className="w-full max-w-xl 
        relative flex md:ml-4
         md:mr-4"
        >
          <span className="absolute top-3 text-gray-400 text-xl ml-4">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            className="w-full border rounded-md border-r-0  pl-12 
              border-primary p-3 focus:outline-none"
            type="text"
            placeholder="Search ..."
          />
          <button
            className="bg-primary absolute w-10
            md:w-20
            right-0 h-full 
             text-white rounded-md rounded-l-none 
             hover:text-[#fff]
             "
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="visible md:invisible 
              md:hidden text-xl hover:text-2xl
              transition-all duration-300  "
            />
            <p
              className="invisible hidden 
            md:block md:visible"
            >
              Search
            </p>
          </button>
        </div>
        <div
          className="text-center md:flex ml-2
       "
        >
          <a href="#!" className="relative group">
            <span className="text-2xl group-hover:text-primary text-gray-500">
              <FontAwesomeIcon icon={faBagShopping} />
            </span>
            <div className="text-primary">Cart</div>
            <span
              className="absolute w-5 h-5 bg-primary -top-1 rounded-full 
              flex justify-center -right-2 items-center text-white text-xs
              text-[#eeee] group-hover:text-[#fff] group-hover:bg-[#313131]"
            >
              8
            </span>
          </a>
        </div>
      </div>
    </header>
  );
};
