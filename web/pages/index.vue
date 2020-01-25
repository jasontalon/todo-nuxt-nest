<template>
  <div>
    <h1>Todo List</h1>
    <b-button class="my-3" variant="primary" block to="/todo"
      >Create new item</b-button
    >
    <b-table
      striped
      hover
      thead-class="d-none"
      :items="todos"
      :fields="['title', { key: 'actions' }]"
    >
      <template v-slot:cell(title)="row">
        <p class="">{{ row.item.title }}</p>

        <p class="font-weight-light">{{ row.item.description }}</p>
      </template>
      <template v-slot:cell(actions)="row">
        <div class="d-flex justify-content-end">
          <b-button variant="link" :to="'/todo/' + row.item.id"
            >Update</b-button
          >
          <b-button variant="outline-danger" @click="deleteTodo(row.item.id)"
            >Delete</b-button
          >
        </div>
      </template></b-table
    >
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  async mounted() {
    await this.$store.dispatch("todo/findAll");
  },

  computed: {
    ...mapState({
      todos: state => {
        return state.todo.list;
      }
    })
  },
  methods: {
    async deleteTodo(id) {
      console.log(id);
      await this.$axios.$delete("/api/todo/" + id);
      await this.$store.dispatch("todo/findAll");
    }
  }
};
</script>
