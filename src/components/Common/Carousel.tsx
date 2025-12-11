import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { ProductItemData } from "@/utils/types/ProductData"
import { Button } from "../ui/button"
import { useNavigate } from "react-router"
import getProductDetail from "@/utils/services/getProductDetail"

type carouselData ={
  payload: ProductItemData[]| undefined,
  limit: number
}
export function CarouselSpacing({payload, limit}: carouselData) {
  const navigate = useNavigate();
  async function handleNavigate(id:string){
    const data = await getProductDetail(id)
    navigate(`/products/${data.payload.id}`)
  }
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-1">
        {payload?.map((i, idx) => (
          idx < limit ? (
            <CarouselItem key={i.id} className="pl-1 basis-1/2 lg:basis-1/3 2xl:basis-1/5">
            <div className="p-1">
              <Card className="rounded-sm py-2">
                <CardContent className="flex flex-col aspect-square items-center gap-4 md:p-6">
                  <img src={i.url} alt={i.name} className="w-[90%] md:w-full h-[15vh] sm:h-[20vh] lg:h-[30vh]"/>
                  <div className="flex flex-col items-center gap-3">
                    <h4 className="font-medium max-sm:text-xs place-content-center text-center h-10">{i.shortname}</h4>
                    <p className="max-sm:text-xs">{i.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</p>
                  </div>
                  <Button variant={'default'} onClick={()=>handleNavigate(i.id)} className="w-full">Check</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          ): ''
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
