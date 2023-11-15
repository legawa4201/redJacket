import { Request, Response, NextFunction } from "express";

export default function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    let status: number;
    let message: string;
    switch (err.name) {
        default:
            status = 500;
            message = `Internal Server Error`
            break;
    }
    res.status(status).json({ message })
}