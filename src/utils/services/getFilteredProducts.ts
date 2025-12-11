import axios from "axios";
import type { Product } from "../types/Products";
import type { ProductItemData } from "../types/ProductData";

export default async function GetFilteredProducts(query: string, filter: string): Promise<Product<ProductItemData[]>>{
    const {data: response} = await axios.get(`http://localhost:3000/api/products?${query}=${filter}`)
    return response
}