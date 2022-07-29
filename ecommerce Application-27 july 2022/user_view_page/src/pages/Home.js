import React from "react";
import { HeaderBanner } from "../Components/HeaderBanner";
import { Feature } from "../Components/Feature";
import { RecommendedProducts } from "../Components/RecommendedProducts";
import { NewProduts } from "../Components/NewProducts";
import { SecondaryBanner } from "../Components/SecondaryBanner";

export const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <Feature />
      <NewProduts />
      <SecondaryBanner />
      <RecommendedProducts />
    </div>
  );
};
