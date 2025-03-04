import type { BrandType } from "@helpers/types";
import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BACK_URL}/brands`;

export const BrandService = {
  getAllBrandsQueryFn: async (): Promise<BrandType[]> => {
    try {
      const { data } = await axios.get<BrandType[]>(BASE_URL);
      return data;
    } catch (error) {
      throw new Error(`Failed to fetch brands: ${error}`);
    }
  },
};
