import React from "react";
import { contact, phone, location, email } from "../helper/Images";

export const Contact = () => {
  return (
    <div className=" mt-11">
      <div className="relative mx-5 md:container py-5">
        <img src={contact} alt="" className="w-full rounded-md object-cover" />

        <p
          className="absolute top-10 left-[30%]
          bg-gradient-to-r from-white to-gray-100
           shadow-2xl shadow-primary rounded-xl
           text-2xl md:text-6xl font-bold text-transparent bg-clip-text"
        >
          Contact us
        </p>
      </div>
      <div className="bg-blue-50 py-5">
        <div className="mx-5 md:container mt-10 ">
          <div className="md:flex md:space-x-4 ">
            <div className="md:space-y-4 md:flex-1 text-gray-500">
              <h2 className="text-primary">Let's discuss your project</h2>
              <div className="flex items-center space-x-2 ">
                <img src={phone} alt="" className="" />
                <span className="font-bold">+880 1926-191306</span>
              </div>
              <div className="flex items-center space-x-2">
                <img className="" src={email} alt="" />
                <p>gbshopbd@gmail.com</p>
              </div>
              <div className="flex items-center space-x-2">
                <img className="" src={location} alt="" />
                <p>27, Dhanmondi, Dhaka-1209</p>
              </div>
            </div>
            <div className="mt-10 md:mt-0 md:flex-1 text-gray-500">
              <p className="mb-4">
                <b>What’s your story?</b> Get in touch. Always available for
                freelancing if the right project comes along. me.
              </p>
              <form className="flex flex-col space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  className="border-primary  border-b-2 outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                  className="border-primary  border-b-2  outline-none"
                />
                <input
                  type="text"
                  placeholder="Email"
                  name="user_email"
                  className="border-primary  border-b-2 outline-none"
                />
                <textarea
                  rows="5"
                  placeholder="Message"
                  name="message"
                  className="border-primary  border-b-2  outline-none"
                />
                <div className="w-full text-center">
                  <button
                    className="bg-primary p-1 px-6 rounded-md text-white border-2 border-primary
                    hover:bg-transparent hover:text-primary hover:border-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};
