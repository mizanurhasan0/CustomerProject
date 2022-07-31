import {
  faSearch,
  faBagShopping,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { CartItem } from "../helper/CartItem";
import { Link } from "react-router-dom";
import { GlobalState } from "../globalState";

export const Headers = () => {
  const state = useContext(GlobalState);
  const [reload, setReload] = state.reload;

  const [cartActive, setCartActive] = useState(false);
  const onActiveCart = () => {
    setCartActive(!cartActive);
    setReload(!reload);
  };
  return (
    <header className="shadow-md p-5 ">
      <div
        className="md:container flex 
      justify-between items-center "
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
          <button
            onClick={onActiveCart}
            className="relative group
          "
          >
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
          </button>
          {/* SHopping bar */}
          <div
            className={`absolute bg-blue-100 pb-10  w-80 right-1 z-20 
          top-28 ${cartActive ? " " : "hidden"}`}
          >
            <div className="relative bg-gray-100 p-5">
              {" "}
              <FontAwesomeIcon
                icon={faClose}
                className="absolute top-2 left-2
                text-gray-600 cursor-pointer"
                onClick={() => setCartActive(!cartActive)}
              />
              <h1 className="text-primary font-semibold tracking-widest">
                Shopping cart
              </h1>
            </div>
            <div className="">
              <CartItem />
              <CartItem />
              <div>
                <div
                  className="flex flex-col mx-2
               text-gray-600 border-t-2 border-primary mt-5
               border-b-2 "
                >
                  <div className="flex justify-between mt-5">
                    <p>Items</p>
                    <span className="font-bold tracking-wider">৳ 1500</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p>Shipping</p>
                    <span className="font-bold tracking-wider">৳ 60</span>
                  </div>
                  <div className="flex justify-between mt-2 mb-2">
                    <p>Tax</p>
                    <span className="font-bold tracking-wider">৳ 0</span>
                  </div>
                </div>
                <div className="flex justify-between mt-2 mb-2 mx-2">
                  <p className="text-semibold">TOTAL</p>
                  <span className="font-bold tracking-wider">৳ 1560</span>
                </div>
                <Link
                  to="/cart"
                  className="bg-primary rounded-3xl
                 text-white p-2 px-5 w-60 border-2 border-primary
                 hover:bg-transparent hover:text-primary transform 
                 transition-all duration-500 "
                  onClick={() => onActiveCart()}
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
          {/* Shopping bar end */}
        </div>
      </div>
    </header>
  );
};
