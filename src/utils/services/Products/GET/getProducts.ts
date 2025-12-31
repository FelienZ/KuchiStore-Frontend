import type { Product } from '../../../types/Products/Products'
import type { ProductItemData } from '../../../types/Products/ProductData'
import { toast } from 'sonner'
import { Request } from '../../interceptor'

const API_URL = import.meta.env.VITE_API_URL;
export default async function GetProducts(pages:string): Promise<Product<ProductItemData[]>>{
    try {
        const {data: response} = await Request.get(`${API_URL}/api/products?page=${pages}`)
        return response
    } catch (error) {
        toast('Gagal Memuat Seluruh Produk')
        return {
           type: 'fail',
           payload: [],
           message: typeof error === 'object' ? ('message' in error! ?  String(error.message) : '') : '' 
        }
    }
}