import React from "react";
import styled from "styled-components";

const CarItem = () => {
  return <div>Item</div>;
};

const CarList = () => {
  return (
    <CarListBlock>
      <CarItem />
      <CarItem />
      <CarItem />
    </CarListBlock>
  );
};

export default CarList;

const CarListBlock = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

const CarItemContainer = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const CarItemImage = styled.img`
  width: 152px;
  height: 80px;
`;

const CarItemTag = styled.div`
  width: 52px;
  height: 22px;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarItemInfo = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
