<template>
  <div>
    <div class="buttons">
      <button @click="goPrevious()" class="previous">→</button>
      <button @click="goNext()" class="next">←</button>
    </div>
    <div class="title">
      <h2>{{topics[index]}}</h2>
    </div>
    <div class="desc-box">
      <div class="desc">
        <p>{{descriptions[index]}}</p>
      </div>
      <ul id="subtopics">
        <li style="list-style:none;" v-for="subtopiclist in subtopicslists[index]" :key="subtopiclist">{{ subtopiclist }}<br></li>
      </ul>
    </div>
    <!-- testing router link: <router-link to="/subtopic">hi</router-link> -->
  </div>
</template>

<script>
export default {
  name: "topic-page",
  data() {
    return {
      index: 0,
      topics: [
        "Addition",
        "Division",
        "Fractions",
        "Multiplication",
        "Imaginary Numbers"
      ],
      descriptions: [
        "One grape plus one grape is two grapes.",
        "One slice of cake divided by five people is 0.2 slices per person.",
        "Cut the pizza into equal pieces.",
        "Buying four packs of boxes with two candies each gives eight candies.",
        "The square root of -1 is i."
      ],
      subtopicslists: [
        ["Whole numbers", "Decimals", "Fractions"],
        ["Long Division", "Partial Quotients", "Quick Division"],
        ["Pizza", "Pie", "Improper", "Shapes"],
        ["One digit", "Two digit", "Three numbers"],
        ["Definition", "Graphical explanation", "More complex numbers"]
      ]
    };
  },
  methods: {
    goNext() {
      if (this.index === this.topics.length - 1) this.index = 0;
      else this.index += 1;
    },
    goPrevious() {
      if (this.index === 0) this.index = this.topics.length - 1;
      else this.index -= 1;
    }
  }
};
</script>

<style scoped>
.next {
  position: absolute;
  right: 1184px;
  width: 30px;
  height: 100%;
  margin: 0 auto;
}
.previous {
  position: absolute;
  left: 1184px;
  width: 30px;
  height: 100%;
  margin: 0 auto;
}
.title {
  width: 592px;
  background-color: darkgray;
  margin: 0 auto;
}
.desc {
  width: 520px;
  background-color: lavender;
  margin: 0 auto;
}
.desc-box {
  width: 592px;
  height: 300px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: lightsteelblue;
  margin: 0 auto;
}
</style>
