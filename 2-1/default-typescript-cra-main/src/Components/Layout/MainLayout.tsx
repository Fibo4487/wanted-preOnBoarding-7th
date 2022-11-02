import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <MainLayoutBlock>
      <Header />
      <main>
        <Outlet />
      </main>
    </MainLayoutBlock>
  );
};

export default MainLayout;

const MainLayoutBlock = styled.div`
  margin: 0 auto;

  main {
    min-height: calc(100vh - 60px - 2rem);
  }
`;
