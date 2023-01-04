<template>
  <h2 class="title">All your posts in one place (with store)</h2>
  <div class="wrapper" v-if="!isPostsLoading">
    <custom-button class="button" @click="openModal">Create new post</custom-button>
    <h2 class="title">Posts</h2>
    <div class="flex-wrapper">
      <div class="search-wrapper">
        <input
          class="search-input"
          @update:value="setSearchQuery"
          :value="searchQuery"
          placeholder="Search..."
        />
        <div @click="setSearchQuery('')" v-show="searchQuery.length">x</div>
      </div>
      <custom-select
        @input:value="setSelectedFilter"
        :value="selectedFilter"
        :options="sortOptions"
      />
    </div>

    <PostList @delete="deletePost" :posts="sortedAndSearch" />

    <!-- FYI: Pagination with numbers -->
    <!-- <CustomPagintation
        :totalPages="this.totalPages"
        :currentPage="page"
        @change-page="changePage"
      /> -->
  </div>
  <p v-else class="loading">Loading...</p>
  <div v-intersection="infiniteGetPosts" ref="observer" class="g" />

  <custom-modal v-if="showModal" v-model:show="showModal">
    <PostForm @create="createPost" />
  </custom-modal>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
import PostForm from '../components/PostForm.vue';
import PostList from '../components/PostList.vue';

// import CustomPagintation from './components/UI/CustomPagintation.vue';

export default {
  components: {
    PostList,
    PostForm,
    // CustomPagintation,
  },
  data() {
    return {
      showModal: false,
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
    ...mapMutations({
      setPage: 'post/setPage',
      setSearchQuery: 'post/setSearchQuery',
      setSelectedFilter: 'post/setSelectedFilter',
    }),
    ...mapActions({
      getPosts: 'post/getPosts',
      infiniteGetPosts: 'post/infiniteGetPosts',
    }),
    // FYI: For the Pagination with numbers
    // changePage(currentPage) {
    //   this.page = currentPage;
    // },
  },
  mounted() {
    this.getPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedFilter: (state) => state.post.selectedFilter,
      searchQuery: (state) => state.post.searchQuery,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
      sortOptions: (state) => state.post.sortOptions,
    }),
    ...mapGetters({
      sortedPosts: 'post/sortedPosts',
      sortedAndSearch: 'post/sortedAndSearch',
    }),
  },
  watch: {
    // FYI: For the Pagination with numbers
    // page() {
    //   this.getPosts();
    // },
  },
};
</script>

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

.flex-wrapper {
  display: flex;
  justify-content: space-between;
}

.search-wrapper {
  position: relative;
}

.search-input {
  padding: 7px;
}

.search-wrapper > div {
  position: absolute;
  top: 7px;
  right: 7px;
  cursor: pointer;
}
</style>
