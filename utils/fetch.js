import axios from 'axios'
// 配置基础域名
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
// apis
const getLunboUrl = `/api/getlunbo`

// 获取轮播图列表
export const getLunbo = () => {
  return axios.get(getLunboUrl).then(res => res.data)
}
