<template>
  <div>
    <p class="testAgainstFont">This Sentence is from {{ name }} file~!</p>
    <router-link to="/welcome">welcome</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '".Vue"'
    };
  }
};
</script>
<style lang="less" scoped>
div {
  height: 200px;
  width: 200px;
  background-color: steelblue;
}

p {
  font-size: 24px;
  font-family: fantasy;
}
@font-face {
  font-family: against;
  src: url("./assets/font/againts.ttf");
}
.testAgainstFont {
  font-family: against;
}
</style>
