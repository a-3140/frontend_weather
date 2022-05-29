import '@/styles/index.css';

import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(
  createAuth0({
    // TODO: store as env variables instead of hardcoding
    domain: "dev-kiwtll2w.us.auth0.com",
    redirect_uri: window.location.origin,
    client_id: "Ot9kuSRrPS36oAN9yydY7qGSGGAth6Ad",
  })
);

app.mount("#app");
