<template>
  <div>
    <b-form-group
      description="Title"
      label="title"
      label-for="input-1"
      :invalid-feedback="this.titleFeedback"
      :state="!this.titleFeedback"
    >
      <b-form-input
        id="input-1"
        v-model="title"
        :state="!this.titleFeedback"
        trim
      ></b-form-input>
    </b-form-group>

    <b-form-group
      description="Description"
      label="Description"
      label-for="input-2"
    >
      <b-form-input id="input-2" v-model="description" trim></b-form-input>
    </b-form-group>
    <b-button primary @click="this.onSave" variant="primary" block :disabled="!!this.titleFeedback"
      >Save</b-button
    >
  </div>
</template>

<script>
export default {
  props: ["todo-title", "todo-description", "todo-id"],
  data() {
    return {
      title: this.todoTitle,
      description: this.todoDescription,
      id: this.todoId
    };
  },
  methods: {
    async onSave() {
      const { id, title, description } = this;

      if (!id) {
        await this.$axios.$post("/api/todo", { title, description });
      } else {
        await this.$axios.$put("/api/todo", { id, title, description });
      }
      this.$emit("on-save", { title, description });
    }
  },
  computed: {
    titleFeedback() {
      if (!this.title) return "title is required";
      return "";
    }
  }
};
</script>
