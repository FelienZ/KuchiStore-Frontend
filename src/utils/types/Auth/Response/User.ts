export interface User<T>{
    username: string | null;
    id: string | null,
    email: string | null,
    detail?: T | null,
    created_at: string | null
}
// ini utk userData Response