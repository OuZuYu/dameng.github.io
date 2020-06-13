<template>
  <div class="dm-app">
    <app-header></app-header>
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './app-header'
import AppMain from './app-main'

export default {
  components: {
    AppHeader,
    AppMain
  }
}
</script>

<style scoped lang="less">

</style>