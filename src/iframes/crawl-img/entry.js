/**
 * Created by tonyearth on 2016/12/14.
 */
import "babel-polyfill"
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './views/app.vue'
import store from './store'

import '../../content-css/crawl-img.scss'
import '../../assets/iconfont/iconfont.css'

Vue.use(ElementUI)

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})