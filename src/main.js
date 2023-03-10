import { createApp } from 'vue'
import App from './App.vue'

import Oruga from '@oruga-ui/oruga-next'
import '@oruga-ui/theme-bulma/dist/bulma.min.css'

createApp(App)
  .use(Oruga)
  .mount('#app')
