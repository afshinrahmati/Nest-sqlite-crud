export interface ResponseType {
    status: number,
    message: string,
    data: [string | object] | string
}