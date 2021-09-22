<!--  -->
<template>
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in swiperbanner"
          :key="index"
        >
          <img :src="item.image" alt="" @load="ImgLoad"/>
        </div>
      </div>
      <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    </div>
  </div>
</template>

<script>
// 引入swiper js
// import Swiper from "swiper";
import Swiper from "swiper";
// 引入swiper css
import "swiper/css/swiper.css";

export default {
  props: {
    swiperbanner: {
      type: Object,
    },
  },
  name: "Banner",
  updated() {
    var mySwiper = new Swiper(".swiper-container", {
      loop: true,
      autoplay: {
        disableOnInteraction: false,
      }, //可选选项，自动滑动
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
};
</script>
<style lang='less'>
.swiper {
  width: 7.5rem;
  img {
    width: 7.5rem;
  }
  .swiper-container {
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: red; /* 两种都可以 */
  }
}
</style>