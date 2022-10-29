export const mediaQuery = (maxWidth: number) => `
  @media (max-width: ${maxWidth}px)
`;

const media = {
  desktop: mediaQuery(1024),
  mobile: mediaQuery(425)
};

export default media;
