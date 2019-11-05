<template>
  <div>
    <p>This Sentence is from {{ name }} file~!</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '".Vue"'
    }
  }
}
</script>
<style lang="less" scoped>
div {
  height: 200px;
  width: 200px;
  background-color: steelblue;
  p {
    font-size: 24px;
  }
}
</style>