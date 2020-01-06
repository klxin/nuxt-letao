<template>
  <div class="home">
    <!-- eslint-disable -->
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import axios from 'axios'
import { getLunbo } from '../utils/fetch.js'
export default {
  async asyncData () {
    // const { data } = await axios.get(`http://www.liulongbin.top:3005/api/getlunbo`)
    const data = await getLunbo()
    return {
      images: data.message
    }
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
</style>
