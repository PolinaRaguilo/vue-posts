<template>
  <div class="pagination-wrapper">
    <div
      :class="{
        'active-page': pageNumber === currentPage,
      }"
      class="page"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      @click="this.changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-pagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(page) {
      this.$emit('change-page', page);
    },
  },
};
</script>

<style scoped>
.pagination-wrapper {
  display: flex;
  justify-content: flex-end;
  margin: 20px 0px;
}
.page {
  cursor: pointer;
  font-size: 20px;
  padding: 0 5px;
  margin-right: 5px;
  color: purple;
}

.active-page {
  border: 1px solid purple;
  border-radius: 50%;
}
</style>
