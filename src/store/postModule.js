import axios from 'axios';

export const postModule = {
  state: () => ({
    posts: [],
    isPostsLoading: false,
    selectedFilter: '',
    searchQuery: '',
    page: 1,
    limit: 10,
    totalPages: 0,
    sortOptions: [
      { value: 'title', name: 'By title' },
      { value: 'description', name: 'By description' },
    ],
  }),
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedFilter]?.localeCompare(post2[state.selectedFilter]);
      });
    },

    sortedAndSearch(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery?.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, loading) {
      state.isPostsLoading = loading;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPages(state, totalCount) {
      state.totalPages = totalCount;
    },
    setSelectedFilter(state, filter) {
      state.selectedFilter = filter;
    },
    setSearchQuery(state, searchQuery) {
      console.log(searchQuery);
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async getPosts({ state, commit }) {
      try {
        commit('setLoading', true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`
        );
        const newPosts = response.data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            description: post.body,
          };
        });
        const newTotalPages = Math.ceil(response.headers['x-total-count'] / state.limit);
        commit('setTotalPages', newTotalPages);
        commit('setPosts', newPosts);
        commit('setLoading', false);
      } catch {
        console.log('Error!');
      }
    },
    async infiniteGetPosts({ state, commit }) {
      try {
        commit('setPage', state.page + 1);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`
        );
        const newPosts = response.data.map((post) => {
          return {
            id: post.id,
            title: post.title,
            description: post.body,
          };
        });
        const newTotalPages = Math.ceil(response.headers['x-total-count'] / state.limit);
        commit('setTotalPages', newTotalPages);
        commit('setPosts', [...state.posts, ...newPosts]);
      } catch {
        console.log('Error!');
      }
    },
  },
  namespaced: true,
};
