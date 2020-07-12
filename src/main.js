import Vue from 'vue';
import App from './app.vue';

const app = new Vue({
  el: '#app', 
  render: vm => vm(App)
})