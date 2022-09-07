export interface Ilogin {
  email: string;
  password: string;
}

export interface Iregister extends Ilogin {
  name: string;
  cart: IproductCard[];
}

export interface ReturnedData {
  accessToken: string;
  user: UsersData;
}

export interface UsersData extends Iregister {
  id: number;
}

export interface Icart {
  id: number;
  name: string;
  price: number;
  imgs: string[];
  alt: string;
  path: string;
  quantity: number;
}

export interface IproductCard extends Icart {
  smallDesc: string;
  description: DescData[];
  oldPrice?: number;
  offer?: number;
  brand: string;
}

export type DescData = {
  key: string;
  value: string;
};
