import { Strategy } from "passport-jwt";
import { Request } from 'express';
type JwtPayload = {
    sub: string;
    email: string;
};
declare const AtStrategy_base: new (...args: any[]) => Strategy;
export declare class AtStrategy extends AtStrategy_base {
    constructor();
    validate(req: Request, payload: JwtPayload): JwtPayload;
}
export {};
