import axios from 'axios'
import type { Product } from '../types/Products'
import type { ProductItemData } from '../types/ProductData'
export default async function GetProducts(): Promise<Product<ProductItemData[]>>{
    const {data: response} = await axios.get(`http://localhost:3000/api/products`)
    return response
}