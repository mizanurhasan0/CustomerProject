import { faHeart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const ProductModel = ({ image }) => {
  return (
    <div className="bg-blue-50">
      <div className="bg-white shadow rounded overflow-hidden group m-2">
        <div className="relative">
          <img src={image} alt="" className="h-40 object-fill w-full" />
          <div
            className="inset-0 bg-black absolute flex 
items-center justify-center bg-opacity-40  
gap-2 opacity-0 group-hover:opacity-100"
          >
            <a href="#!">
              <FontAwesomeIcon
                icon={faSearch}
                className="bg-primary p-2 rounded-full text-white flex items-center justify-center "
              />
            </a>
            <a href="#!">
              <FontAwesomeIcon
                icon={faHeart}
                className="
            bg-primary p-2 rounded-full text-white flex 
            items-center justify-center"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="pt-4 mx-3 ">
            <a href="#!" className="uppercase font-medium">
              Kitchen Holder
            </a>
            <div className="flex items-baseline gap-2">
              <span className="text-primary text-md font-medium">৳ 500</span>
              <span className="text-gray-400 line-through text-xs">৳ 700</span>
            </div>
            <div className="flex pt-2 gap-2">
              <div className="text-yellow-400 gap-1 flex">
                <FontAwesomeIcon icon={faStar} className="text-md" />
                <FontAwesomeIcon icon={faStar} className="text-md" />
                <FontAwesomeIcon icon={faStar} className="text-md" />
                <FontAwesomeIcon icon={faStar} className="text-md" />
                <FontAwesomeIcon icon={faStar} className="text-md" />
              </div>
              <h4 className="text-gray-700 text-xs">(150)</h4>
            </div>
          </div>
          <a
            href="/details/2"
            className="w-full block bg-primary
             text-white text-center mt-3 p-1 capitalize"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};
