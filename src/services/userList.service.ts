import { Iten } from "@entities/itens.entity";
import AppDataSource from "../data-source";

export const userListService = () => {
  const userRepository = AppDataSource.getRepository(Iten);
  const users = userRepository.find();

  return users;
};

export const userIDListService = async (id:any) => {
  const userRepository = AppDataSource.getRepository(Iten);
  const users = await userRepository.findOne({
    where: {
      id,
    },
  });

  return users;
};

export const userCreateService = async ({
  nome,
  preco,
  generos,
  imagenPrincipal,
  imagens,
  descricao,
}: any) => {
  const itensRepository = AppDataSource.getRepository(Iten);

  const newIten = itensRepository.create({
    nome:nome,
    preco:preco,
    generos:generos,
    imagenPrincipal:imagenPrincipal,
    imagens:imagens,
    descricao:descricao
  });

  await itensRepository.save(newIten);

  return newIten;
};
