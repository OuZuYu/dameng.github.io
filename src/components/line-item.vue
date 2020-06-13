<template>
  <div class="line-wrap">
    <div class="line-item" v-for="(item, index) in data" :key="index">
      <span class="name ellipsis">{{item.name}}</span>
      <span class="separator"></span>
      <!-- 此处的 moneyFilter 可以抽成全局 filter 其他地方也有用到，时间问题这个先不写了 -->
      <span class="money ellipsis">{{item.money | moneyFilter}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped lang="less">
.line-wrap {
  .line-item {
    display: flex;
    justify-content: space-between;
    height: 30px;
    line-height: 30px;

    .separator {
      flex: 1;
      text-align: end;
      height: 68%;
      border-bottom: 1px dotted #000;
    }

    .name {
      flex: 0 0 100px;
      text-align: left;
    }
    .money {
      flex: 0 0 100px;
      text-align: right;
    }
  }
}
</style>