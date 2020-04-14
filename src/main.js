// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import CKEditor from '@ckeditor/ckeditor5-vue';

import Axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';

import MyNav from '@/components/MyNav';

Axios.defaults.headers.post["Content-type"]="application/json;charset=utf-8";
// Axios.defaults.headers.get["Content-type"]="application/json;charset=utf-8";
Axios.defaults.baseURL="/api";

// console.log("挂载", Ckeditor);
// Vue.use(CKEditor);

// Vue.component('MyInputText', MyInputText);
Vue.component('MyNav', MyNav);//导航
// Vue.component('ElFooter', El_Footer);//页脚
//挂载axios
Vue.use(VueAxios, Axios);

Axios.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return new Promise.reject(err);
})

// import Nav_component from '@/components/el_nav.vue';
// import Footer_component from '@/components/el_footer.vue';

// //全局组件
// Vue.component('navigation', Nav_component);
// Vue.component('my-footer', Footer_component)

Vue.use(elementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
