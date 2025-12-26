export interface OrderData<T>{
    id: string,
    product_id: string,
    user_id: string,
    product: T,
    qty: number,
    status: 'pending' | 'canceled' | 'done',
    total_price: number,
    created_at: string
}