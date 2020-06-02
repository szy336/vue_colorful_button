import Vue from 'vue'
import App from './App.vue'
import colorfulButton from "./lib/index.js";


Vue.use(colorfulButton)

new Vue({
  el: '#app',
  render: h => h(App)
})
