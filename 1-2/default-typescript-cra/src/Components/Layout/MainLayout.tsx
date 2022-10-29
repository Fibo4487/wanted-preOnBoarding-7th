import React from "react";
import styled from "styled-components";

function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <Block>
      <Main>{children}</Main>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  margin-top: 3rem;
`;
const Main = styled.main`
  flex: 1;
`;

export default MainLayout;
