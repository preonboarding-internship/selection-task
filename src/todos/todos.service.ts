import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTodoDto } from './create-todo.dto';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {
  constructor(@InjectRepository(Todos) private todos: Repository<Todos>) {}

  create(body: CreateTodoDto) {
    const todo = this.todos.create(body);
    return this.todos.save(todo);
  }

  find() {
    return this.todos.find();
  }

  findOne(id: number) {
    if (!id) return null;
    return this.todos.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number) {
    const todo = await this.todos.findOne({
      where: {
        id,
      },
    });

    if (!todo) {
      throw new NotFoundException(`Todo id: ${id} not found`);
    }

    return this.todos.save({ ...todo, isCompleted: true });
  }
}
