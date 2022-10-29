import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>}>
          <Route path=":id" element={<div>discription</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
