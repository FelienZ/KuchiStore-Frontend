import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { ProductItemData } from "@/utils/types/Products/ProductData";
import { MinusSquare, PlusSquare } from "lucide-react";

type detail = {
    product: ProductItemData,
    mapSpecification: {
        key: string,
        detail: string
    }[],
    order: number,
    handleReduceOrder: ()=> void,
    handleAddOrder: ()=> void
}

export default function Detail({product, mapSpecification, order, handleReduceOrder, handleAddOrder}: detail){
    return(
       <section className="grid xl:grid-cols-2 py-3 w-[80vw] min-h-screen place-self-center gap-10">
        <div className="flex xl:hidden flex-col gap-3">
          <img src={product?.url} alt="" className="w-[75%] h-[90%] self-center p-5 border"/>
        </div>
            <div className="flex max-xl:order-2 flex-col py-4 gap-3 h-full">
              <img src={product?.url} alt="" className="w-[75%] max-xl:hidden self-center p-5 h-[60%] my-8 border"/>
              <div className="content flex flex-col w-[80%] self-center gap-5">
                <h3 className="font-bold text-xl">{`Specifications`.toUpperCase()}</h3>
                <div className="flex flex-col gap-3">
                  {mapSpecification.map((i,idx) => (
                    <div key={idx} className="grid max-sm:text-xs gap-3 p-3 grid-cols-[0.4fr_1fr]">
                      <p className="font-medium">{i.key.toUpperCase()}</p>
                      <p className="text-justify overflow-auto">{i.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex max-xl:order-1 w-full flex-col gap-5 divide-y p-8">
                <div className="flex flex-col gap-3 pb-5">
                  <p className="font-bold text-xl">{product?.name.toUpperCase()}</p>
                  <p className="font-bold text-lg">{product?.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}).toUpperCase().split(',00')}</p>
                </div>
                <div className="flex flex-col gap-3 pb-5">
                  <div className="grid grid-cols-[0.4fr_1fr] gap-3">
                    <p className="font-medium">Category</p>
                    <p>{product?.type}</p>
                  </div>
                  <div className="grid grid-cols-[0.4fr_1fr] gap-3">
                    <p className="font-medium">Brand</p>
                    <p>{product?.specifications.brand}</p>
                  </div>
                  <div className="grid grid-cols-[0.4fr_1fr] gap-3">
                    <p className="font-medium">Stock</p>
                    <p>{product?.stock > 0 ? product?.stock : '-'}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 pb-5">
                  <p className="font-medium">Order Now!</p>
                  <div className="flex items-center gap-3">
                    <Button variant={'secondary'} className="size-8" onClick={()=>(order > 0 ? handleReduceOrder() : '')}><MinusSquare className="size-4"/></Button>
                    <Badge variant={'outline'} className="size-8 rounded-sm">{order}</Badge>
                    <Button variant={'secondary'} className="size-8" onClick={()=>(order < product!.stock  ? handleAddOrder() : '')}><PlusSquare className="size-4"/></Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant={'outline'}>Add to Cart</Button>
                  <Button variant={'default'}>Order Now</Button>
                </div>
            </div>
          </section> 
    )
}