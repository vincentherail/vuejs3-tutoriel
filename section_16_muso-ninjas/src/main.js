import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { projectAuth } from './firebase/config'

// global styles
import './assets/main.css'

let app
// fire a function everytime firebase detect a change in atuthentication
// on va monter l'application à la première authentication
projectAuth.onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(router).mount('#app')
    }
})

