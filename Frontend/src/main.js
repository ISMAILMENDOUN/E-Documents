/***Bootstrap***/
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "bootstrap-icons/font/bootstrap-icons.css"
/***axios ***/
import axios from 'axios'
import './axios'
/*** */
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
createApp(App).use(router,axios).mount('#app')
