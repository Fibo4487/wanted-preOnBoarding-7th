import React from "react";
import styled from "styled-components";

const FeedAd = ({ children }: React.PropsWithChildren) => {
  const imgSrc =
    "https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100";

  return (
    <>
      {children}
      <Img src={imgSrc} />
    </>
  );
};

export default FeedAd;

const Img = styled.img`
  display: block;
  height: auto;
  width: 30%;
  margin: 0 auto;
`;
