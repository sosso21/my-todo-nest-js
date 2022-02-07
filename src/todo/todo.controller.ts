import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/createTodo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  findAdAll(): Todo[] {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Todo[] {
    return this.todoService.findOne(id);
  }

  @Post()
  createTodo(@Body() newTodo: CreateTodoDto): void {
    console.log('newTodo:', newTodo);
    this.todoService.create(newTodo);
  }
}
