import type { ProductItemData } from "@/utils/types/Products/ProductData"
import type { Product } from "@/utils/types/Products/Products"
import axios from "axios"

export default async function GetProductsByName(name: string): Promise<Product<ProductItemData[]>> {
    try {
        if(name.length > 3){
            const {data: response} = await axios.get(`http://localhost:3000/api/products/search?name=${name}`)
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