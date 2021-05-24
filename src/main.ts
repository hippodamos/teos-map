import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import Mapbox from "./plugins/mapbox";

Vue.config.productionTip = false

Vue.use(new Mapbox("pk.eyJ1IjoiaGlwcG9kYW1vcyIsImEiOiJja296aW5weGUxMDNoMm9xZzhrbms1dTU1In0.JVmD1zT_nHG6evPWD45phA"));

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
