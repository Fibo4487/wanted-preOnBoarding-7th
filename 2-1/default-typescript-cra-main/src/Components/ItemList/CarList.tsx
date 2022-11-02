import React from "react";
import styled from "styled-components";
import CarItem from "./CarItem";
import useCarList from "./hooks/useCarList";

const CarList = () => {
  const { carList, isEmpty } = useCarList();
  return (
    <CarListBlock>
      {isEmpty ? (
        <CarListEmpty>차량이 없습니다.</CarListEmpty>
      ) : (
        carList?.map((car, index) => {
          return <CarItem key={index + 1} Car={car} />;
        })
      )}
    </CarListBlock>
  );
};

export default CarList;

const CarListBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const CarListEmpty = styled.div`
  width: 100%;
  height: calc(100vh - 60px - 5rem);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  font-weight: 800;
`;
