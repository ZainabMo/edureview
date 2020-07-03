<template>
  <div>
      <div class=title>
          title
      </div>
      <div class=listing>
          desc
      </div>
      <div class=response>
          desc
      </div>
      <div class=hint>
          desc
      </div>
  </div>
</template>

<script>
export default {
  name: "question-page",
  data() {
    return {

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
.listing{
  background-color: lightsteelblue;
  margin: 0 auto;
  width: 592px;
}
.response{
  width: 592px;
  margin: 0 auto;
}
.hint{
  width: 592px;
  margin: 0 auto;
  overflow: scroll;
  overflow-x: hidden;
}
</style>