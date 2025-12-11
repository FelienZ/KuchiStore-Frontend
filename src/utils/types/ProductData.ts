import type { ProductSpecifications } from "./Specifications";

export interface ProductItemData {
  id: string;
  name: string;
  url: string;
  price: number;
  type: string;
  popular: boolean;
  _new: boolean;
  recommended: boolean;
  stock: number;
  specifications: ProductSpecifications;
  shortname: string;
}