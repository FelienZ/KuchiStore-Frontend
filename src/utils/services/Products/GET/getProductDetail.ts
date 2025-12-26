import type { ProductItemData } from "@/utils/types/Products/ProductData"
import type { Product } from "@/utils/types/Products/Products"
import { toast } from "sonner"
import { Request } from "../../interceptor"

const API_URL = import.meta.env.VITE_API_URL
export default async function getProductDetail(id:string): Promise<Product<ProductItemData>> {
    try {
      const {data: response} = await Request.get(`${API_URL}/api/products/${id}`)
      return response
    } catch (error) {
      toast('Gagal Mendapatkan Detail Produk')
      throw error
    }
  }