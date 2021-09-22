<!--  -->
<template>
  <div>
    <nav-bar>
      <template v-slot:nav-bar-center>
        <div>档案</div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
  },
};
</script>
<style>
</style>