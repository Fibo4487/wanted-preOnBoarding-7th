import { atom, selectorFamily } from "recoil";
import { v1 } from "uuid";
import { ICar } from "../types/CarsResponse";

export const carListState = atom<ICar[]>({
  key: `carListState/${v1()}`,
  default: []
});

export const carDescriptionSelector = selectorFamily<ICar | undefined, number>({
  key: "carDescriptionState",
  get:
    (id: number) =>
    ({ get }) => {
      const carList = get(carListState);

      return carList.find((car) => car.id === id);
    }
});
