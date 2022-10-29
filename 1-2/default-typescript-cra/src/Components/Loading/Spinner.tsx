import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const Spinner = styled.div`
  height: 10rem;
  width: 10rem;
  border: 3px solid #b3b3b3;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: auto;
  animation: ${rotation} 1s linear infinite;
`;

export { Spinner };
