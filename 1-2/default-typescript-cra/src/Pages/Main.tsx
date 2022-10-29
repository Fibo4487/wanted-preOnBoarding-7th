import React from "react";
import MainLayout from "@/Components/Layout/MainLayout";
import Header from "@/Components/Header/Header";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
};

export default Main;
