import React from "react";
import IssueDescription from "@/Pages/IssueDescription";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/Pages/Main";
import IssueList from "@/Pages/IssueList";
import ErrorPage from "@/Pages/ErrorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index path="" element={<IssueList />} />
          <Route path=":issueNumber" element={<IssueDescription />} />
        </Route>
        <Route path="/Error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
