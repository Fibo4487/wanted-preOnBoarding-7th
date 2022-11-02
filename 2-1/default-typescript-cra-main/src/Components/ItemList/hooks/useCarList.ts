import { fetchCars } from "@/lib/api/api";
import { useRecoilValue } from "recoil";
import { categoryState } from "@/lib/states/categoryState";
import CarsResponse from "@/lib/types/CarsResponse";
import { useQuery } from "@tanstack/react-query";
// import { useEffect } from "react";
import { AxiosError } from "axios";

const useCarList = () => {
  const category = useRecoilValue(categoryState);
  const { data, isLoading } = useQuery<CarsResponse, AxiosError>(
    ["cars"],
    fetchCars,
    {
      select: (data) => {
        if (category === "ALL") return data;
        const filteredData = {
          payload: data?.payload.filter(
            (car) => car.attribute.segment === category
          )
        };

        return filteredData;
      }
    }
  );

  const isEmpty = data?.payload.length === 0;

  return { carList: data?.payload, isLoading, isEmpty };
};

export default useCarList;
