<template>
  <div>
    <h3>update item</h3>
    <todo
      v-if="!this.loading"
      @on-save="this.onSave"
      :todo-id="this.id"
      :todo-title="this.title"
      :todo-description="this.description"
    ></todo>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Todo from "~/components/Todo";
export default {
  components: {
    Todo
  },
  data() {
    return { loading: true, id: "", title: "", description: "" };
  },
  methods: {
    onSave() {
      this.$router.push("/");
    }
  },
  async mounted() {
    this.$store.watch(
      (state, getters) => state.todo.todo,
      (val, old) => {
        this.loading = false;
        this.id = val.id;
        this.title = val.title;
        this.description = val.description;
      }
    );
    await this.$store.dispatch("todo/find", this.$route.params.id);
  }
};
</script>
