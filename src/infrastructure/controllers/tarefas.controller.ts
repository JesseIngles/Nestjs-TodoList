import { Controller, Get } from "@nestjs/common";
import { tarefaService } from "src/application/tarefa.service";
import { tarefa } from "src/domain/entities/tarefa.entity";

@Controller('tarefas')
export class tarefaController {
  constructor(private readonly tarefaService: tarefaService) {}

  @Get('listarTarefas')
  async listarTarefas(): Promise<tarefa[] | null> {
    return this.tarefaService.findAllTarefas();
  }
}