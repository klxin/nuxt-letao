<template>
  <div class="container">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="移动电商·乐淘" />
    <nuxt />
  </div>
</template>

<style scoped lang="less">
.container {
  .van-nav-bar {
    background-color: #1989fa;
    height: 40px;
    line-height: 40px;
  }
  .van-nav-bar__title {
    color: #fff;
  }
}
</style>
