<template>
  <div class="main-services">
    <block-header block-title="Main Services"></block-header>

    <!-- 可以引入 iconfont -->
    <div class="services-wrap">
      <div class="service-item" v-for="service in services" :key="service.id">
        <el-icon :class="['icon', service.icon]"></el-icon>
        <div class="name">{{service.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BlockHeader from '@/components/block-header'

export default {
  components: {
    BlockHeader
  },

  data() {
    return {
      services: [
        {
          id: 0,
          name: 'abcdefg',
          icon: 'el-icon-eleme'
        },
        {
          id: 1,
          name: 'abcdefg',
          icon: 'el-icon-eleme'
        },
        {
          id: 2,
          name: 'abcdefg',
          icon: 'el-icon-eleme'
        },
      ]
    }
  },
}
</script>

<style scoped lang="less">
.main-services{
  .services-wrap {
    display: flex;
    flex-wrap: wrap;

    .service-item {
      width: 44%;
      height: 120px;
      margin: 8px;
      text-align: center;
      border-radius: 20px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);

      .icon {
        font-size: 46px;
        color: #f00;
        margin-top: 20px;
      }

      .name {
        margin-top: 2px;
      }
    }
  }
}
</style>