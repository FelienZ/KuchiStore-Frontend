import { CarouselSpacing } from "@/components/Common/Carousel"
import { Spinner } from "@/components/ui/spinner"
import useFilteredProducts from "@/utils/util/filteredProducts"

export default function Pinned(){
    const popularProduct = useFilteredProducts('filter', 'popular')
    const newProduct = useFilteredProducts('filter', '_new')
    const recommendedProduct = useFilteredProducts('filter', 'recommended')
    return(
        <section className="flex flex-col gap-15 divide-y">
            <div className="flex flex-col gap-3 pb-5">
                <h3 className="font-bold text-lg">{`Popular Products`.toUpperCase()}</h3>
                {popularProduct.isLoading? (
                    <div className="flex justify-center items-center gap-3 border rounded-sm h-[50vh]">
                        <p>Loading...</p>
                        <Spinner/>
                    </div>
                ) : (
                    <CarouselSpacing payload={popularProduct.data?.payload} limit={8}/>
                )}
            </div>
            <div className="flex flex-col gap-3 pb-5">
                <h3 className="font-bold text-lg">{`New Products`.toUpperCase()}</h3>
                {newProduct.isLoading? (
                    <div className="flex justify-center items-center gap-3 border rounded-sm h-[50vh]">
                        <p>Loading...</p>
                        <Spinner/>
                    </div>
                ): (
                <CarouselSpacing payload={newProduct.data?.payload} limit={8}/>
                )
                }
            </div>
            <div className="flex flex-col gap-3 pb-5">
                <h3 className="font-bold text-lg">{`Recommended Products`.toUpperCase()}</h3>
                {recommendedProduct.isLoading? (
                    <div className="flex justify-center items-center gap-3 border rounded-sm h-[50vh]">
                        <p>Loading...</p>
                        <Spinner/>
                    </div>
                ): (
                    <CarouselSpacing payload={recommendedProduct.data?.payload} limit={8}/>  
                )} 
            </div>
        </section>
    )
}