<template>
  <h2 class="title">Create Post</h2>

  <form @submit.prevent>
    <input
      v-model="post.title"
      class="text-field"
      type="text"
      placeholder="Title"
    />
    <textarea
      v-model="post.description"
      class="text-field"
      type="text"
      placeholder="Description"
    />
    <custom-button @click="createPost" class="add-button">Add</custom-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
    };
  },
  methods: {
    createPost() {
      this.$emit("create", {
        ...this.post,
        id: Date.now(),
      });
      this.post = {
        title: "",
        description: "",
      };
    },
  },
};
</script>

<style scoped>
.text-field {
  display: block;
  width: 100%;
  margin: 0 auto;
  margin-top: 20px;
  padding: 10px;
}

.add-button {
  display: block;
  margin: 0 auto;
  margin-top: 10px;
  border: 1px solid rgb(119, 24, 209);
  color: rgb(119, 24, 209);
}

.title {
  text-align: center;
}
</style>
