import React from "react";
import styled from "styled-components";

interface DescriptionImageProps {
  imgUrl: string;
}

const DescriptionImage = ({ imgUrl }: DescriptionImageProps) => {
  return <Image src={imgUrl} alt="car" />;
};

export default DescriptionImage;

const Image = styled.img`
  height: 205px;
  width: 100%;
  object-fit: cover;
`;
