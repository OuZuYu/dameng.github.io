<template>
  <div>
    <block-header block-title="current"></block-header>
    <line-item :data="currentData"></line-item>
  </div>
</template>

<script>
import BlockHeader from '@/components/block-header'
import LineItem from '@/components/line-item'

export default {
  components: {
    BlockHeader,
    LineItem
  },

  data() {
    return {
      currentData: [
        {
          name: '放大范德萨范德萨第三方打撒撒旦发',
          money: 123213
        },
        {
          name: '123132dsa',
          money: 2333333
        },
        {
          name: '123132dsa',
          money: 333333
        }
      ]
    }
  }
}
</script>

<style scoped lang="less">

</style>