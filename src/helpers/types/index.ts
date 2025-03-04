type RegularPriceType = {
  currency: string;
  value: number;
};

export type ProductType = {
  id: number;
  title: string;
  regular_price: RegularPriceType;
  image: string;
  brand: number;
};

export type BrandType = {
  id: number;
  title: string;
  sort: string;
  code: string;
};
