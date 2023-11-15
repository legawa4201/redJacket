import { Request, Response, NextFunction } from "express";

export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
    } catch (error) {
        next(error)
    }
}