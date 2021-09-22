<!--  -->
<template>
  <div class="back-top">
      <img src="../../../assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop',
}

</script>
<style lang='less'>
.back-top {
    width: 1rem;
    height: 1rem;
    position: fixed;
    bottom: 1.5rem;
    right: 0;
    z-index: 999;
    img {
        width: 100%;
        height: 100%;
    }
}
</style>