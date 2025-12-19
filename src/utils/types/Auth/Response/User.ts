export interface User<T>{
    username: string | null;
    id: string | null,
    email: string | null,
    detail?: T | null
}
// ini utk userData Response