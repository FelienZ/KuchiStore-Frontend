import type { Response } from "../Response";

export interface Wishlist <T> extends Response{
    payload: T
}