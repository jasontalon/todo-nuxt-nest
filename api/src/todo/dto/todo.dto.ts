import Todo from "./todo";

export class TodoDto implements Todo {
  readonly id: string;
  readonly title: string;
  readonly description: string;
}
