import React, { Suspense } from "react";
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
        console.log(error);
      }
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyle />
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>
);
