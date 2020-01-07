<template>
  <div class="layout">
    <!-- 顶部导航栏 -->
    <van-nav-bar
      @click-left="$router.go(-1)"
      :left-arrow="$route.path !== '/'"
      :left-text="$route.path !== '/' ? '返回': ''"
      title="移动电商·乐淘"
    />
    <div class="container">
      <nuxt />
    </div>
    <!-- 底部tabbar -->
    <!-- eslint-disable -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="medal-o">会员</van-tabbar-item>
      <van-tabbar-item icon="cart-circle-o" info="3">购物车</van-tabbar-item>
      <van-tabbar-item icon="manager-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang="less">
.layout {
  .container {
    position: absolute;
    top: 40px;
    bottom: 50px;
    width: 100%;
    overflow-y: scroll;
  }
  .van-nav-bar {
    background-color: #1989fa;
    height: 40px;
    line-height: 40px;
  }
  .van-icon, .van-nav-bar__text{
    color: #fff;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
