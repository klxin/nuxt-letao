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
      <div v-html="article.content" class="content"> </div>
    </div>
  </div>
</template>

<script>
import { getNewsArticle } from '~/utils/fetch.js'
export default {
  async asyncData ({ params }) {
    const data = await getNewsArticle(params.id)
    const article = data.name !== 'Error' ? data.message : []
    const errTitle = data.name !== 'Error' ? null : data.message
    return {
      article: article[0],
      errTitle
    }
  },
  mounted () {
    // 如果出现错误提示用户
    this.errTitle && this.$toast(this.errTitle)
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
