import { Request, Response, Router } from "express";
import { RouterGroup, ActionRoutes } from "../utils/routerGroup";

export default class RouterAdaptor {
    protected router;
    constructor() {
        this.router = Router();
    }

    init(aipRoutes: RouterGroup | ActionRoutes) {
        aipRoutes.router(this.router);
        return this.router;
    }
}
