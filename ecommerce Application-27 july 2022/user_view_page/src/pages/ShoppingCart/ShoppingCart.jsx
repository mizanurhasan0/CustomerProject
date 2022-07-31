import React from "react";
import { bag1 } from "../../helper/Images";

export const ShoppingCart = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <h1 className="p-10 text-primary text-2xl text-center">
        My Shopping Cart
      </h1>
      <div className="bg-white mx-5 md:container p-5 mb-10">
        <table class="table-auto   w-full">
          <thead className="">
            <tr className="h-10 border-b-2 ">
              <th>Description</th>
              <th>Size</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>
                <div className="flex items-center">
                  <img
                    src={bag1}
                    alt=""
                    className="w-32 h-32 flex items-center justify-center"
                  />
                  <div>
                    <h1>Womens Bag</h1>
                    <p>Product code: MLSB</p>
                  </div>
                </div>
              </td>
              <td>S</td>
              <td>
                <input type="number" defaultValue={1} />
              </td>
              <td>1000TK</td>
              <td>X</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
