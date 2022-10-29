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
          <Route index path="" element={<IssueList />} />
          <Route path=":issueId" element={<IssueDescription />} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
