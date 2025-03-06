type RegularPriceType = {
  currency: string;
  value: number;
};

export type ProductType = {
  id: string;
  title: string;
  regular_price: RegularPriceType;
  image: string;
  brand: number;
};

export type BrandType = {
  id: string;
  title: string;
  sort: string;
  code: string;
};

export type BasketItemType = {
  id: string;
  product: string;
  count: number;
  total_value: number;
};
