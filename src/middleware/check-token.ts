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
                const status = jwtTokenService.status(token);
                if (!token) return next(new ClientError(400, "token.error", `plese enter your token`));
                if (!status) return res.status(400).json(new ClientError(400, "token.status", `plese enter your token`));
                next();
            } catch (error) {
                next(new ClientError(400, "LOCATION.province", `${error}`));

            }
        }
    }


}