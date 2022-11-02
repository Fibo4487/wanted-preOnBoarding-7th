import { atom } from "recoil";
import { SEGMENT } from "../types/CarsResponse";

export const categoryState = atom<keyof typeof SEGMENT>({
  key: "categoryState",
  default: "ALL"
});
