import React from "react";
import styled from "styled-components";
import useCategory from "./hooks/useCategory";

const categoryList = ["전체", "대형", "중형", "소형"];

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

CategoryItem.displayName = "CategoryItem";

const Category = () => {
  const { isSelected, handleCategorySelect } = useCategory();
  return (
    <Block>
      {categoryList.map((category, index) => {
        const isCategorySelected = isSelected(category);
        return (
          <CategoryItem
            key={index + 1}
            category={category}
            isSelected={isCategorySelected}
            onClick={handleCategorySelect}
          />
        );
      })}
    </Block>
  );
};

export default Category;

const Block = styled.menu`
  width: 100%;
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
