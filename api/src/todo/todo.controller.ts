import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Query,
  Delete,
  Put
} from "@nestjs/common";
import { TodoDto } from "./dto/todo.dto";
import { TodoService } from "./todo.service";
const shortid = require("shortid");

@Controller("todo")
export class TodoController {
  constructor(private readonly todoService: TodoService) {}
  @Get("all")
  findAll() {
    return this.todoService.findAll();
  }

  @Get(":id")
  find(@Param("id") id: string) {
    return this.todoService.find(id);
  }

  @Post()
  create(@Body() todo: TodoDto): string {
    const id = shortid.generate();
    this.todoService.create({ ...todo, id });
    return id;
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    this.todoService.delete(id);
  }

  @Put()
  update(@Body() todo: TodoDto) {
    this.todoService.update(todo);
  }
}
