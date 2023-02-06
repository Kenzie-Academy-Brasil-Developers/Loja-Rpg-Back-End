
import { Request, Response } from 'express'

// importamos o Service
import listUsersService from '../services/userList.service'

const userListController = (req: Request, res: Response) => {

    try {
				
				// chamamos o Service
				// users será inferido como um array de IUsers ( IUsers[] )
				// pois o Service está retornando o array que tipamos
        const users = listUsersService()
				
				// retornamos 200 com a lista dos usuários (mesmo se estiver vazia)
        return res.send(users)

    } catch (err) {

        if (err instanceof Error) {

            return res.status(400).send({
                "error": err.name,
                "message": err.message
            })
        }
    }
}

export default userListController
        