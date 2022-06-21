import { ResponseType } from "../type/response";


export default class ClientResponse {

    status = 200;
    message: string | undefined;
    data: Object | undefined = undefined;

    constructor(val: ResponseType) {
        this.status = val.status;
        this.data = val.data;
        this.message = val.message;
    }
}