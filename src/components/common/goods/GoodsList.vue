<!--  -->
<template>
  <div class="goods">
    <goods-list-item
      v-for="(item, index) in goodsList"
      :key="index"
      :goods-list-item="item"
    />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue";

export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Object,
    },
  },
  components: {
    GoodsListItem,
  }
};
</script>
<style lang='less'>
.goods {
  width: 7.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>