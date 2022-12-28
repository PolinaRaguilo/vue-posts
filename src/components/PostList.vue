<template>
  <div class="post" v-for="post in posts" :key="post.id">
    <div><strong>Title:</strong> {{ post.title }}</div>
    <div><strong>Description: </strong> {{ post.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  border: 2px solid slateblue;
  padding: 10px;
  margin-top: 15px;
}
</style>
