<template>
  <div class="dm-savings">
    <block-header block-title="current"></block-header>

    <div class="chart-wrap">
      <div id="chart" class="chart"></div>

      <line-item :data="currentData" class="info"></line-item>
    </div>
  </div>
</template>

<script>
import BlockHeader from '@/components/block-header'
import LineItem from '@/components/line-item'

export default {
  components: {
    LineItem,
    BlockHeader
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
  },

  methods: {
    drawChart() {
      let myChart = this.$echarts.init(document.getElementById("chart"));

      let option = {
        // title: {
        //   text: "ECharts"
        // },
        tooltip: {},
        xAxis: {
        type: 'category',
        data: ['10', '20', '30', '40', '50', '60', '70']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      };

      myChart.setOption(option);
    }
  },
  mounted() {
    this.drawChart();
  }
}
</script>

<style scoped lang="less">
.dm-savings {
  .chart-wrap {
    display: flex;
  }

  .chart {
    flex: 0 0 500px;
    height: 400px;
  }

  .info {
    flex: 1;
    margin-top: 40px;
  }
}
</style>