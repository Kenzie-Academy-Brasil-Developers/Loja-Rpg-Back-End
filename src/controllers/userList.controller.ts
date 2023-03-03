import { Request, Response } from 'express'

import {userCreateService,userListService,userIDListService} from '../services/userList.service'


export const userListController = async (req: Request, res: Response) => {
    const users = await userListService()
    return res.send(users)
}

export const userIDListController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const users = await userIDListService(id)
    return res.send(users)
}

export const userCreateController = async (req: Request, res: Response) => {
    const { nome, preco, generos, imagenPrincipal, imagens, descricao  } = req.body
    const newUser = await userCreateService({nome, preco, generos, imagenPrincipal, imagens, descricao})
    return res.status(201).send(newUser)
}