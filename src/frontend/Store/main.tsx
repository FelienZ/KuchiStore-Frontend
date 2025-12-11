import { PaginationDemo } from "@/components/Common/Pagination"
import Products from "./Products"
import { Spinner } from "@/components/ui/spinner"
import useFilteredProducts from "@/utils/util/filteredProducts"
import { useState } from "react"

export default function Dashboard(){
    const [pages, setPages] = useState(1)
    const products = useFilteredProducts('page', `${pages.toString()}`)
    return(
        <article className="flex flex-col gap-5 w-full">
            <section className="w-[90vw] min-h-screen justify-between flex flex-col gap-5 self-center">
                {products.isLoading ? (
                    <div className="flex justify-center items-center gap-3 h-screen">
                        <p>Loading...</p>
                        <Spinner/>
                    </div>
                ): (<Products payload={products.data?.payload}/>)
                }
                {products.data?.detail ? (
                    <PaginationDemo detail={products.data} setPages={setPages} page={pages}/>
                ): ''}
            </section>
        </article>
    )
}