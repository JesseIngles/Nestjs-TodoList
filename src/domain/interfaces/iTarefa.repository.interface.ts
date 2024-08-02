import { tarefa } from '../entities/tarefa.entity';

export interface iTarefaRepository {
  createTarefa(tarefa: tarefa) : Promise<tarefa>;
  deleteTarefa(id: Number) : Promise<tarefa | null>;
  updateTarefa(id: Number, tarefa: tarefa) : Promise<tarefa | null>;
  getOneTarefa(id: Number) : Promise<tarefa | null>;
  getAllTarefa(): Promise<tarefa[] | null>;
}