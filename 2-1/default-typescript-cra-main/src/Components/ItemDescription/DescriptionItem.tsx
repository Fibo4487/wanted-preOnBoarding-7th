import React from "react";
import styled from "styled-components";

interface DescriptionItemProps {
  name?: string;
  description: string;
}

const DescriptionItem = ({ name, description }: DescriptionItemProps) => {
  return (
    <Container>
      <p>{name}</p>
      <p className="sub">{description}</p>
    </Container>
  );
};

export default DescriptionItem;

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;

  p {
    font-size: 17px;
    font-weight: 800;
  }

  .sub {
    font-weight: 400;
  }
`;
