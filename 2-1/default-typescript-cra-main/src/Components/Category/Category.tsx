import React from "react";
import styled from "styled-components";
import useCategory from "./hooks/useCategory";
// import { SEGMENT } from "./../../lib/types/CarsResponse";

interface CategoryItemProps {
  category: string;
  isSelected: boolean;
  onClick: (category: string) => void;
}

const CategoryItem = ({ category, isSelected, onClick }: CategoryItemProps) => {
  return (
    <CategoryItemLi isSelected={isSelected} onClick={() => onClick(category)}>
      {category}
    </CategoryItemLi>
  );
};

const Category = () => {
  const { categoryList, selectedCategory, handleCategorySelect } =
    useCategory();
  return (
    <Block>
      {categoryList.map((category, index) => {
        const isSelected = category === selectedCategory;
        return (
          <CategoryItem
            key={index + 1}
            category={category}
            isSelected={isSelected}
            onClick={handleCategorySelect}
          />
        );
      })}
    </Block>
  );
};

export default Category;

const Block = styled.menu`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0 8px;
`;

const CategoryItemLi = styled.li<{ isSelected: boolean }>`
  width: 62px;
  height: 27px;
  margin-left: 4px;
  border-radius: 62px;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.secondary};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.black};
  font-size: 14px;
  font-weight: 800;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
`;
