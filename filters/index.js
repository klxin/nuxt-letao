import Vue from 'vue'
Vue.filter('dateFormat', (date) => {
  // 简单的处理时间格式
  return new Date(date).toLocaleDateString()
})
