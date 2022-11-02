// import { carDescriptionSelector as selector } from "@/lib/states/carListState";

import { fetchCars } from "@/lib/api/api";
import CarsResponse, { ICar } from "@/lib/types/CarsResponse";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const useDescription = (id: number) => {
  const { data } = useQuery<CarsResponse, AxiosError>(["cars"], fetchCars, {
    select: (data) => {
      const newData = {
        payload: data?.payload.filter((car) => car.id === id)
      };
      if (newData.payload.length === 0) throw new Error("No data");
      return newData;
    }
  });

  return { data: data?.payload[0] as ICar };
};

export default useDescription;
