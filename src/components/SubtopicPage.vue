<template>
  <div>
      <div class=title>
          {{title}}
      </div>
      <div class=desc>
          desc
      </div>
  </div>
</template>

<script>
export default {
  name: "subtopic-page",
  data() {
    return {
        title: "banana"
    }
  }
}
</script>

<style scoped>
.title{
  width: 592px;
  margin: 0 auto;
  background-color: darkgray;
}
.desc{
  overflow: scroll;
  overflow-x: hidden;
  background-color: lightsteelblue;
  margin: 0 auto;
  width: 592px;
}
</style>