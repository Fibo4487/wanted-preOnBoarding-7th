import axios from "axios";

const api = axios.create({
  baseURL: "https://preonboarding.platdev.net/api"
});

export const fetchCars = async () => {
  const response = await api.get("/cars");
  return response.data;
};
