import {
    Column,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
  } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("itens")
export class Iten  {
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    preco: string;

    @Column()
    generos: string;

    @Column()
    imagenPrincipal: string;

    @Column()
    imagens: string;

    @Column()
    descricao: string;

    constructor() {
        if (!this.id) {
          this.id = uuid();
        }
      }
}