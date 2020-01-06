<template>
  <div class="home">
    <!-- eslint-disable -->
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.img" />
      </van-swipe-item>
    </van-swipe>
    <!-- 九宫格区域 -->
    <van-grid :border="false" :gutter="10" :column-num="3">
      <van-grid-item to="/newslist">
        <img src="../assets/images/menu1.png" alt="">
        <p>新闻资讯</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu2.png" alt="">
        <p>图片分享</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu3.png" alt="">
        <p>商品购买</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu4.png" alt="">
        <p>留言反馈</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu5.png" alt="">
        <p>视频专区</p>
      </van-grid-item>
      <van-grid-item>
        <img src="../assets/images/menu6.png" alt="">
        <p>留言我们</p>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
// import axios from 'axios'
import { getLunbo } from '../utils/fetch.js'
export default {
  async asyncData () {
    // const { data } = await axios.get(`http://www.liulongbin.top:3005/api/getlunbo`)
    const data = await getLunbo().catch(err => err)
    const images = data.name !== 'Error' ? data.message : []
    const errTitle = data.name !== 'Error' ? null : data.message
    return {
      images,
      errTitle
    }
  },
  mounted () {
    /* eslint-disable */
    if (this.errTitle) this.$toast(this.errTitle)
  }
}
</script>

<style lang="less" scoped>
.home {
  position: absolute;
  top: 40px;
  bottom: 40px;
  width: 100%;
  .van-swipe {
    height: 200px;
    img {
      height: 100%;
    }
  }
}
/deep/ .van-grid-item {
  p {
    margin-top: 10px;
    font-size: 14px;
  }
  img {
    width: 80%;
  }
}
</style>
