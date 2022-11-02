import MainLayout from "@/Components/Layout/MainLayout";
import Main from "@/Pages/Main";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="/description" element={<div>about</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
