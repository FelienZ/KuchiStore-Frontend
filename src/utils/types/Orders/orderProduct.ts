export interface OrderProduct{
    name: string,
    price: number,
    stock: number,
    type: 'computer' | 'smartphone' | 'accessories',
    url: string
}