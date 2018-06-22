import Vue from 'vue';
import iView from 'iview';
import { router } from './router/index';
import store from './store/store';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import './styles/common.less';
import filter from './filter';
import api from './libs/http';

Vue.use(iView);

Object.keys(filter).forEach((key) => {
  Vue.filter(key, filter[key])
})

Vue.prototype.api = api;

router.beforeEach((to, from, next) => {
    
    next();
});

router.afterEach((to, from, next) => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    mounted () {
      this.$store.dispatch('updateMenulist');
    }
});
