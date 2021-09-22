<!-- 购物车  -->
<template>
  <div>
    <nav-bar>
      <template v-slot:nav-bar-center>
        <div>购物车</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
  },
};
</script>
<style>
</style>