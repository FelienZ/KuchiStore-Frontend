import type { ProductItemData } from "@/utils/types/Products/ProductData"
import type { Product } from "@/utils/types/Products/Products"
import { Request } from "../../interceptor"

const API_URL = import.meta.env.VITE_API_URL
export default async function GetProductsByName(name: string): Promise<Product<ProductItemData[]>> {
    try {
        if(name.length > 3){
            const {data: response} = await Request.get(`${API_URL}/api/products/search?name=${name}`)
            return response
        }
        return {
            type: 'success',
            payload: [],
            message: 'Masukkan Minimal 3 Keyword'
        }
    } catch (error) {
        return {
           type: 'fail',
           payload: [],
           message: typeof error === 'object' ? ('message' in error! ?  String(error.message) : '') : '' 
        }
    }
}