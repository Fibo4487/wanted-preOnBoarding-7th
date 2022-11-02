import { categoryState } from "@/lib/states/categoryState";
import { SEGMENT } from "@/lib/types/CarsResponse";
import { useState } from "react";
import { useSetRecoilState } from "recoil";

const useCategory = () => {
  const setCategoryState = useSetRecoilState(categoryState);
  const [selectedCategoryKey, setSelectedCategoryKey] =
    useState<keyof typeof SEGMENT>("ALL");
  const selectedCategory = SEGMENT[selectedCategoryKey];
  const categoryKeyList = Object.keys(SEGMENT) as (keyof typeof SEGMENT)[];
  const categoryList = Object.values(SEGMENT);

  const handleCategorySelect = (categoryName: string) => {
    const categoryKey = categoryKeyList.find(
      (key) => SEGMENT[key] === categoryName
    );
    setSelectedCategoryKey(categoryKey as keyof typeof SEGMENT);
    setCategoryState(categoryKey as keyof typeof SEGMENT);
  };

  return { categoryList, selectedCategory, handleCategorySelect };
};

export default useCategory;
