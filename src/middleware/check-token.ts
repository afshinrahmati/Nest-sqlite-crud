import s from "connect-redis";
import { RequestHandler, Response, NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import Middleware from "../components/base-middleware";
import { ClientError } from "../components/clientError";
import jwtTokenService from "../service/jwt-token-service";

export default class CheckToken extends Middleware {
    handle() {
        return async (req: any, res: Response, next: NextFunction) => {
            try {
                const token = req.headers["token"];
                if (!token) return next(new ClientError(400, "token.error", `plese enter your token`));
                jwtTokenService.status(token);
                const test = await this.checkToken("salam");
                if (!test) {
                    throw "newError"
                };
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