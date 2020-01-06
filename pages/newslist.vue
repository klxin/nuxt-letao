<template>
  <div class="newslist">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-card v-for="(item, index) in list" :key="index" :title="item.list" :thumb="item.img_url">
        <div slot="num">
          点击: {{ item.click }}次
        </div>
        <div slot="price">
          发表时间: {{ item.add_time| dateFormat }}
        </div>
      </van-card>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getNewsList } from '../utils/fetch.js'
export default {
  data () {
    return {
      count: 0,
      isLoading: false
    }
  },
  async asyncData () {
    const data = await getNewsList().catch(err => err)
    const list = data.name !== 'Error' ? data.message : []
    const errTitle = data.name !== 'Error' ? null : data.message
    return {
      list,
      errTitle
    }
  },
  mounted () {
    if (this.errTitle) {
      this.$toast(this.errTitle)
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
