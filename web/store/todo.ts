export const state = () => {
  return {
    list: [],
    todo: {}
  };
};

export const mutations = {
  setList(state: any, list: any[]) {
    state.list = list;
  },
  setTodo(state: any, todo: any) {
    state.todo = todo;
  }
};
export const actions = {
  async findAll(store: any) {
    const data = await (this as any).$axios.$get("/api/todo/all");
    store.commit("setList", data);
  },

  async find(store: any, id: string) {
    const data = await (this as any).$axios.$get(`/api/todo/${id}`);

    store.commit("setTodo", data);
  }
};
