import { Request, Response, NextFunction } from "express";

export async function getEvents(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
    } catch (error) {
        next(error)
    }
}