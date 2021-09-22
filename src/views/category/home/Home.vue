<!--  -->
<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:nav-bar-center>
        <div>购物街</div>
      </template>
    </nav-bar>
    <scroll
      class="wrapper"
      ref="wraper"
      :data="goods"
      :probeType="3"
      :click="true"
      :listenScroll="true"
      :pullup="true"
      @scroll="scroll"
      @scrollToEnd="scrollToEnd"
    >
      <swiper-banner :swiperbanner="banners.list" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :goods="goods" @tabClick="tabClick" />
      <goods-list :goods-list="showGoods" />
    </scroll>
    <back-top @click="backClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar.vue";

import SwiperBanner from "@/components/common/swiper/SwiperBanner.vue";
import RecommendView from "@/views/category/home/childComps/HomeRecommendView.vue";
import FeatureView from "@/views/category/home/childComps/FeatureView.vue";
import TabControl from "@/components/content/tabControl/TabControl.vue";
import GoodsList from "@/components/common/goods/GoodsList.vue";
import Scroll from "@/components/common/scroll/Scroll.vue";
import BackTop from "../../../components/content/backtop/BackTop.vue";

import { getHomeMultidata, getHomeGoods } from "@/nerwork/home";

export default {
  name: "Home",
  // 数据
  data() {
    return {
      // result: null
      banners: [],
      recommends: [],
      goods: {
        filter: [],
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShow: false
    };
  },
  //组件注册
  components: {
    NavBar,
    SwiperBanner,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    // 1.请求多个数据
    // this.getHomeMultidata();
    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 吸顶效果
    backClick() {
      this.$refs.wraper.scrollTo(0, 0, 500);
    },
    // 监听滚动坐标
    scroll(position) {
      this.isShow = position.y <= -700 ? true:false
    },
    // 监听下拉刷新时间
    scrollToEnd() {
      this.getHomeGoods(this.currentType)
    },
    //封装网络请求
    getHomeMultidata() {
      getHomeMultidata()
        .then((res) => {
          console.log(res);
          // this.result = res
          this.banners = res.data.banner;
          this.recommends = res.data.recommend;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page)
        .then((res) => {
          this.goods.filter = res.data.filter;
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style lang="less">
#home {
  padding-top: 0.99rem;
  .home-nav {
    background: var(--color-tint);
    font-weight: 500;
    color: #fff;
  }
  .tab-control {
    // 吸顶效果
    position: sticky;
    top: 1rem;
    z-index: 9;
  }
}
</style>
<style scoped>
.wraper {
  height: 10.7rem;
  overflow: hidden;
  /* margin-bottom: 1.3rem; */
}
</style>