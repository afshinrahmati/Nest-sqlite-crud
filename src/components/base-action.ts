import { Request, Response } from "express";
import { ResponseType } from "../type/response";
import ClientResponse from "./clientResponse";

export class ActionApi {
   
    protected makeCreateObject(body: any) {

        const createObj: ResponseType = {
            status: 200,
            message: "successful",
            data: [body]
        };
        return new ClientResponse(createObj)

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
