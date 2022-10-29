import React from "react";
import styled from "styled-components";

function IssueListLayout({ children }: React.PropsWithChildren) {
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

export default IssueListLayout;
