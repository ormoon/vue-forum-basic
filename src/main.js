import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
// import AppDate from '@/components/AppDate.vue'

const forumApp = createApp(App)
forumApp.use(router)
/*
assign component globally thus we need not to import and assign it in components while using in other components
i.e. we can use it directly
*/
// forumApp.component('AppDate', AppDate)

/* There is a pattern that vue directly identify the base component and register it automatically based on
named pattern, if doing so, no need to import component here and regster... we make component with App as
prefix as base component here. */
// code from : https://vuejs.org/style-guide/rules-strongly-recommended.html#base-component-names

const requireComponent = require.context(
  './components',
  true,
  /App[A-Z]\w+\.(vue|js)$/
)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName =
    baseComponentConfig.name ||
    fileName.replace(/^.+\//, '').replace(/\.\w+$/, '')
  forumApp.component(baseComponentName, baseComponentConfig)
})

forumApp.mount('#app')
