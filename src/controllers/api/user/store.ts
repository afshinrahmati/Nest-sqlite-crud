import { ActionApi } from "../../../components/base-action";

import { Request, Response, NextFunction } from "express";
import ClientResponse from "../../../components/clientResponse";
import { ResponseType } from "../../../type/response";

class RegisterUserAction extends ActionApi {
    handle() {
        return async (req: any, res: any) => {
            try {
                const { name } = req.body;
                const val = this.makeCreateObject(name);
                return res.send(val);
            } catch (e) {
                console.log(e);

            }
        }
    }

}
const registerUser = new RegisterUserAction().handle();
export { registerUser }