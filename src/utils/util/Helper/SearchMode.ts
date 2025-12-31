import useCategory from "../Hooks/Products/useCategory"
import useProducts from "../Hooks/Products/useProducts"
import useSearch from "../Hooks/Products/useSearch"

export default function SearchHelper(pages: number, name: string, category?: string) {
    const defaultMode = useProducts(pages.toString())
    const searchMode = useSearch(name)
    const categoryMode = useCategory(category!)

    const isSearchMode = Boolean(name && name.length > 3)
    const isCategoryMode = Boolean(category && category.length > 0)

    if(isSearchMode) return searchMode
    if(isCategoryMode) return categoryMode

    return defaultMode
}