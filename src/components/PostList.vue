<template>
  <div v-if="posts.length">
    <div v-for="post in posts" :key="post.id">
      <PostItem @delete="$emit('delete', post)" :post="post" />
    </div>
  </div>
  <h2 v-else class="title no-posts">No posts :(</h2>
</template>

<script>
import PostItem from "./PostItem.vue";
export default {
  components: {
    PostItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  padding-top: 15px;
  text-align: center;
}

.no-posts {
  color: rgb(139, 39, 185);
}
</style>
