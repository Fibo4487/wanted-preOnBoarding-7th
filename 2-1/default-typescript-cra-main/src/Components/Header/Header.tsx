import React from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import useHeader from "./hooks/useHeader";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isMain, title } = useHeader(location);

  const handleClickBack = () => {
    navigate(-1);
  };

  return (
    <Block>
      <Inner>
        <BackButtonBlock onClick={handleClickBack}>
          {!isMain && <div>{"<="}</div>}
        </BackButtonBlock>
        <Title>{title}</Title>
        <TitleRightBlock />
      </Inner>
    </Block>
  );
};

export default Header;

const Block = styled.header`
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  padding: 0 20px;
`;

const Inner = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const TitleRightBlock = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 17px;
  font-weight: 800;
  margin: 0 auto;
  text-align: center;
  width: 100%;
`;

const BackButtonBlock = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`;
