import type { Response } from "../Response";

export interface Order <T> extends Response{
    payload: T[]
}