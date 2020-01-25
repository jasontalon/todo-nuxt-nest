<template>
  <div>
    <h3>Create new Todo</h3>
    <todo @on-save="this.onSave"></todo>
  </div>
</template>

<script>
import Todo from "~/components/Todo";
export default {
  components: {
    Todo
  },
  methods: {
    onSave() {
      this.$router.push("/");
    }
  }
};
</script>
