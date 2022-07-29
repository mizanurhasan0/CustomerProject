import React from "react";
import {
  faBridge,
  faEnvelope,
  faHeart,
  faSearch,
  faShoppingBag,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  balon,
  bag1,
  bag2,
  catly,
  bottle,
  brashHolder,
  facebook,
  whatsapp,
  imo,
  messanger,
  phone,
} from "../helper/Images";
import Slider from "react-slick";
import settings_3 from "../helper/SliderSetting";

export const ProductDetails = () => {
  return (
    <div className=" py-16">
      {/*  */}
      <div className="container grid grid-cols-2 gap-6">
        <div className="col-span-2 md:col-span-1">
          <img src={balon} alt="" />
          <div className="grid grid-cols-5 gap-2 ">
            <img
              src={balon}
              alt=""
              className="w-full shadow border border-primary"
            />
            <img src={balon} alt="" className="w-full shadow" />
            <img src={bag1} alt="" className="w-full shadow" />
            <img src={bag2} alt="" className="w-full shadow" />
            <img src={catly} alt="" className="w-full shadow" />
          </div>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-3xl font-medium uppercase mb-2 text-primary">
            Ladis bag
          </h2>

          <div className="space-y-2">
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Avilability:</span>
              <span className="text-green-500">in Stock</span>
            </p>

            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Brand:</span>
              <span className="text-gray-500">Apex</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Category:</span>
              <span className="text-gray-500">Kitchen</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-semibold text-gray-800">Sku:</span>
              <span className="text-gray-500">BE45VGT</span>
            </p>
            <p className="text-gray-800 font-semibold space-x-2">
              <span className="font-bold text-primary"> ৳ 500</span>
              <span className="text-gray-400 line-through text-sm">
                {" "}
                ৳ 1000
              </span>
            </p>
          </div>
          <p className="pt-5">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document{" "}
          </p>
          {/*  */}

          {/*  */}

          {/*
           */}
          <div className="mt-4">
            <h3 className="text-sm text-gray-800 uppercase mb-1">Quantity</h3>
            <div className="flex border border-gray-300 text-gray-600 divide-x-2 divide-gray-300 w-max ">
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer ">
                -
              </div>
              <div className="h-8 w-8 text-base flex items-center justify-center ">
                4
              </div>
              <div className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer ">
                +
              </div>
            </div>
          </div>
          <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
            <a
              href="#!"
              className="bg-primary border border-primary text-white px-8 
          py-2 font-medium rounded uppercase flex items-center gap-2 
          hover:bg-transparent hover:text-black"
            >
              <FontAwesomeIcon icon={faShoppingBag} /> Add to cart
            </a>
          </div>
          {/*  */}
          <div className=" mt-4 text-center">
            <div className="flex gap-5 items-center justify-center">
              <a
                href="#!"
                className="border rounded-full border-gray-400 hover:text-gray-500
           h-8 w-8 flex items-center justify-center text-gray-400"
              >
                <img src={facebook} alt="" />
              </a>
              <a
                href="#!"
                className="border rounded-full border-gray-400 hover:text-gray-500
           h-8 w-8 flex items-center justify-center text-gray-400"
              >
                <img src={messanger} alt="" />
              </a>
              <a
                href="#!"
                className="border rounded-full border-gray-400 hover:text-gray-500
           h-8 w-8 flex items-center justify-center text-gray-400"
              >
                <img src={whatsapp} alt="" />
              </a>
              <a
                href="#!"
                className="border rounded-full border-gray-400 hover:text-gray-500
           h-8 w-8 flex items-center justify-center text-gray-400"
              >
                <img src={imo} alt="" />
              </a>
            </div>
            <div className="flex gap-3 items-center justify-center">
              <img src={phone} alt="" className="w-6 h-6 md:w-8 md:h-8 mt-5" />
              <p className="text-base md:text-2xl font-bold text-primary mt-5">
                +880 1926-191306
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className="container pt-10 ">
        <h3
          className="border-b border-gray-200 text-primary font-medium
        text-2xl "
        >
          Product Details
        </h3>
        <div className="w-full pt-6">
          <div className="text-gray-500 space-y-3">
            <p className="columns-1 md:columns-2 xl:columns-3 text-justify">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. In publishing
              and graphic design, Lorem ipsum is a placeholder text commonly
              used to demonstrate the visual form of a document or a typeface
              without relying on meaningful content. In publishing and graphic
              design, Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form of a document or a typeface without
              relying on meaningful content.
            </p>
          </div>
        </div>
      </div>
      {/* Separed............. */}
      <div className="bg-blue-50 mt-10">
        <div className="px-5 md:container pb-16 ">
          <h2 className="text-2xl uppercase font-medium text-gray-500 mb-6 pt-4">
            Related Products
          </h2>

          <div>
            <Slider {...settings_3}>
              <div className="bg-blue-50">
                <div className="bg-white shadow rounded overflow-hidden group m-2">
                  <div className="relative">
                    <img
                      src={catly}
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
                      href="/details/2"
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
                      src={bag1}
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
                        Ladis Bag
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
                    <img
                      src={brashHolder}
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
                        Brush Holder
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
                      src={bottle}
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
                        Water bottle
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
    </div>
  );
};
