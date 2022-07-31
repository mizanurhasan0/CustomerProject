import { faHeart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ProductModel2 = ({ image }) => {
  return (
    <div className="shadow group">
      <div className="relative">
        <img src={image} alt="" />
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
          <span className="text-gray-400 text-xs line-through">৳ 900</span>
        </div>
        <div className="flex space-x-1 pt-2 pb-3 items-center">
          <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
          <FontAwesomeIcon icon={faStar} className="text-sm text-yellow-400" />
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
  );
};
