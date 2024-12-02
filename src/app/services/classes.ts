export type ProductsDataType = {
  quantity: number;
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
};

export type CategoryDataType = {
  id: string;
  name: string;
  description: string | null;
  products: number;
};
