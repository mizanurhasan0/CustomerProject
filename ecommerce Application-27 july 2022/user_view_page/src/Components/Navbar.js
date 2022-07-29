import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../globalState";

export const Navbar = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;
  const [showCategory, setShowCategory] = useState(true);
  const [scrollValue, setScrollValue] = useState(true);

  useEffect(() => {
    if (window.location.href == window.location.origin + "/") {
      setShowCategory(true);
    } else {
      setShowCategory(false);
    }
  }, []);
  const scrollingValue = () => {
    if (window.location.href != window.location.origin) {
      setScrollValue(true);
      setShowCategory(false);
      if (window.scrollY < 80) {
        setScrollValue(true);
        setShowCategory(false);
      } else {
        setScrollValue(false);
        setShowCategory(false);
      }
    } else {
      if (window.scrollY < 80) {
        setScrollValue(true);
        setShowCategory(true);
      } else {
        setScrollValue(false);
        setShowCategory(false);
      }
    }
  };
  const UrlClickEven = (value) => {
    if (value === "home") {
      setShowCategory(true);
    } else if (value === "shop") {
      setShowCategory(false);
      setScrollValue(true);
    }
  };
  const openCategory = () => {
    var width = window.innerWidth;

    if (width < 772 || window.scrollY > 80) {
      setShowCategory(!showCategory);
    } else {
      if (window.location.href === window.location.origin + "/") {
        setShowCategory(true);
      } else {
        setShowCategory(false);
      }
    }
  };
  window.addEventListener("scroll", scrollingValue);

  if (categories.length === 0) {
    return (
      <div
        className="container text-primary flex justify-center
       items-center px-8 py-4 text-2xl"
      >
        Loading....
      </div>
    );
  }

  return (
    <div
      className={`bg-primary ${scrollValue ? "" : "fixed top-0"} w-full z-10`}
    >
      <div className="px-5 md:container flex">
        <div
          className="relative px-8 py-4 flex items-center
           cursor-pointer text-primary bg-white
           group"
          onClick={() => openCategory()}
        >
          <FontAwesomeIcon icon={faBars} />
          <span className="ml-2 capitalize hidden md:inline-block">
            {" "}
            All category
          </span>

          <div
            className={`absolute ${
              showCategory ? "opacity-100" : "opacity-0 hidden"
            }
            w-[250%] md:w-full left-0 top-full h-[23.7rem]
            xl:h-[25.8rem]
             bg-white 
            shadow-md
             py-3 
            text-gray-800 
             group-hover:visible
             transition-all ease-in-out delay-150 
            duration-500
            z-50
            `}
          >
            {categories.map((category) => {
              return (
                <div key={category._id}>
                  <a
                    href="#!"
                    className="flex items-center py-2 px-0
                     hover:bg-[#e5e5e5]
                      transition"
                  >
                    <span className="ml-6 capitalize ">{category?.title}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-grow items-center justify-end text-white pl-5">
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-200 hover:text-white transition"
              onClick={() => UrlClickEven("home")}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="text-gray-200 hover:text-white transition"
              onClick={() => UrlClickEven("shop")}
            >
              Shop
            </Link>
            <Link to="/" className="text-gray-200 hover:text-white transition">
              About
            </Link>
            <Link to="/" className="text-gray-200 hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};
