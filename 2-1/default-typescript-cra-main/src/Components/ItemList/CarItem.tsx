import { FUELTYPE, ICar, SEGMENT } from "@/lib/types/CarsResponse";
import React from "react";
import styled from "styled-components";

interface CarItemProps {
  Car: ICar;
  handleClickItem: (id: number) => void;
}

const CarItem = ({ Car, handleClickItem }: CarItemProps) => {
  const { attribute, amount, id } = Car;
  const { brand, name, segment, fuelType, imageUrl } = attribute;
  return (
    <CarItemContainer onClick={() => handleClickItem(id)}>
      <CarItemInfo>
        <div className="car-item-title">
          <h3>{brand}</h3>
          <h3>{name}</h3>
        </div>
        <div className="car-item-description">
          <p>{`${SEGMENT[segment]} / ${FUELTYPE[fuelType]}`}</p>
          <p>{`월 ${amount.toLocaleString("en-US")} 원 부터`}</p>
        </div>
      </CarItemInfo>
      <CarItemImageContainer>
        <CarItemImage src={imageUrl} alt="car" />
        <CarItemTag>신규</CarItemTag>
      </CarItemImageContainer>
    </CarItemContainer>
  );
};

export default React.memo(CarItem);

const CarItemContainer = styled.div`
  width: 100%;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CarItemImageContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const CarItemImage = styled.img`
  width: 152px;
  height: 80px;
  position: absolute;
  right: 20px;
`;

const CarItemTag = styled.div`
  width: 52px;
  height: 22px;
  border-radius: 42px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 800;
  align-self: flex-start;
  position: relative;
  right: 8px;
  top: 8px;
  text-align: center;
  line-height: 22px;
`;

const CarItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 24px 20px;

  .car-item-title {
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 8px;
  }

  .car-item-description {
    font-size: 12px;
    font-weight: 400;
  }
`;
