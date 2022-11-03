import DescriptionHeader from "../Components/ItemDescription/DescriptionHeader";
import DescriptionImage from "../Components/ItemDescription/DescriptionImage";
import DescriptionItem from "../Components/ItemDescription/DescriptionItem";
import DescriptionName from "../Components/ItemDescription/DescriptionName";
// import useDate from "@/lib/hooks/useDate";
import QueryString from "qs";
import { FUELTYPE, SEGMENT } from "../lib/types/CarsResponse";
import React from "react";
import { useLocation } from "react-router-dom";
import useDescription from "./hooks/useDescription";
import useDate from "../lib/hooks/useDate";

const Description = () => {
  const { search } = useLocation();
  const { id } = QueryString.parse(search, { ignoreQueryPrefix: true });
  const { data } = useDescription(Number(id));
  const { attribute, amount, createdAt, insurance, additionalProducts } = data;
  const dateString = useDate(createdAt);
  return (
    <>
      <DescriptionImage imgUrl={attribute?.imageUrl} />
      <DescriptionName name={attribute?.name} brand={attribute?.brand} />
      <DescriptionItem
        description={`월 ${amount?.toLocaleString("en-US")} 원`}
      />
      <DescriptionHeader title="차량 정보" />
      <DescriptionItem name="차종" description={SEGMENT[attribute.segment]} />
      <DescriptionItem name="연료" description={FUELTYPE[attribute.fuelType]} />
      <DescriptionItem name="이용 가능일" description={dateString} />
      <DescriptionHeader title="보험" />
      {insurance?.map((item) => (
        <DescriptionItem
          key={Math.floor(Math.random() * 10000)}
          name={item.name}
          description={item.description}
        />
      ))}
      <DescriptionHeader title="추가상품" />
      {additionalProducts?.map((item) => (
        <DescriptionItem
          key={Math.floor(Math.random() * 10000)}
          name={item.name}
          description={`월 ${item.amount?.toLocaleString("en-US")} 원`}
        />
      ))}
    </>
  );
};

export default Description;
