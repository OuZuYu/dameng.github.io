<template>
  <div class="dm-cards">
    <div class="cards-header">
      <h3>Cards</h3>
      <span>View all cards</span>
    </div>

    <div class="cards-wrap">
      <div class="card-item" v-for="card in cards" :key="card.id" :style="{background: createColor()}">

        <!-- 这些样式先不写了 -->
        <div class="title">{{card.title}}</div>
        <div class="money">{{card.money | moneyFilter}}</div>
        <div class="card-number">{{card.number | cardNumFilter}}</div>
        <div class="logo">Monzo</div>
      </div>
      <div class="card-item add-card">
        <el-button class="add-btn" circle icon="el-icon-plus"></el-button>
        <div class="add-card-text">Add New Card</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 本来想用 mock，结果 easy-mock 进不去
      cards: [
        {
          id: 0,
          title: 'dafsdafasdf',
          money: 1111,
          number: 1111111122223335
        },
        {
          id: 1,
          title: 'dafsdafasdf',
          money: 1111,
          number: 1111111122223335
        }
      ]
    }
  },

  filters: {
    moneyFilter(val) {
      return `$${val.toLocaleString('en-US')}`
    },

    cardNumFilter(val) {
      val = val + ''
      const result = val.replace(/(\d+)(\d{2})$/, '**** **** **** **$2')
      return result
    }
  },

  methods: {
    createColor() {
      const r = Math.floor(Math.random()*255)
      const g = Math.floor(Math.random()*255)
      const b = Math.floor(Math.random()*255)

      return 'rgba('+ r +','+ g +','+ b +',0.8)'
    }
  },
}
</script>

<style scoped lang="less">
.dm-cards {
  .cards-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cards-wrap {
    display: flex;

    .card-item {
      width: 33.333%;
      height: 200px;
      margin-right: 10px;
      padding: 20px;
      border-radius: 20px;
      background: #999;

      // 这些样式先不写了
      .title{}
      .money{}
      .card-number{}
      .logo{}
    }

    .add-card {
      position: relative;

      .add-btn {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -60%, 0);
      }

      .add-card-text {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, 100%, 0);
      }
    }
  }
}
</style>