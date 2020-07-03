<template>
  <div id="app">
    <!-- <nav>HI</nav> -->
    <header>
      <img class="logo" alt="edureview logo" src="./assets/rsz_math.png">
      <HelloWorld title="Edu Review" description="Deepen your understanding of mathematics."/>
      <nav>
        <!-- add router link to About -->
        
      </nav>
    </header>
    <topic-page></topic-page>
    <!-- <subtopic-page></subtopic-page>
    <question-page></question-page> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TopicPage from './components/TopicPage.vue'
// import SubtopicPage from './components/SubtopicPage.vue'
// import QuestionPage from './components/QuestionPage.vue'

export default {
  name: 'App',
  props: {
  },
  components: {
    HelloWorld,
    TopicPage,
    // SubtopicPage,
    // QuestionPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 50px;
  height: 50px;
}
header {
  background-color: whitesmoke;
  width: 1184px;
  margin: 0 auto;
}
nav {
  background-color: black;
}
</style>
