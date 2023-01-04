<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button',
  props: {},
};
</script>

<style scoped>
.button {
  display: block;
  padding: 5px 15px;
  background-color: transparent;
  border-radius: 5px;
  cursor: pointer;
  font-size: 20px;
}
</style>
