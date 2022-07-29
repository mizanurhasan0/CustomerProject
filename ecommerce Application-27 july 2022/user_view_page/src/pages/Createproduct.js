import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { GlobalState } from "../globalState";
import defaultImage from "../Gallary/camera.png";
import loaddingImage from "../Gallary/loadding2.gif";
import axios from "axios";

const initialValue = {
  product_id: "",
  title: "",
  price: 0,
  description: "",
  content: "",
  image: false,
  category: "",
  _id: 0,
};

export const Createproduct = () => {
  const state = useContext(GlobalState);
  const [categories] = state.categories.categories;
  const [image, setImage] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [inputVal, setInputVal] = useState(initialValue);
  const [onEdit, setonEdit] = useState(false);

  const handleUploadImage = async (e) => {
    e.preventDefault();
    setImgLoading(true);
    let file = e.target.files[0];

    if (!file) {
      return alert("File not exist!");
    }
    if (file.size > 1024 * 1024) {
      return alert("Too big image");
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      return alert("File format is incorrect!");
    }
    let formData = new FormData();
    formData.append("file", file);
    try {
      const res = await axios.post("/img", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        setInputVal({
          ...inputVal,
          image: res.data,
        });
        setImage(res.data);
        setImgLoading(false);
      } else {
        setInputVal({
          ...inputVal,
          image: { public_id: "", url: "" },
        });
        setImgLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setImgLoading(false);
    }
  };
  const deleteUploadedImage = async (e) => {
    e.preventDefault();
    setImgLoading(true);
    try {
      const res = await axios.post(`/img/delete`, {
        product_id: image.product_id,
      });
      if (res.status === 200) {
        console.log("deleted image");
        setInputVal({ ...inputVal, image: false });
        setImage(false);
        setImgLoading(false);
      } else {
        console.log("Not deleted");
        setImgLoading(false);
      }
    } catch (error) {
      console.log(error.message);
      setImgLoading(false);
    }
  };
  const onResetValue = () => {
    setInputVal(initialValue);
  };
  const onChangeInput = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setInputVal({
      ...inputVal,
      [name]: value,
    });
    // console.log(e.target.rows + ":" + e.target.scrollHeight);
  };

  const insertCategory = () => {};

  return (
    <div className="container">
      <div
        className="md:flex  
      md:space-x-10  sm:space-y-4 
      md:space-y-0 mt-10"
      >
        <div
          className="relative flex flex-col 
                  justify-center
                  flex-1
                items-center h-60 w-full 
                border-dotted 
                border-gray-500 border-2
                text-gray-500 space-y-1 mt-14"
        >
          <input
            type="file"
            id="uploadImage"
            name="image"
            value={inputVal.image.image}
            className="hidden"
            onChange={handleUploadImage}
            accept=".jpg, .jpeg, .png"
          />
          <div className="w-40 h-30 bg-cover"></div>
          <img
            src={imgLoading ? loaddingImage : image ? image.url : defaultImage}
            alt=""
            className="relative  h-40 border-2 "
          />
          <label
            htmlFor="uploadImage"
            className="bg-primary
          text-white p-1 px-3 rounded-md 
          cursor-pointer"
          >
            Choose Image
          </label>
          <p>Maximum file size 512 MB</p>
          <button
            onClick={deleteUploadedImage}
            className={`${
              image ? "" : "hidden"
            } absolute  top-0 right-1 rounded-full w-7 h-7 
            text-white cursor-pointer
            border-primary border hover:bg-transparent
            hover:text-black
            duration-500 transition bg-primary`}
          >
            X
          </button>
        </div>
        <div className="flex-1">
          <div
            className="block ml-auto right-0 space-x-1 
            bg-primary
             text-center px-2 
      rounded-tl-md rounded-br-md cursor-pointer text-gray-200
      h-8 w-28 hover:text-white"
            onClick={onResetValue}
          >
            <span className="text-xl">New</span>
            <FontAwesomeIcon icon={faPlus} className=" text-2xl" />
          </div>

          <form className="flex flex-col ">
            <div className="border border-gray-200 mt-5 p-2 rounded-md shadow-lg hover:shadow-xl hover:bg-white">
              <div className="flex justify-between">
                <label className="capitalize text-gray-600 font-bold text-md   ">
                  Product ID
                </label>
              </div>
              <input
                type="text"
                name="product_id"
                required
                value={inputVal.product_id}
                onChange={onChangeInput}
                placeholder="Product unique ID...."
                className="capitalize border-b-2 
                border-gray-300
     h-10 rounded-sm 
     focus:border-primary
     w-full
      focus:ring-0 outline-none
      "
              />
            </div>
            <div className="border border-gray-200  mt-5 p-2 rounded-md shadow-lg hover:shadow-xl hover:bg-white">
              <div className="flex justify-between">
                <label className="capitalize text-gray-600  font-bold text-md pt-2">
                  Title
                </label>
              </div>
              <input
                type="text"
                name="title"
                required
                value={inputVal.title}
                onChange={onChangeInput}
                placeholder="Title of Product...."
                className="capitalize border-b-2 border-gray-300
     h-10 rounded-sm  focus:border-primary  w-full
      focus:ring-0 outline-none"
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="border border-gray-200 mt-5 p-2 rounded-md shadow-lg hover:shadow-xl hover:bg-white">
              <div className="flex justify-between">
                <label className="capitalize text-gray-600 font-bold text-md">
                  Price
                </label>
              </div>
              <input
                type="number"
                name="price"
                required
                value={inputVal.price}
                onChange={onChangeInput}
                placeholder="Product price...."
                className="capitalize border-b-2 
                border-gray-300
     h-10 rounded-sm pl-3 
     focus:border-primary
     w-full
      focus:ring-0 outline-none
      "
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="border border-gray-200 mt-5 p-2 rounded-md shadow-lg hover:shadow-xl hover:bg-white">
              <div className="flex justify-between">
                <label className="capitalize text-gray-600 font-bold text-md   ">
                  Description
                </label>
              </div>

              <textarea
                type="text"
                // name="description"
                required
                // value={inputVal.description}
                onChange={onChangeInput}
                placeholder="Product description...."
                className={`capitalize border-b-2 
                border-gray-300  h-20
                  rounded-sm mt-2 
                focus:border-primary
                w-full
                  focus:ring-0 outline-none
          `}
              />
            </div>
            {/*  */}
            {/*  */}
            <div className="border border-gray-200 mt-5 p-2 rounded-md shadow-lg hover:shadow-xl hover:bg-white">
              <div className="flex justify-between">
                <label className="capitalize text-gray-600 font-bold text-md   ">
                  Content
                </label>
              </div>
              <textarea
                type="text"
                name="content"
                required
                value={inputVal.content}
                onChange={onChangeInput}
                placeholder="Product content...."
                className="capitalize border-b-2 
                border-gray-300
     h-20 rounded-sm mt-2
     focus:border-primary
     w-full
      focus:ring-0 outline-none
      "
              />
            </div>
            {/*  */}
            <div
              className="border border-gray-200 mt-5 p-2 rounded-md 
            shadow-lg hover:shadow-xl hover:bg-white"
            >
              <div className="flex justify-between">
                <label className="capitalize text-gray-600 font-bold text-md">
                  Categorys
                </label>
              </div>
              <select
                name="category"
                id="category"
                className="w-full pt-2 pb-2 text-gray-600
                 border-none
                 "
              >
                <option value={""} className="capitalize hover:bg-primary">
                  Select
                </option>

                {categories.map((category) => {
                  return (
                    <option
                      key={category._id}
                      value={category._id}
                      className="capitalize"
                    >
                      {category.title}
                    </option>
                  );
                })}
              </select>
            </div>
            {/*  */}
            <div className="w-full text-end mt-5">
              <button
                onClick={insertCategory}
                className="bg-primary text-white
   rounded-md border border-primary w-32 
    p-1  
   hover:bg-transparent hover:text-gray-800
   disabled:opacity-50 disabled:hover:bg-primary disabled:hover:text-white"
                disabled={!image || !inputVal.title ? true : false}
              >
                {onEdit ? "Update" : "Add"}
                <FontAwesomeIcon icon={faPlus} className="ml-2" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
