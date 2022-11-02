import { useState } from "react";

const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const isSelected = (categoryName: string) => {
    return selectedCategory === categoryName;
  };

  return { selectedCategory, isSelected, handleCategorySelect };
};

export default useCategory;
