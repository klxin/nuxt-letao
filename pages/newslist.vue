<template>
  <div class="newslist">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card v-for="(item, index) in 50" :key="index" title="商品标题" thumb="https://img.yzcdn.cn/vant/t-thirt.jpg">
        <div slot="num">
          点击: 3次
        </div>
        <div slot="price">
          发表时间: 2021-10-23
        </div>
      </van-card>
    </van-pull-refresh>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
        this.count++
      }, 500)
    }
  }
}
</script>

<style lang="less" scoped>
.newslist {
  position: absolute;
  top: 40px;
  bottom: 50px;
  width: 100%;
  .van-pull-refresh {
    position: relative;
    height: 100%;
    overflow-y: scroll;
  }
  .van-card__thumb {
    height: 40px;
    width: 40px;
  }
  .van-card__content {
    min-height: 40px;
  }
  .van-card {
    margin-top: 0;
    background-color: #fff;
    border-bottom: 1px solid #ccc;
  }
}
</style>
