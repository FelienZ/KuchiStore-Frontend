import type { Response } from "../Response";

export interface Product<T> extends Response{
    payload: T,
    detail?:{
        count: number,
        start: number,
        end: number,
        currentPage: number,
        totalPage: number
    },
}