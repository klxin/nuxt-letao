import Vue from 'vue'
// 全局混入
Vue.mixin({
  mounted () {
    // 如果出现错误提示用户
    this.errTitle && this.$toast(this.errTitle)
  }
})
