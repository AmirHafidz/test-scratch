import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css';
import bottomNavigationVue from "bottom-navigation-vue";
import "bottom-navigation-vue/dist/style.css";
import router from './router'

const app = createApp(App)
app.use(router)
app.use(bottomNavigationVue)

app.mount('#app')
