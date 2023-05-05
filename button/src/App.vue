<template>
  <div class="container">
    <div>Name: button</div>
    <div>Framework: vue3</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
    <button>Hello</button>
    <Button />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  components: {
    Button,
  },
};
</script>
