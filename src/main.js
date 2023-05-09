import { createApp } from "vue";
import App from "./App.vue";
import Popper from "vue3-popper";
import "./assets/main.css";

const app = createApp(App);
app.component("Popper", Popper);
app.mount("#app");
