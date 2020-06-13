<template>
  <div class="dm-transactions">
    <block-header block-title="Transactions"></block-header>

    <div class="transactions-wrap">
      <div class="transaction-item" v-for="(item, index) in data" :key="index">
        <div class="img">
          <img :src="item.img" alt="img">
        </div>
        <div class="name">{{item.name}}</div>
        <div class="money">
          {{item.money}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang="less" scoped>
.dm-transactions {
  .transactions-wrap{
    .transaction-item {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .img {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 100px;
        height: 100px;
      }

      .name {
        flex: 1;
      }
      .money {
        flex: 0 0 100px;
      }
    }
  }

}
</style>