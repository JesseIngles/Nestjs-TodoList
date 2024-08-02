import { PrismaClient } from "@prisma/client";
import { tarefa } from "src/domain/entities/tarefa.entity";
import { iTarefaRepository } from "src/domain/interfaces/iTarefa.repository.interface";

export class tarefaRepository implements iTarefaRepository {
  private prismaClient = new PrismaClient();
  constructor() {
    

  }
  createTarefa(tarefa: tarefa): Promise<tarefa> {
    throw new Error("Method not implemented.");
  }
  deleteTarefa(id: Number): Promise<tarefa | null> {
    throw new Error("Method not implemented.");
  }
  updateTarefa(id: Number, tarefa: tarefa): Promise<tarefa | null> {
    throw new Error("Method not implemented.");
  }
  getOneTarefa(id: Number): Promise<tarefa | null> {
    throw new Error("Method not implemented.");
  }
  getAllTarefa(): Promise<tarefa[] | null> {
    throw new Error("Method not implemented.");
  }
}