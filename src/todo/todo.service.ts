import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todo.interface';
import { CreateTodoDto } from './dto/createTodo.dto';

@Injectable()
export class TodoService {
  todo = [
    {
      id: 1,
      done: false,
      title: 'Nest.js',
      description: 'language back',
    },
    {
      id: 2,
      done: true,
      title: 'Vuetify.js',
      description: 'language front vue ',
    },
  ];

  findAll(): Todo[] {
    return this.todo;
  }
  findOne(id: string): Todo[] {
    return this.todo.filter((i: Todo) => i.id == +id);
  }

  create(newTodo: CreateTodoDto) {
    this.todo = [...this.todo, newTodo as Todo];
  }
}
