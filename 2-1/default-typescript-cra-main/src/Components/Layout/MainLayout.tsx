import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../Header/Header";

const MainLayout = () => {
  return (
    <MainLayoutBlock>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
    </MainLayoutBlock>
  );
};

export default MainLayout;

const MainLayoutBlock = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  header {
    padding: 2rem 0;
  }

  main {
    min-height: calc(100vh - 60px - 2rem);
  }
`;
