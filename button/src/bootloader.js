// helloVue/src/bootstrap.js
import { createApp } from "vue";
import Button from "./Button";
import App from "./App";

const mount = (el) => {
  const app = createApp(App);
  app.mount(el);
};

const mountButton = (el) => {
  const app = createApp(Button);
  app.mount(el);
};

if (process.env.NODE_ENV === "development") {
  const buttonRoot = document.querySelector("#buttonid");
  const devRoot = document.querySelector("#id");

  if (devRoot) {
    mount(devRoot);
    mountButton(buttonRoot);
  }
}

export { mountButton, mount };
