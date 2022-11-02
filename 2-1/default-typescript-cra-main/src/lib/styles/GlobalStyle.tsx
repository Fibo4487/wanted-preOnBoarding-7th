import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
    html,body{
        font-size:17px;
        font-family: -apple-system, 'Noto Sans KR', sans-serif;
        -ms-overflow-style: none;
    }
    a{
        text-decoration: none;
        color:#1d1d1d;
    }
    ::-webkit-scrollbar {
        display: none;
    }
`;

export default GlobalStyle;
