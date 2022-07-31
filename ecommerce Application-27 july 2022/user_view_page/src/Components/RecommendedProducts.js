import { faHeart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import settings_3 from "../helper/SliderSetting";

import { bag1, brashHolder, bottle, balon, catly } from "../helper/Images";
import { ProductModel } from "../helper/ProductModel";

export const RecommendedProducts = () => {
  return (
    <div className="bg-blue-50">
      <div className="px-5 md:container pb-16 ">
        <h2 className="text-2xl uppercase font-medium text-gray-500 mb-6 pt-4">
          Just for you
        </h2>

        <div>
          <Slider {...settings_3}>
            <ProductModel image={bag1} />
            <ProductModel image={brashHolder} />
            <ProductModel image={bottle} />
            <ProductModel image={balon} />
            <ProductModel image={catly} />
          </Slider>
        </div>
      </div>
    </div>
  );
};
