import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { ProductItemData } from "@/utils/types/ProductData"
import type { Product } from "@/utils/types/Products"
import { useNavigate } from "react-router";

export default function Products({payload}: Pick<Product<ProductItemData[] | undefined>, 'payload'>){
    const navigate = useNavigate();
    async function handleNavigate(id:string){
        navigate(id)
    }
    return(
    <section>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {payload!.map(i => (
            <Card key={i.id} className="rounded-sm">
                <CardContent className="flex flex-col aspect-square justify-evenly items-center gap-4 md:px-4">
                    <img src={i.url} alt="" className="xl:w-[70%] h-[30vh] p-2" />
                    <h3 className="font-bold">{i.shortname}</h3>
                    <p>{i.price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'}).split(',00')}</p>
                    <Button variant={'default'} className="w-full" onClick={()=> handleNavigate(i.id)}>Check</Button>
                </CardContent>
            </Card>
            ))}
        </div>
    </section>
    )
}
