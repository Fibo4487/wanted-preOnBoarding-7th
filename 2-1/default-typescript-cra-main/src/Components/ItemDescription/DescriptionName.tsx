import React from "react";
import styled from "styled-components";

interface DescriptionNameProps {
  brand: string;
  name: string;
}

const DescriptionName = ({ brand, name }: DescriptionNameProps) => {
  return (
    <Container>
      <Col>
        <p className="brand">{brand}</p>
        <p className="name">{name}</p>
      </Col>
    </Container>
  );
};

export default DescriptionName;

const Container = styled.div`
  height: 92px;
  display: flex;
  align-items: center;
  padding: 0 20px;

  .brand {
    font-size: 20px;
    font-weight: 800;
  }

  .name {
    font-size: 24px;
    font-weight: 800;
  }
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
