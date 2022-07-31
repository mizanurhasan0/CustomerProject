import React from "react";
import { Route, Routes } from "react-router-dom";
import { Shops } from "./pages/Shops";
import { CreateCategory } from "./pages/category/CreateCategory";
import { Createproduct } from "./pages/Createproduct";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ProductDetails } from "./pages/ProductDetails";
import { Login } from "./pages/Auth/Login";
import { Register } from "./pages/Auth/Register";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

export const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category" element={<CreateCategory />} />
      <Route path="/crt_product" element={<Createproduct />} />
      <Route path="/shop" element={<Shops />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/details/:id" element={<ProductDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reg" element={<Register />} />
      <Route path="/cart" element={<ShoppingCart />} />
    </Routes>
  );
};
