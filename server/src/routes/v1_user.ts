import express, { Router, Request, Response } from "express";
import { register } from "../controllers/user";

const userRouter: Router = express.Router()

userRouter.post(`/register`, register)

export default userRouter