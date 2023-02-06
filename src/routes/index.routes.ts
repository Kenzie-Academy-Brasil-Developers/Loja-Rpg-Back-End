import { Router } from "express";

import { usersRouter } from "./users.routes";

export const AppRoutes = Router();

    AppRoutes.use('/users', usersRouter)