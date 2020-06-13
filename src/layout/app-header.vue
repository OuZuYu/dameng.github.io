<template>
  <div class="app-header">
    <img class="logo" src="http://placehold.it/60x60" alt="logo">

    <navbar class="navbar"></navbar>

    <!-- <div class="search"></div> -->
    <el-input
      class="header-input"
      placeholder="search..."
      v-model="keyword"
      clearable>
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
import Navbar from './nav-bar'

export default {
  components: {
    Navbar
  },

  data() {
    return {
      keyword: ''
    }
  }
}
</script>

<style scoped lang="less">
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {

  }
  .navbar {
    // flex: 1;
  }
  .header-input {
    flex: 0 0 400px;
  }
}
</style>