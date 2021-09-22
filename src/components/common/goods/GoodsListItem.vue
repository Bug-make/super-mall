<!--  -->
<template>
  <div class="goods-item">
     <img :src="goodsListItem.show.img" alt="">
     <div class="goods-info">
         <p>{{goodsListItem.title}}</p>
         <span class="price">￥{{goodsListItem.price}}</span>
         <span class="collect">收藏：{{goodsListItem.cfav}}</span>
     </div>
  </div>
</template>

<script>
export default {
  name:'GoodsListItem',
  props: {
      goodsListItem: {
          type: Object,
          befault() {
              return {}
          }
      }
  }
}

</script>
<style lang='less'>
.goods-item {
    width: 3.5rem;
    img {
        width: 100%;
        border-radius: 5px;
    }
    .goods-info {
        font-size: 0.24rem;
        overflow: hidden;
        text-align: center;
        p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-bottom: 0.03rem;
        }
        .price {
            color: var(--color-high-text);
            display: block;
        }
    }
}
</style>