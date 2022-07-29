import React from "react";
import { facebook, whatsapp, messanger, imo } from "../helper/Images";
export const Footer = () => {
  return (
    <div>
      <div className="mx-5 md:container pt-10">
        <footer className="bg-white pt-6 pb-12 border-t border-gray-100">
          <div className="grid grid-cols-2">
            {/*  */}
            <div className="col-span-1 space-y-8">
              <h3
                className="font-semibold text-2xl 
                bg-gradient-to-r from-primary to-sky-200 
              bg-clip-text text-transparent"
              >
                Global Shop BD
              </h3>
              <p className="text-gray-500">
                This is online page, You have new and exclusive product here.
              </p>
              <div className="flex space-x-6">
                <a href="#!" className="text-gray-400 hover:text-gray-500">
                  <img src={facebook} alt="" className="h-8 w-8" />
                </a>
                <a href="#!" className="text-gray-400 hover:text-gray-500">
                  <img src={whatsapp} alt="" className="h-8 w-8" />
                </a>
                <a href="#!" className="text-gray-400 hover:text-gray-500">
                  <img src={messanger} alt="" className="h-8 w-8" />
                </a>
                <a href="#!" className="text-gray-400 hover:text-gray-500">
                  <img src={imo} alt="" className="h-8 w-8" />
                </a>
              </div>
            </div>
            {/*  */}
            <div className="col-span-1 grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Solutions
                </h3>
                <div className="mt-4 space-y-4">
                  <a href="#!" className="text-base text-gray-500 block">
                    Marketing
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Anaytics
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Commerce
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Insight
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                  Support
                </h3>
                <div className="mt-4 space-y-4">
                  <a href="#!" className="text-base text-gray-500 block">
                    facebook
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    whatsapp
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    imo
                  </a>
                  <a href="#!" className="text-base text-gray-500 block">
                    Viber
                  </a>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </footer>
      </div>
      <div
        className="bg-primary
      "
      >
        <div className="container flex items-center justify-center">
          <p className="text-white">SoftwareBd- All right reserved-2022</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
