import axios from 'axios'
import type { Product } from '../../types/Products/Products'
import type { ProductItemData } from '../../types/Products/ProductData'
import { toast } from 'sonner'
export default async function GetProducts(pages:string): Promise<Product<ProductItemData[]>>{
    try {
        const {data: response} = await axios.get(`http://localhost:3000/api/products?page=${pages}`)
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