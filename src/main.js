import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import VeeValidate from 'vee-validate';


Vue.config.productionTip = false
Vue.use(VeeValidate);


new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app');
