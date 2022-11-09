import React from "react";
import styled from "styled-components";
import SearchSelect from "./Components/Search/SearchSelect";

function App() {
  return (
    <Container>
      <Title>국내 모든 임상시험 검색하고 온라인으로 참여하기</Title>
      <SearchContainer>
        <SearchSelect select={(item) => console.info(item)} />
      </SearchContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  font-size: calc(10px + 2vmin);
  text-align: center;
  padding: 80px 0 160px 0;
`;

const Title = styled.h2`
  font-size: 2.125rem;
  font-weight: 700;
  letter-spacing: -0.018em;
  line-height: 1.6;
`;

const SearchContainer = styled.div`
  display: flex;
  margin: 0 auto;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
