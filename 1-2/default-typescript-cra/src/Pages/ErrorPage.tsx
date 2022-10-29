import React from "react";
import Header from "@/Components/Header/Header";

import styled from "styled-components";
import ErrorSrc from "@/Assets/error.svg";
import { Link } from "react-router-dom";
import media from "@/Lib/styles/media";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Block>
        <Main>
          <ErrorContainer>
            <ErrorImg src={ErrorSrc} />
            <HomeLink to="/">메인으로 돌아가기</HomeLink>
          </ErrorContainer>
        </Main>
      </Block>
    </>
  );
};

export default ErrorPage;

const Block = styled.div`
  display: flex;
  margin-top: 3rem;
`;

const Main = styled.main`
  flex: 1;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const ErrorImg = styled.img`
  height: 80%;
  ${media.mobile} {
    height: 50%;
    width: 50%;
  }
`;

const HomeLink = styled(Link)`
  font-size: 1.5rem;
  @{media.mobile} {
    font-size: 1rem;
  }
  margin-top: 2rem;
  color: #0366d6;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }

  &:active {
    color: #005cc5;
  }
`;
