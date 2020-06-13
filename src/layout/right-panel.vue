<template>
  <div class="right-panel">
    <header class="right-panel-header">
      <div class="info-bell-wrap">
        <el-icon class="info-icon el-icon-bell"></el-icon>
        <!-- <div class="tip"></div> -->
      </div>

      <img
        class="user"
        src="http://placehold.it/30x30/"
        alt="avatar"
      >
    </header>

    <div id="balanceChart"></div>

    <dm-transactions :data="transactions"></dm-transactions>
  </div>
</template>

<script>
import DmTransactions from '../container/right-panel/dm-transactions'

export default {
  components: {
    DmTransactions
  },

  data() {
    return {
      transactions: [
        {
          img: 'http://placehold.it/60x60/',
          name: 'dafdsafdasf',
          money: '100'
        }
      ]
    }
  },

  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("balanceChart"));

      let option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },

        series: [
            {
                name: '访问来源',
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: false
                },
                data: [
                    {value: 10, name: '111'},
                    {value: 20, name: '222'},
                    {value: 50, name: '333'}
                ]
            }
        ]
      }

      myChart.setOption(option);
    }
  },

  mounted() {
    this.drawChart();
  }
}
</script>

<style scoped lang="less">
.right-panel {
  .right-panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 60px;

    .info-bell-wrap {
      position: relative;
      .info-icon {
        font-size: 28px;
      }

      &::after {
        content: ' ';
        position: absolute;
        top: 0;
        right: 0;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #f00;
      }
    }
    .user {
      border-radius: 50%;
    }
  }

  #balanceChart {
    width: 600px;
    height: 400px;
  }
}
</style>