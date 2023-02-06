import { Router } from "express";

import userCreateController from "../controllers/userCreate.conrollers";
import userListController from "../controllers/userList.controller"

export const usersRouter = Router();

    usersRouter.post('', userCreateController)
    usersRouter.get('', userListController)