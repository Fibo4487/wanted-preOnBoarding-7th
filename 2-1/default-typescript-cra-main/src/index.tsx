import React from "react";
import { hydrate } from "react-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import theme from "./lib/styles/theme";
import GlobalStyle from "./lib/styles/GlobalStyle";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      suspense: true,
      onError: (error) => {
        console.error(error);
      },
      staleTime: 1000 * 60 * 60 * 24
    }
  }
});

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <RecoilRoot>
//       <QueryClientProvider client={queryClient}>
//         <ThemeProvider theme={theme}>
//           <ReactQueryDevtools initialIsOpen={false} />
//           <GlobalStyle />
//           <App />
//         </ThemeProvider>
//       </QueryClientProvider>
//     </RecoilRoot>
//   </React.StrictMode>
// );

hydrate(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <ReactQueryDevtools initialIsOpen={false} />
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
