<template>
  <header class="block-header">
    <h3 class="title">{{blockTitle}}</h3>
    <span class="title">{{viewAll}}</span>
  </header>
</template>

<script>
export default {
  props: {
    blockTitle: String,
    viewAllText: String
  },

  computed: {
    viewAll() {
      return this.viewAllText || 'View all'
    }
  },
}
</script>

<style lang="less" scoped>
.block-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>