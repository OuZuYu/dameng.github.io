<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item v-for="(nav, index) in navs" :index="nav.name" :key="index">
      {{nav.name}}
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          name: 'Dashboard',
          children:[]
        },
        {
          name: 'Services',
          children:[]
        },
        {
          name: 'History',
          children:[]
        },
        {
          name: 'Actions',
          children:[]
        },
      ],
      activeIndex: 'Dashboard'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped lang="less">

</style>