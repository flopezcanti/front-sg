import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.default.css'
import './assets/css/custom.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import LoadScript from 'vue-plugin-load-script';


Vue.config.productionTip = false;

Vue.use(LoadScript);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueAxios, axios)

//axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.baseURL = 'https://polar-waters-99712.herokuapp.com'

Vue.loadScript("../vendor/jquery/jquery.min.js")
Vue.loadScript("../vendor/bootstrap/js/bootstrap.bundle.min.js")
Vue.loadScript("../vendor/magnific-popup/jquery.magnific-popup.min.js")
Vue.loadScript("../vendor/smooth-scroll/smooth-scroll.polyfills.min.js")
Vue.loadScript("../vendor/bootstrap-select/js/bootstrap-select.min.js")
Vue.loadScript("../vendor/object-fit-images/ofi.min.js")
Vue.loadScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/js/swiper.min.js")
Vue.loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js")
Vue.loadScript("../js/theme.js")
// Vue.loadScript("../css/style.default.css")
// Vue.loadScript("../css/custom.css")


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
