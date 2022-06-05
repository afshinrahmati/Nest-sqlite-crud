import { Request, Response } from "express";

export class ActionApi {
    private sessions: any;

    async checkToken(token: string) {
        return true
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
