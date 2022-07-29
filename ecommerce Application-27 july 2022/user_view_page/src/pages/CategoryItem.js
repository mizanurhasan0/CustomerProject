import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import loadding from "../Gallary/loadding2.gif";
import { GlobalState } from "../globalState";
import axios from "axios";

export const CategoryItem = ({ category, onViewAndDelete }) => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;
  const [catReLoad, setCatReLoad] = state.categories.catReLoad;
  const [onDelLoading, setOnDelLoading] = useState(false);

  const onDelete = async (id) => {
    setOnDelLoading(true);
    try {
      const res = await categories.filter((category) => {
        if (category._id === id) return true;
        return false;
      });

      await axios.delete(`/category/${res[0]._id}`).then((res) => {
        setCatReLoad(!catReLoad);
      });
      setOnDelLoading(false);
    } catch (error) {
      console.log(error.message);
      setOnDelLoading(false);
    }
  };
  return (
    <div>
      <div className="flex bg-gray-50 shadow-lg rounded-sm text-gray-500 mb-2 hover:bg-gray-100 hover:shadow-xl cursor-pointer group">
        <img src={category.image.url} alt="" className="w-28 h-28" />
        <div className="w-full max-h-fit relative">
          <div className="flex justify-between border-b-2 border-primary ml-2">
            <h2
              className="text-xl p-2 capitalize group-hover:text-2xl 
                     duration-300"
            >
              {category.title}
            </h2>
            <span>
              <button
                onClick={() => onDelete(category._id)}
                className="relative bg-primary w-20 h-8 m-2
                                    rounded-md text-white text-xl border
                                  border-primary hover:bg-transparent 
                                  hover:text-gray-800 transition duration-300
                                  "
              >
                {onDelLoading ? (
                  <img src={loadding} className="h-7 rounded-md" alt="" />
                ) : (
                  <FontAwesomeIcon icon={faTrash} />
                )}
              </button>
              <button
                onClick={() => onViewAndDelete(category._id, "Edit")}
                className="bg-green-800 w-20 h-8 m-2 
                           rounded-md text-white text-xl border 
                           border-green-800 hover:bg-transparent 
                           hover:text-gray-800 transition duration-300"
              >
                <FontAwesomeIcon icon={faEdit} />
              </button>
            </span>
          </div>
          <span
            className="absolute  bottom-0 right-0 
           p-3 text-md"
          >
            Number of product: <b>{20}</b>
          </span>
        </div>
      </div>
    </div>
  );
};
