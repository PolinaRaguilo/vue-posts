<template>
  <div class="post">
    <div>
      <p><strong>Title:</strong> {{ post.title }}</p>
      <p><strong>Description: </strong> {{ post.description }}</p>
    </div>
    <div class="btns-wrapper">
      <custom-button class="remove-button">Remove</custom-button>
      <custom-button class="edit-button">Edit</custom-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
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
  display: flex;
  align-items: center;
}
.btns-wrapper {
  padding-left: 15px;
}
.remove-button {
  width: 100%;
  border: 1px solid rgb(207, 44, 44);
  color: rgb(207, 44, 44);
}
.edit-button {
  margin-top: 10px;
  width: 100%;
  border: 1px solid rgb(3, 119, 29);
  color: rgb(3, 119, 29);
}
</style>
