/* eslint-disable react-hooks/set-state-in-effect */
import { Spinner } from "@/components/ui/spinner"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Detail from "./Detail"
import useProductDetail from "@/utils/util/Hooks/Products/useProductDetail"

export default function ProductDetail(){
    const params = useParams()
    const {data, isLoading} = useProductDetail(params.id!)
    const [product, setProduct] = useState(data?.payload)
    const [order, setOrder] = useState(0)
    useEffect(()=>{
      setProduct(data?.payload)
    },[data])
    const mapSpecification = []
    for(const key in product?.specifications){
      //representasi -> spec: key, prod.spec[spec]: val
      mapSpecification.push({key, detail: (product.specifications[key])})
    }
    function handleReduceOrder():void{
      setOrder(order-1)
    }
    function handleAddOrder():void{
      setOrder(order+1)
    }
    return(
        isLoading ? (
          <div className="grid min-h-screen w-full place-content-center">
            <Spinner className="size-8"/>
          </div>
        ): (
           <div className="flex flex-col relative gap-4 min-h-screen">
              <Detail
                product={product!}
                mapSpecification={mapSpecification}
                order={order}
                handleAddOrder={handleAddOrder}
                handleReduceOrder={handleReduceOrder}
              />
           </div>
        )
    )
}