export enum Filters {
  closer = "CLOSER",
  cheaper = "CHEAPER",
  latest = "LATEST",
}

export interface Item {
  business: string;
  description: string;
  location: string;
  price: number;
}
// export interface Item {
//   id: number;
//   name: string;
//   market: string;
//   price: number;
//   address: [number, number];
// }

// export interface ProductResponse {
//   items: Item[];
//   search: string;
//   filterBy: Filters | string;
// }
