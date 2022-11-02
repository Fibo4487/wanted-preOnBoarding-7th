import React from "react";
import styled from "styled-components";

interface DescriptionHeaderProps {
  title: string;
}

const DescriptionHeader = ({ title }: DescriptionHeaderProps) => {
  return (
    <Container>
      <p className="title">{title}</p>
    </Container>
  );
};

export default DescriptionHeader;

const Container = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};

  .title {
    font-size: 17px;
    font-weight: 800;
  }
`;
