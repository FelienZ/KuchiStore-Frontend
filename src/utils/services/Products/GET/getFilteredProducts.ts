import type { Product } from "../../../types/Products/Products";
import type { ProductItemData } from "../../../types/Products/ProductData";
import { toast } from "sonner";
import { Request } from "../../interceptor";

const API_URL = import.meta.env.VITE_API_URL
//get product by label
export default async function GetFilteredProducts(query: string, label: string): Promise<Product<ProductItemData[]>>{
    // misal ..products/filter?label=popular
    try {
        const {data: response} = await Request.get(`${API_URL}/api/products/filter?${query}=${label}`)
        return response
    } catch (error) {
        toast('Gagal Mendapatkan Data')
        return {
           type: 'fail',
           payload: [],
           message: typeof error === 'object' ? ('message' in error! ?  String(error.message) : '') : '' 
        }
    }
}