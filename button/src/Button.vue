<script>
import { WindowEventService } from "pdp/globalEvent";

export default {
  name: "Button",
  props: {
    buttonName: {
      default: "Increase",
      type: String,
    },
    count: {
      type: Number,
      default: 0,
    },
  },
  components: {},
  data: function () {
    return {};
  },
  methods: {
    eventHandler: function (event) {
      console.log("Message in vue", event.detail);
    },
    increaseHandler: function () {
      WindowEventService.fire("channel-message", {
        detail: { message: "Clicked on Increase" },
      });
    },
  },
  mounted() {
    WindowEventService.subscribe("channel-1", this.eventHandler);
  },
};
</script>

<template>
  <div id="buttonid">
    <button
      id="increaseId"
      @click="increaseHandler"
      style="background-color: grey; padding: 10px"
    >
      {{ buttonName }}
    </button>
  </div>
</template>
