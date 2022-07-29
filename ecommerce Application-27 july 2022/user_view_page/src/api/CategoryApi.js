import { useEffect, useState } from "react";
import axios from "axios";
export const CategoryApi = () => {
  const [categories, setCategories] = useState([]);
  const [catReLoad, setCatReLoad] = useState(false);
  useEffect(() => {
    const getCategory = async () => {
      const data = await axios.get("/category");
      setCategories(data.data.categories);
    };
    getCategory();
  }, [catReLoad]);
  return {
    categories: [categories, setCategories],
    catReLoad: [catReLoad, setCatReLoad],
  };
};
