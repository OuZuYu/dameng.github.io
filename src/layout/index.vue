<template>
  <div class="dm-app">
    <div class="app-left">
      <app-header></app-header>
      <app-main></app-main>
    </div>

    <div class="app-right">
      <right-panel></right-panel>
    </div>
  </div>
</template>

<script>
import AppHeader from './app-header'
import AppMain from './app-main'
import RightPanel from './right-panel'

export default {
  components: {
    AppHeader,
    AppMain,
    RightPanel
  }
}
</script>

<style scoped lang="less">
.dm-app {
  display: flex;
  .app-left {
    flex: 1;
  }

  .app-right {
    flex: 0 0 500px;
  }
}
</style>