<template>
  <h2 class="title" v-show="posts.length">Posts</h2>
  <div v-for="post in posts" :key="post.id">
    <PostItem :post="post" />
  </div>
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
</style>
