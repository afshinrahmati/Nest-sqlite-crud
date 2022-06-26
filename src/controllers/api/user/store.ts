import { ActionApi } from "../../../components/base-action";

import { Request, Response, NextFunction } from "express";
import ClientResponse from "../../../components/clientResponse";
import { ResponseType } from "../../../type/response";
import { register_validator } from "../../../validator/register";
import Joi, { object } from "joi";
import { ClientError } from "../../../components/clientError";

class RegisterUserAction extends ActionApi {

    handle() {
        return async (req: any, res: any, next: any) => {
            try {
                await this.setData(req.body, req.params, req.query);

                const validate = await this.validate();
                if (validate.error) {
                    return res.status(400).json(new ClientError(400, "validate.error", validate.message)
                    );
                }

                const { name } = req.body;
                return res.status(200).json(new ClientResponse(200, name, "sac"));
            } catch (e) {
                console.log(e);

            }
        }
    }



}
const registerUser = new RegisterUserAction().handle();
export { registerUser }