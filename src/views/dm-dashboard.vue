<template>
  <div class="dm-dashboard">
    <dm-cards></dm-cards>

    <div class="dashboard-services">
      <main-services class="left"></main-services>

      <div class="right">
        <dm-current></dm-current>
        <dm-savings></dm-savings>
      </div>
    </div>
  </div>
</template>

<script>
import DmCards from '../container/dashboard/dm-cards'
import MainServices from '../container/dashboard/main-services'
import DmCurrent from '../container/dashboard/dm-current'
import DmSavings from '../container/dashboard/dm-savings'

export default {
  components: {
    DmCards,
    MainServices,
    DmCurrent,
    DmSavings
  }
}
</script>

<style lang="less" scoped>
.dm-dashboard {
  .dashboard-services {
    display: flex;

    .left {
      flex: 0 0 300px;
      margin-right: 10px;
    }
    .right {
      flex: 1;
    }
  }
}
</style>