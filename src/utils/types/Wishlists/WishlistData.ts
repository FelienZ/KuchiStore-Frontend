export interface WishlistData{
    id: string,
    product_id: string,
    product: {
        id: string,
        name: string,
        shortname: string,
        price: number,
        url: string,
        type: string
    },
    user_id: string,
    created_at: Date
}