<!--  -->
<template>
  <div class="recommends">
    <div
      v-for="(item, index) in recommends.list"
      :key="index"
      class="recommends-item"
    >
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeRecommendView",
  props: {
    recommends: {
      type: Object,
    },
  },
};
</script>
<style lang='less'>
.recommends {
  width: 7.5rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  border-bottom: 0.2rem solid #eee;
  padding-top: 0.1rem;
  padding-bottom: 0.3rem;
  .recommends-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 2rem;
    font-size: 0.3rem;
    img {
      width: 1.6rem;
      height: 1.6rem;
    }
    div {
      padding-top: 0.1rem;
    }
  }
}
</style>