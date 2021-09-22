<!--  -->
<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in goods.filter.list"
      :key="index"
      class="tab-control-item"
      :class="{ active: index === currentIndex }"
      @click="clickIndex(index)"
    >
      <span>{{ item.title }}</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    goods: {
      type: Object,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    clickIndex(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
};
</script>
<style lang='less'>
.tab-control {
  width: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 0.5rem;
  background: #ffffff;
  .active {
    color: var(--color-high-text);
    border-bottom: 0.05rem solid var(--color-tint);
  }
  .tab-control-item {
    height: 0.5rem;
    padding: 0 0.2rem;
    font-size: 0.3rem;
    margin-bottom: 0.1rem;
    // flex: 1;
    // text-align: center;
  }
  // span {
  //   height: 0.3rem;
  //   padding: 0 0.1rem;
  // }
  
}
</style>