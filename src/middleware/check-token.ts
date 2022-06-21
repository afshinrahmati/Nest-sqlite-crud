import s from "connect-redis";
import { RequestHandler, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Middleware from "../components/base-middleware";
import { ClientError } from "../components/clientError";

export default class CheckToken extends Middleware {
    handle() {
        return async (req: any, res: Response, next: NextFunction) => {
            try {

                const test = await this.checkToken("salaam");
                if (!test) {
                    throw "newError"
                }
                next();
            } catch (error) {
                next(new ClientError(400, "LOCATION.province", `${error}`));

            }
        }
    }

    private async checkToken(token: string): Promise<boolean> {
        if (token === "salam") {
            return true

        } else {
            return false

        }


    }
}