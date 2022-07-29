import React, { useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import camera from "../../Gallary/camera.png";
import loading from "../../Gallary/loading.gif";
import loadding from "../../Gallary/loading 2.gif";

import { GlobalState } from "../../globalState";
import { CategoryItem } from "./CategoryItem";
const initialValue = {
  title: "",
  image: false,
  _id: 0,
};
export const CreateCategory = () => {
  const state = useContext(GlobalState);
  const [catReLoad, setCatReLoad] = state.categories.catReLoad;
  const [categories] = state.categories.categories;
  const [image, setImage] = useState(false);
  const [imgLoading, setImgLoading] = useState(false);
  const [inputVal, setInputVal] = useState(initialValue);
  const [onEdit, setonEdit] = useState(false);
  // const [onDelLoading, setOnDelLoading] = useState(false);

  const showMessage = (title, icon, text) => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      confirmButtonColor: "#bbb",
      confirmButtonText: "Oky",
      footer: '<a href="" >Mizanur Hasan Khan?</a>',
    });
  };

  const onResetValue = () => {
    setImage(false);
    setImgLoading(false);
    setInputVal(initialValue);
    setonEdit(false);
  };
  const handleUploadImage = async (e) => {
    e.preventDefault();
    setImgLoading(true);
    let file = e.target.files[0];
    if (!file) {
      setImage(false);
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
        setInputVal({ ...inputVal, image: res.data });
        setImage(res.data);
        setImgLoading(false);
      } else {
        setImgLoading(false);
        setInputVal({ ...inputVal, image: false });
        setImage(false);
      }
    } catch (error) {
      console.log(error.message);
      setImgLoading(false);
      setInputVal({ image: false });
      setImage(false);
    }
  };
  const deleteUploadedImage = async () => {
    setImgLoading(true);
    try {
      await axios.post("/img/delete", {
        public_id: image.public_id,
      });
      setImgLoading(false);
      setImage(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const insertCategory = async (e) => {
    e.preventDefault();
    if (!image) return alert("Image not found!");

    if (onEdit) {
      try {
        await axios
          .put("/category", {
            _id: inputVal._id,
            title: inputVal.title,
            image: inputVal.image,
          })
          .then((res) => {
            console.log(res.status);
            if (res.status === 200) {
              alert("Success!");
              onResetValue();
              setCatReLoad(!catReLoad);
            }
          });
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        await axios
          .post("/category", {
            title: inputVal.title,
            image: inputVal.image,
          })
          .then((res) => {
            if (res.status === 200) {
              onResetValue();
              setCatReLoad(!catReLoad);
              showMessage("New Category", "duccess", "Request Sucessful");
            }
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  const onViewAndDelete = async (id, action) => {
    try {
      const res = await categories.filter((category) => {
        if (category._id === id) return true;
        return false;
      });

      if (action === "Edit") {
        if (res) {
          setonEdit(true);
          setImage(res[0].image);
          setInputVal({
            ...inputVal,
            title: res[0].title,
            image: res[0].image,
            _id: res[0]._id,
          });
        } else {
          onResetValue();
        }
      } else {
        await axios.delete(`/category/${res[0]._id}`).then((res) => {
          setCatReLoad(!catReLoad);
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="relative">
      {imgLoading ? (
        <div
          className="absolute bg-[#8e8e8e78] w-full min-h-full z-50 flex
         justify-center items-center "
        >
          <img src={loadding} alt="" />
        </div>
      ) : (
        ""
      )}
      <div className="container py-8">
        <div
          className="md:flex  md:space-x-10  sm:space-y-4 
     md:space-y-0"
        >
          <div
            className="relative flex flex-col justify-center
          flex-1
      items-center h-60 w-full 
      border-dotted 
      border-gray-500 border-2
      text-gray-500 space-y-1"
          >
            <input
              type="file"
              id="uploadImage"
              name="image"
              value={inputVal.image.image}
              className="hidden"
              onChange={handleUploadImage}
            />
            <div className="w-40 h-30 bg-cover"></div>
            <img
              src={imgLoading ? loading : image ? image.url : camera}
              alt=""
              className="relative min-w-fit h-40 bg-cover"
            />
            <label
              htmlFor="uploadImage"
              className="bg-primary
       text-white p-1 px-3 rounded-md cursor-pointer"
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
            <form className="flex flex-col space-y-3">
              <div className="flex justify-between">
                <label
                  className="capitalize text-gray-600
           text-2xl pb-2 underline "
                >
                  Category Title
                </label>
                <div
                  className="flex 
             space-x-1 items-center
              justify-center bg-gray-700 px-2 
              rounded-tl-md rounded-br-md cursor-pointer text-gray-200
              h-8 hover:text-white"
                  onClick={onResetValue}
                >
                  <span className="text-xl">New</span>
                  <FontAwesomeIcon icon={faPlus} className=" text-2xl" />
                </div>
              </div>
              <input
                type="text"
                name="title"
                required
                value={inputVal.title}
                onChange={onChangeInput}
                placeholder="Title of category...."
                className="capitalize border-b-2 border-gray-300
             h-10 rounded-sm pl-3 focus:border-primary
              focus:ring-0 outline-none
              "
              />
              <div className="w-full text-end">
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
        <div className="mt-16 ">
          <h1 className="text-2xl text-gray-600 pb-6 capitalize underline">
            List of Category
          </h1>
          {categories.length === 0 ? (
            <div className="flex justify-center text-primary text-xl">
              Loading...
            </div>
          ) : (
            categories.map((category) => {
              return (
                <div key={category._id} className="mb-5">
                  <CategoryItem
                    category={category}
                    onViewAndDelete={onViewAndDelete}
                  />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
