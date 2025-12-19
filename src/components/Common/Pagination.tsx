import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import type { ProductItemData } from "@/utils/types/Products/ProductData"
import type { Product } from "@/utils/types/Products/Products"

type PaginationAction = {
  detail : Pick<Product<ProductItemData>, 'detail'>,
  page: number,
  setPages: (page: number) => void
}

export function PaginationDemo({detail, setPages}: PaginationAction){
  const {currentPage, totalPage} = detail.detail!
  const pageNumbers = Array.from({length: totalPage}, (_,idx) => idx + 1)
  function handleNextpage(page: number) {
    if(currentPage < totalPage){
      setPages(page + 1)
    }
  }
  function handlePrevpage(page: number) {
    if(currentPage > 1){
      setPages(page - 1)
    }
  }
  function handleSetPages(page: number){
    setPages(page)
  }
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={()=>handlePrevpage(detail.detail!.currentPage)} />
        </PaginationItem>
        {pageNumbers.map((i, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink onClick={()=>handleSetPages(i)} isActive={detail.detail!.currentPage === i}>{i}</PaginationLink>
            </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={()=>handleNextpage(detail.detail!.currentPage)}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
