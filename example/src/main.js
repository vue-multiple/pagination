import Vue from 'vue'
import App from './App.vue'

import VmPagination from '../../src/index.js'
Vue.component(VmPagination.name, VmPagination)

import VueDemonstration from 'vue-demonstration'
Vue.component('demonstration', VueDemonstration)

new Vue({
    el: '#app',
    render: h => h(App)
})
