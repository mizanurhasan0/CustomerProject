import { createContext, useState } from "react";
import { CategoryApi } from "./api/CategoryApi";

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [reload, setReload] = useState(false);
  const state = { categories: CategoryApi(), reload: [reload, setReload] };
  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};
