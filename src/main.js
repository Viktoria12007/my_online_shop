import { createApp } from 'vue';
import App from './App.vue';
import store from './vuex/store';
import './assets/styles/styles.scss';

const app = createApp(App);
app.use(store);
app.mount('#app');