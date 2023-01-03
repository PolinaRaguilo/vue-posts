<template>
  <div class="links-wrapper">
    <p @click="$router.push('/')" class="title">Posts</p>
    <div class="btns-wrapper">
      <custom-button @click="$router.push('/posts')" class="button_margin">Posts</custom-button>
      <custom-button @click="$router.push('/about')">About</custom-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.links-wrapper {
  padding: 0px 30px;
  display: flex;
  align-items: center;
  height: 50px;
  background-color: rgb(200, 144, 253);
  box-shadow: 2px 2px 4px lightgrey;
  justify-content: space-between;
}
.btns-wrapper {
  display: flex;
}
.button_margin {
  margin-right: 10px;
}

.title {
  cursor: pointer;
  font-size: 20px;
}
</style>
