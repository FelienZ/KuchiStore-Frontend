export interface Product<T>{
    type: 'success' | 'error',
    payload: T,
    detail:{
        count: number,
        start: number,
        end: number,
        currentPage: number,
        totalPage: number
    },
    message: string
}