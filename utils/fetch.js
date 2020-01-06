import axios from 'axios'
// 配置基础域名
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
// apis
const getLunboUrl = `/api/getlunbo`
const getNewsListUrl = `/api/getnewslist`
// 获取轮播图列表
export const getLunbo = () => {
  return axios.get(getLunboUrl).then(res => res.data).catch(err => err)
}
// 获取新闻列表
export const getNewsList = () => {
  return axios.get(getNewsListUrl).then(res => res.data).catch(err => err)
}
