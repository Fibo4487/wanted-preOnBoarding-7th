import React from "react";
import styled from "styled-components";
import firstIndexUpperCase from "@/Lib/utils/firstIndexUpperCase";

const getOwnerAndRepo = () => {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;
  if (!owner || !repo) {
    throw new Error("owner or repo 가 env 에 설정되지 않았습니다.");
  }
  return `${firstIndexUpperCase(owner)} / ${firstIndexUpperCase(repo)}`;
};

const Header = () => {
  return (
    <HeaderContainer>
      <h1>{getOwnerAndRepo()}</h1>
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
    font-size: 1.2rem;
    font-weight: 600;
  }
`;
