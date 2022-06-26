import { ResponseType } from "../type/response";


export default class ClientResponse {

    status = 200;
    message: string | undefined;
    data: Object | undefined = undefined;

    constructor(
        status: number,
        data?: any,
        message?: any) {
        this.status = status;
        this.data = data;
        this.message = message;
    }
}