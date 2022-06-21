import { RequestHandler } from "express";

export default abstract class Middleware {
    protected app: any;
    abstract handle(...params: any[]): RequestHandler | RequestHandler[];
}
