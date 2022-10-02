import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuesticEssential, VaButton } from 'vuestic-ui'
import 'vuestic-ui/styles/essential.css'
import 'vuestic-ui/styles/grid.css'
import 'vuestic-ui/styles/reset.css'
import 'vuestic-ui/styles/typography.css'
import { createVuestic } from 'vuestic-ui'
import 'vuestic-ui/css'

createApp(App).use(router).use(createVuesticEssential({ components: { VaButton } })).use(createVuestic()).mount('#app')
