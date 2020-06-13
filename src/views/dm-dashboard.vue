<template>
  <div class="dm-dashboard">
    <dm-cards></dm-cards>
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
