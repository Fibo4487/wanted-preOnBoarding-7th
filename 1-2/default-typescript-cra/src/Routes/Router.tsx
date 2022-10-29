import React from "react";
import IssueDescription from "@/Pages/IssueDescription";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "@/Pages/Main";
import IssueList from "@/Pages/IssueList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<IssueList />} />
          <Route path=":issueId" element={<IssueDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
