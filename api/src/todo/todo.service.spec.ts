import { Test, TestingModule } from "@nestjs/testing";
import { TodoService } from "./todo.service";
import Todo from "./dto/todo";
const shortid = require("shortid");

describe("TodoService", () => {
  let service: TodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoService]
    }).compile();

    service = module.get<TodoService>(TodoService);
  });

  it("should find todo", () => {
    const newItem = mockTodo();

    service.create(newItem);

    const createdItem = service.find(newItem.id);

    expect(createdItem).toEqual(expect.anything());
  });

  it("should create", () => {
    const newItem = mockTodo();
    service.create(newItem);
    const created = service.findAll().filter(i => i.id == newItem.id);

    expect(created).toEqual(expect.anything());
  });

  it("should find all", () => {
    const numOfItems = 3;
    for (let i = 0; numOfItems > i; i++) {
      service.create(mockTodo());
    }
    const todos = service.findAll();
    expect(todos.length).toEqual(numOfItems);
  });

  it("should delete todo", () => {
    const itemToDelete = mockTodo();
    service.create(itemToDelete);
    service.create(mockTodo());

    service.delete(itemToDelete.id);

    const deleted = service.findAll().find(i => i.id == itemToDelete.id);

    expect(deleted).not.toEqual(expect.anything());
  });

  it("should update", () => {
    const itemToUpdate = mockTodo();
    service.create(itemToUpdate);
    service.create(mockTodo());

    const updatedTitle = "updated";

    service.update({ ...itemToUpdate, title: updatedTitle });

    const updated = service.findAll().find(i => i.id == itemToUpdate.id);

    expect(updated.title == updatedTitle).toBeTruthy();
  });
});

function mockTodo(): Todo {
  return {
    id: shortid.generate(),
    title: shortid.generate(),
    description: `${shortid.generate()}, ${shortid.generate()}`
  };
}
