<template>
  <div class="container">
    <div>Name: {{ button.name }}</div>
    <Button :buttonName="button.incButton" :count="button.count" />
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  name: "App",
  components: {
    Button,
  },
  data() {
    return {
      button: {
        incButton: "Increase",
        name: "Vue",
        count: 0,
      },
    };
  },
};
</script>
