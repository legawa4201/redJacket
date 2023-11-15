import express, { Router } from "express";

import userRouter from "./v1_user";
import eventRouter from "./v1_event";

const v1_router: Router = express.Router()

v1_router.use(`/events`, eventRouter)
v1_router.use(`/users`, userRouter)

export default v1_router