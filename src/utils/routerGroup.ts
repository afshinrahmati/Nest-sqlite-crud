import { Router } from "express";

export declare type ActionRoutes = {
    [key: string]: any;
} & ((route: Router) => any);

export interface RouterGroup {
    [key: string]: any;
    middleware?: any;
    router: ActionRoutes;
}