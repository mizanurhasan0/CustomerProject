import React, { useContext } from "react";
import { GlobalState } from "../globalState";

export const Categories = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;

  return (
    <div className="container py-16">
      <h2 className="uppercase font-medium text-3xl text-[#717171] mb-6">
        Shop by category
      </h2>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => {
          return (
            <div
              className="relative group rounded-sm overflow-hidden max-h-52"
              key={category._id}
            >
              <img src={category.image.url} alt="" className="h-full w-full " />
              <a
                href="#!"
                className="absolute uppercase inset-0 bg-[black] bg-opacity-40 
            flex items-center justify-center text-xl text-[white]
            font-roboto font-medium group-hover:bg-opacity-50"
              >
                {category.title}
              </a>
            </div>
          );
        })}

        {/*  */}
      </div>
    </div>
  );
};
