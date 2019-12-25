<template>
    <div>
        <p class="testAgainstFont">This Sentence is from {{ name }} file~!</p>
        <p>让我来看看字体对不对</p>
        <p>对了~</p>
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
    src: url('./assets/font/againts.ttf');
}
.testAgainstFont {
    font-family: against;
}
</style>
