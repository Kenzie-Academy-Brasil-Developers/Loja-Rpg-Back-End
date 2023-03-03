import { Router } from "express";

import { userListController,userCreateController,userIDListController } from "../controllers/userList.controller"

export const usersRouter = Router();

    usersRouter.post('', userCreateController)
    usersRouter.get('', userListController)
    usersRouter.get('/:id', userIDListController)
    