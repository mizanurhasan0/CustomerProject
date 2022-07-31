import React from "react";
import { faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const TopBanner = () => {
  return (
    <div className="bg-primary shadow-md ">
      <div
        className="p-1 mx-5 flex justify-between md:container text-white 
      transition-all duration-1000 "
      >
        <div className="">
          <p
            className="hidden invisible md:block
           md:visible"
          >
            Welcome to
            <span
              className="font-semibold text-gray-200 
            text-transparent bg-gradient-to-l from-gray-50 to-gray-300 
            bg-clip-text"
            >
              {" "}
              Global shop BD
            </span>
          </p>
          <p
            className="font-bold md:hidden text-transparent bg-gradient-to-l from-gray-50 to-gray-300 
            bg-clip-text"
          >
            Global Shop BD
          </p>
        </div>

        <div className="flex justify-between md:justify-end space-x-5 items-center">
          <div className="cursor-pointer">
            <FontAwesomeIcon icon={faPhone} className="mx-1" />
            <span className="font-semibold">01926-191306</span>
          </div>
          <div className="cursor-pointer">
            <Link to="/login">
              <FontAwesomeIcon icon={faUser} className="mx-1" />
              <span className="hidden md:inline-block">Login/Register</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
