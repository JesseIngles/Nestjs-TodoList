import { Injectable } from "@nestjs/common";
import { tarefa } from "src/domain/entities/tarefa.entity";
import { iTarefaRepository } from "src/domain/interfaces/iTarefa.repository.interface";

@Injectable()
export class tarefaService {
  constructor(private readonly itarefaRepository: iTarefaRepository) {}
  findAllTarefas(): Promise<tarefa[] | null> {
    return this.itarefaRepository.getAllTarefa();
  }
  
}