<!-- 顶部导航栏 -->
<template>
  <div class="nav-bar">
    <div class="left"><slot name="nav-bar-left"></slot></div>
    <div class="center"><slot name="nav-bar-center"></slot></div>
    <div class="right"><slot name="nav-bar-right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "",
};
</script>
<style lang='less'>
.nav-bar {
  width: 7.5rem;
    display: flex;
    // justify-content: space-between;
    line-height: 1rem;
    position: fixed;
    top: 0;
    z-index: 2;
    .left, .right {
        width: 1rem;
    }
    .center {
        flex: 1;
        text-align: center;
        div {
          font-size: 0.4rem;
        }
    }
}
</style>