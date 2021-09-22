<!-- 底部导航栏 -->
<template>
  <tab-bar>
    <tab-bar-item
      v-for="(item, index) in imgs[0]"
      :key="index"
      :path="path[index]"
      activeColor="red"
    >
      <template v-slot:item-icon>
        <img :src="item.pic" alt="" />
      </template>
      <template v-slot:item-icon-active>
        <img :src="imgs[1][index].pic" alt="" />
      </template>
      <template v-slot:item-text>
        <div>{{ imgs[2][index] }}</div>
      </template>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar.vue";
import TabBarItem from "../../common/tabbar/TabBarItem.vue";
export default {
  name: "MainTabBar",
  data() {
    return {
      path: ["/home", "/category", "/cart", "/profile"],
      imgs: [
        [
          { pic: require("../../../assets/img/tabbar/82c582e7c375e4b3.png") },
          { pic: require("../../../assets/img/tabbar/4af32f42575509d8.png") },
          { pic: require("../../../assets/img/tabbar/f2fe0a88bf344736.png") },
          { pic: require("../../../assets/img/tabbar/876c40f17d91ce44.png") },
        ],
        [
          { pic: require("../../../assets/img/tabbar/81328b0609c60a3c.png") },
          { pic: require("../../../assets/img/tabbar/4481f5b3dbad979d.png") },
          { pic: require("../../../assets/img/tabbar/dd60fafbde8542ca.png") },
          { pic: require("../../../assets/img/tabbar/4dc0ec8a7e47c2b7.png") },
        ],
        ["首页", "分类", "购物车", "我的"],
      ],
    };
  },
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style>
</style>