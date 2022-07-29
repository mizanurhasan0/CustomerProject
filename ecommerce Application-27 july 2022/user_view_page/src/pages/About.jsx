import React from "react";
import { ourValues } from "../helper/Images";

export const About = () => {
  return (
    <div className="pt-16 ">
      <div className="bg-blue-50 py-5">
        <div className="mx-5 md:container text-center ">
          <h1
            className="font-bold
         text-primary text-4xl
          capitalize p-4"
          >
            Our story
          </h1>
          <p
            className="md:columns-2 text-justify md:gap-6 text-gray-500
         leading-loose"
          >
            A company story video (a.k.a about us video or mission video) tells
            the story of your company and values. They can be a great tool for
            connecting with customers, sharing your passion, and humanizing your
            brand. Company story videos often feature team members talking
            testimonial-style about what they do and why they do it. One of the
            most common reasons companies decide to create a company story video
            is to show off the personalities that make up their team along with
            the mission and values behind them. Though testimonial videos often
            get a bad wrap for just being “talking heads,” they can help
            visitors learn about who’s working behind the scenes to make things
            possible. Again, it’s all about making a human connection with your
            customer.
          </p>
        </div>
      </div>
      <div className="mx-5 md:container text-center my-16 ">
        <h1 className="font-bold text-primary text-4xl capitalize p-4">
          Our Values
        </h1>
        <img src={ourValues} alt="" />
      </div>
      <div className=" bg-blue-50 py-5">
        <div
          className="container mt-20 md:flex  
      md:space-x-14 items-center text-center
      "
        >
          <h1 className="text-2xl mb-5 xl:text-4xl text-primary flex-[4]">
            Empowering selling on daraz
          </h1>
          <p className="flex-[8] text-justify text-gray-500 leading-loose">
            A company story video (a.k.a about us video or mission video) tells
            the story of your company and values. They can be a great tool for
            connecting with customers, sharing your passion, and humanizing your
            brand. Company story videos often feature team members talking
            testimonial-style about what they do and why they do it. One of the
            most common reasons companies decide to create a company story video
            is to show off the personalities that make up their team along with
            the mission and values behind them. Though testimonial videos often
            get a bad wrap for just being “talking heads,” they can help
            visitors learn about who’s working behind the scenes to make things
            possible. Again, it’s all about making a human connection with your
            customer.
          </p>
        </div>
      </div>
    </div>
  );
};
