import { Injectable } from "@nestjs/common";
import Todo from "./dto/todo";

@Injectable()
export class TodoService {
  constructor() {
    this.todos = [];
  }
  private todos: Todo[];
  find(id: string) {
    return this.todos.find(p => p.id == id);
  }
  findAll() {
    return this.todos;
  }
  create(todo: Todo) {
    this.todos.push(todo);
  }
  update(todo: Todo) {
    const _todo = this.todos.find(p => p.id == todo.id);
    if (!_todo) return;
    _todo.title = todo.title;
    _todo.description = todo.description;
  }
  delete(id: string) {
    this.todos = this.todos.filter(p => p.id != id);
  }
}
