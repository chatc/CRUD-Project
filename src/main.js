// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router configuration
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const app = createApp(App);

app.use(router); // Use Vue Router in your app
app.mount("#app");
