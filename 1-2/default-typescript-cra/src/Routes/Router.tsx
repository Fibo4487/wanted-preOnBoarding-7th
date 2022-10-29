import React from "react";
import IssueList from "@/Pages/IssueList";
import IssueDescription from "@/Pages/IssueDescription";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IssueList />} />
        <Route path=":id" element={<IssueDescription />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
