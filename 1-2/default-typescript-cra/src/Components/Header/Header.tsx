import React from "react";
import styled from "styled-components";

const Header = () => {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  return (
    <HeaderContainer>
      <h1>
        {owner}/{repo}
      </h1>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  height: 3rem;
  background-color: #fff;
  border-bottom: 1px solid #e1e4e8;

  h1 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`;
