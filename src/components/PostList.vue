<template>
  <div v-if="posts.length">
    <TransitionGroup name="posts-list">
      <div v-for="post in posts" :key="post.id">
        <PostItem @delete="$emit('delete', post)" :post="post" />
      </div>
    </TransitionGroup>
  </div>
  <h2 v-else class="title no-posts">No posts :(</h2>
</template>

<script>
import PostItem from './PostItem.vue';
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
.posts-list-move,
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 0.5s ease;
}
.posts-list-enter-from,
.posts-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
