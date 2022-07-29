import React from "react";
import { Route, Routes } from "react-router-dom";
import { Shops } from "./Components/Shops";
import { CreateCategory } from "./pages/CreateCategory";
import { Createproduct } from "./pages/Createproduct";
import { Home } from "./pages/Home";

export const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<CreateCategory />} />
      <Route path="/crt_product" element={<Createproduct />} />
      <Route path="/shop" element={<Shops />} />
    </Routes>
  );
};
