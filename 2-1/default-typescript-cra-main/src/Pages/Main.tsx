import Category from "@/Components/Category/Category";
import CarList from "@/Components/ItemList/CarList";
import Spinner from "@/Components/Spinner/Spinner";
import React, { Suspense } from "react";

const Main = () => {
  return (
    <>
      <Category />
      <Suspense fallback={<Spinner />}>
        <CarList />
      </Suspense>
    </>
  );
};

export default Main;
