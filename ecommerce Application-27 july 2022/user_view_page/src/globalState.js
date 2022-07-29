import { createContext } from "react";
import { CategoryApi } from "./api/CategoryApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const state = { categories: CategoryApi() };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
