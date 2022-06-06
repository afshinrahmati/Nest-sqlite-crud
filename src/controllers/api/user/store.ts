import { ActionApi } from "../../../components/base-action";

import { Request, Response, NextFunction } from "express";

class AdminUserCreateAction extends ActionApi {
    handle() {
        return async (req: any, res: any) => {
            try {
                req.session.user = "afshim"
                console.log(req.body);
                return res.send("85");
            } catch (e) {
                console.log(e);

            }
        }
    }
}
const storeLogin = new AdminUserCreateAction().handle();
export { storeLogin }