import type { ProductItemData } from "../ProductData"

export interface ProductActions{
    product: ProductItemData,
    mapSpecification: {
        key: string,
        detail: string
    }[],
    order: number,
    handleReduceOrder: ()=> void,
    handleAddOrder: ()=> void,
    handlePostOrder: ()=> void,
    isPending: boolean
    isWishlist: boolean
    makeWishlist: ()=> void
    isPendingMake: boolean,
    isPendingDelete: boolean
}