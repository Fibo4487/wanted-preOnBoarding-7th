import { fetchCars } from "../../../lib/api/api";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState } from "../../../lib/states/categoryState";
import CarsResponse from "../../../lib/types/CarsResponse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { carListState } from "../../../lib/states/carListState";

const useCarList = () => {
  const category = useRecoilValue(categoryState);
  const setCarListState = useSetRecoilState(carListState);
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
      },
      onSuccess: (data) => {
        setCarListState(data?.payload);
      }
    }
  );

  const isEmpty = data?.payload.length === 0;

  return { carList: data?.payload, isLoading, isEmpty };
};

export default useCarList;
