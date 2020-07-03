import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import SubtopicPage from './components/SubtopicPage.vue'
import QuestionPage from './components/QuestionPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path:"*",
      component: HelloWorld
    },
    {
      path:"/subtopic",
      component: SubtopicPage
    },
    {
      path:"/questions",
      component: QuestionPage
    }
  ]
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
