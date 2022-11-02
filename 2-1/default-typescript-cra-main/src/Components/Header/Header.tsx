import React from "react";
import styled from "styled-components";
import { BackIcon } from "@/Static/svg";
import { useLocation } from "react-router-dom";
import useHeader from "./hooks/useHeader";

const Header = () => {
  const location = useLocation();
  const { isMain } = useHeader(location);

  return (
    <Block>
      <Inner>
        {isMain && (
          <BackButtonBlock>
            <BackIcon />
          </BackButtonBlock>
        )}
        <Title>React</Title>
      </Inner>
    </Block>
  );
};

export default Header;

const Block = styled.div`
  height: 60px;
  background-color: #000;
`;

const Inner = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
`;

const BackButtonBlock = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
