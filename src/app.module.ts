import { Module } from '@nestjs/common';
import { tarefaController } from './infrastructure/controllers/tarefas.controller';
import { tarefaService } from './application/tarefa.service';
import { iTarefaRepository } from './domain/interfaces/iTarefa.repository.interface';
import { tarefaRepository } from './infrastructure/repositories/tarefa.repository';
@Module({
  imports: [],
  controllers: [tarefaController],
  providers: [tarefaService, tarefaRepository],
})
export class AppModule {}
