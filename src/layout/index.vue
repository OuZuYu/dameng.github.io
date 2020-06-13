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
    background: #f9f9f9;
    padding: 6px 20px;
  }

  .app-right {
    flex: 0 0 500px;
    border: 1px solid #dadada;
    border-radius: 26px 0 0 26px;
    box-shadow: 1px 7px 8px 8px #e2e2e2;
  }
}
</style>