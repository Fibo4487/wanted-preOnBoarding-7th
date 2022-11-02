export interface ICar {
  id: number;
  amount: number;
  attribute: Attribute;
  startDate: string;
  createdAt: string;
  insurance?: Insurance[];
  additionalProducts?: AdditionalProducts[];
}

export interface Attribute {
  brand: string;
  name: string;
  segment: keyof typeof SEGMENT;
  fuelType: keyof typeof FUELTYPE;
  imageUrl: string;
}

export const SEGMENT = {
  ALL: "전체",
  E: "대형",
  D: "중형",
  C: "소형",
  SUV: "SUV"
} as const;

export type SEGMENT = typeof SEGMENT[keyof typeof SEGMENT];

export const FUELTYPE = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드"
} as const;

export type FUELTYPE = typeof FUELTYPE[keyof typeof FUELTYPE];

export interface Insurance {
  name: string;
  description: string;
}

export interface AdditionalProducts {
  name: string;
  amount: number;
}

export default interface CarsResponse {
  payload: ICar[];
}
