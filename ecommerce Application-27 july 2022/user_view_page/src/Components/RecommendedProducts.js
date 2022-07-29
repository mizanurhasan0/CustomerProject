import { faHeart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import settings_3 from "../helper/SliderSetting";

import bag2 from "../Gallary/products/bag2.jpg";
import catly from "../Gallary/products/catly.jpg";
import routerHolder from "../Gallary/products/routerHolder.jpg";
import seedBox from "../Gallary/products/seedBox.jpg";

export const RecommendedProducts = () => {
  return (
    <div className="bg-blue-50">
      <div className="px-5 md:container pb-16 ">
        <h2 className="text-2xl uppercase font-medium text-gray-500 mb-6 pt-4">
          Just for you
        </h2>

        <div>
          <Slider {...settings_3}>
            <div className="bg-blue-50">
              <div className="bg-white shadow rounded overflow-hidden group m-2">
                <div className="relative">
                  <img src={bag2} alt="" className="h-40 object-fill w-full" />
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
                      Ladies Bag
                    </a>
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary text-md font-medium">
                        ৳ 500
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ৳ 700
                      </span>
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
                    href="#!"
                    className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-blue-50">
              <div className="bg-white shadow rounded overflow-hidden group m-2">
                <div className="relative">
                  <img
                    src={seedBox}
                    alt=""
                    className="h-40 object-fill w-full"
                  />
                  <div
                    className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
                  >
                    <a href="#!">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="bg-primary p-2 rounded-full text-white flex 
                        items-center justify-center"
                      />
                    </a>
                    <a href="#!">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="bg-primary p-2 rounded-full text-white flex 
                        items-center justify-center"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="pt-4 mx-3 ">
                    <a href="#!" className="uppercase font-medium">
                      Seed Box
                    </a>
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary text-md font-medium">
                        ৳ 45.00
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ৳ 55.00
                      </span>
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
                    href="#!"
                    className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-blue-50">
              <div className="bg-white shadow rounded overflow-hidden group m-2">
                <div className="relative">
                  <img src={catly} alt="" className="h-40 object-fill w-full" />
                  <div
                    className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
                  >
                    <a href="#!">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="bg-primary p-2 rounded-full text-white flex 
                        items-center justify-center"
                      />
                    </a>
                    <a href="#!">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="bg-primary p-2 rounded-full text-white flex 
                        items-center justify-center"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="pt-4 mx-3 ">
                    <a href="#!" className="uppercase font-medium">
                      Cattle
                    </a>
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary text-md font-medium">
                        ৳ 300.00
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ৳ 400.00
                      </span>
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
                    href="#!"
                    className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="bg-blue-50">
              <div className="bg-white shadow rounded overflow-hidden group m-2">
                <div className="relative">
                  <img
                    src={routerHolder}
                    alt=""
                    className="h-40 object-fill w-full"
                  />
                  <div
                    className="inset-0 bg-black absolute flex 
            items-center justify-center bg-opacity-40  
            gap-2 opacity-0 group-hover:opacity-100"
                  >
                    <a href="#!">
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="bg-primary p-2 rounded-full text-white flex 
                        items-center justify-center"
                      />
                    </a>
                    <a href="#!">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="bg-primary p-2 rounded-full text-white flex 
                        items-center justify-center"
                      />
                    </a>
                  </div>
                </div>
                <div>
                  <div className="pt-4 mx-3 ">
                    <a href="#!" className="uppercase font-medium">
                      Router holder
                    </a>
                    <div className="flex items-baseline gap-2">
                      <span className="text-primary text-md font-medium">
                        ৳ 150.00
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ৳ 250.00
                      </span>
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
                    href="#!"
                    className="w-full block bg-primary text-white text-center mt-3 p-1 capitalize"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};
