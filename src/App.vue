<template>
  <h2 class="title">All your posts in ine place</h2>
  <div class="wrapper" v-if="!isPostsLoading">
    <custom-button class="button" @click="openModal"
      >Create new post</custom-button
    >
    <h2 class="title">Posts</h2>
    <div class="select-wrapper">
      <custom-select v-model="selectedFilter" :options="sortOptions" />
    </div>

    <PostList @delete="deletePost" :posts="posts" />
  </div>
  <p v-else class="loading">Loading...</p>
  <custom-modal v-model:show="showModal">
    <PostForm @create="createPost" />
  </custom-modal>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [],
      showModal: false,
      isPostsLoading: false,
      selectedFilter: "",
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "description", name: "By description" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.showModal = false;
    },
    deletePost(post) {
      this.posts = this.posts.filter((item) => item.id !== post.id);
    },
    openModal() {
      this.showModal = true;
    },
    async getPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        const newPosts = response.data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            description: post.body,
          };
        });
        this.posts = newPosts;
        this.isPostsLoading = false;
      } catch {
        console.log("Error!");
      }
    },
  },
  mounted() {
    this.getPosts();
  },
  watch: {
    selectedFilter(newValue) {
      this.posts.sort((post1, post2) => {
        return post1[newValue].localeCompare(post2[newValue]);
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

<style scoped>
.wrapper {
  max-width: 50%;
  margin: 0 auto;
}

.title {
  padding-top: 20px;
  text-align: center;
}

.button {
  border: 2px solid darkmagenta;
  color: darkmagenta;
  margin: 0 auto;
  margin-top: 10px;
}
.loading {
  font-size: 25px;
  text-align: center;
  padding: 30px 0;
  color: rgb(231, 135, 103);
  font-weight: bold;
}

.select-wrapper {
  display: flex;
  justify-content: flex-end;
}
</style>
