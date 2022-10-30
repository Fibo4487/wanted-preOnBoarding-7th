import React from "react";
import styled from "styled-components";
import media from "@/Lib/styles/media";

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
  padding: 0 30rem;
  ${media.mobile} {
    padding: 0;
  }
`;
const Main = styled.main`
  flex: 1;
  hide-scrollbar;
`;

export default MainLayout;
