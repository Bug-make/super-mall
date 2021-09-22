<!-- 导航信息 -->
<template>
  <div class="tab-bar-item" @click="itemClick">
      <!-- <slot></slot> -->
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- <div :style="activeStyle"><slot name="item-text"></slot></div> -->
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  props: {
    path: String,
    activeColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
      return {
        // isActive: true
      }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    // activeStyle() {
    //   return this.isActive ? {color:this.activeColor} : {}
    // }
  },
  methods: {
    itemClick() {
      // console.log(this.path)
      this.$router.replace(this.path)
    }
  }
}

</script>
<style>
.tab-bar-item {
    flex: 1;
    height: 1.3rem;
    text-align: center;
    line-height: 1.3rem;
  }
  .tab-bar-item img {
      width: 1.5rem;
      height: 1.3rem;
  }
</style>