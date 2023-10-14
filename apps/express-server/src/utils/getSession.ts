import { Request, Response } from "express";

export function getSession(req: Request, res:Response){
    if(!req.session.user){
        res.json({
            message: "You are not logged in"
        })
        return null
    }
    return req.session.user
}