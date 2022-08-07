import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todoService: TodosService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createTodo(@Body() body: CreateTodoDto, @Req() req: any) {
    console.log(req.user);
    return this.todoService.create(body, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findTodos(@Req() req: any) {
    return this.todoService.findByUserId(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  updateTodo(@Param('id') id: string, @Body() body: UpdateTodoDto) {
    return this.todoService.update(parseInt(id), body);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  @HttpCode(204)
  async findTodoById(@Param('id') id: string) {
    await this.todoService.delete(parseInt(id));
  }
}
