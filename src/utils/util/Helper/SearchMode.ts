import useProducts from "../Hooks/Products/useProducts"
import useSearch from "../Hooks/Products/useSearch"

export default function SearchHelper(pages: number, name: string){
    const defaultMode = useProducts(pages.toString())
    const searchMode = useSearch(name)
    const isSearchMode = Boolean(name && name.length > 3)
    return isSearchMode ? searchMode : defaultMode
}