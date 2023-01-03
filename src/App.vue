<template>
  <NavBar />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/Navbar.vue';
export default {
  components: {
    NavBar,
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
