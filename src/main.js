/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Styles
import './assets/main.sass'

import VueScrollTo from 'vue-scrollto'

const app = createApp(App)

registerPlugins(app)

app.use(VueScrollTo)

app.mount('#app')


