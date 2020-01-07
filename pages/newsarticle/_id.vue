<template>
  <div class="article">
    <div class="article-title">
      {{ article.title }}
    </div>
    <div class="article-info">
      <span>发表时间：{{ article.add_time | dateFormat }}</span>
      <span>点击次数：{{ article.click }}次</span>
    </div>
    <div class="article-content">
      <!-- eslint-disable -->
      <div v-html="article.content" class="content"> </div>
    </div>
  </div>
</template>

<script>
import { getNewsArticle } from '~/utils/fetch.js'
export default {
  async asyncData ({ params, handleErr }) {
    const data = await getNewsArticle(params.id)
    const obj = handleErr(data, [{}])
    return {
      article: obj.message[0],
      errTitle: obj.errTitle
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  padding: 5px 10px 0;
  &-title {
    color: #1989fa;
    font-size: 16px;
    text-align: center;
  }
  &-info {
    padding-bottom: 5px;
    display: flex;
    justify-content: space-between;
    color: #1989fa;
    border-bottom: 1px solid #ccc;
  }
  &-content {
    /deep/ p {
      text-indent: 2em;
    }
  }
}
</style>
