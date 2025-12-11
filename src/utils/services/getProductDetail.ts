import axios from "axios"

export default async function getProductDetail(id:string) {
    const {data: response} = await axios.get(`http://localhost:3000/api/products/${id}`)
    return response
  }