import { Request, Response } from "express";
import { ResponseType } from "../type/response";
import { register_validator } from "../validator/register";
import ClientResponse from "./clientResponse";

export class ActionApi {
    protected body: any;
    protected params: any;
    protected query: any;
    private _data: any;

    setData(body: any, params: any, query: any) {
        this.body = Object.keys(body).length === 0 ? null : body;
        this.params = Object.keys(params).length === 0 ? null : params;
        this.query = Object.keys(query).length === 0 ? null : query;

        const date: any = {
        }
        if (body) date.body = this.body;
        if (params) date.params = this.params;
        if (query) date.query = this.query;
        set: {
            this._data = date;
        }
    }
    protected async validate() {
        const validate = await register_validator.validate(this._data)
        const result = {
            error: validate.error ? true : false,
            message: validate.error ? validate.error.details[0].message : null
        }
        return result;
    }
}

// export declare abstract class Action<
//   ReqBody = any,
//   ReqParams = any,
//   ReqQuery = any,
//   ReqUser = any,
//   ResBody = any
// > {
//   protected app: ReqBody;
//   protected req: Request<ReqParams, ResBody, ReqBody, ReqQuery> & {
//     user: ReqUser;
//   };
//   protected res: Response;
//   constructor(
//     req: Request<ReqParams, ResBody, ReqBody, ReqQuery> & {
//       user: ReqUser;
//     },
//     res: Response
//   );
//   abstract handle(): ResBody;
// }
