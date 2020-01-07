export default function (context) {
  // console.log(context)
  context.handleErr = function (data, defaultValue = []) {
    // 参数1是请求返回的数据 参数2是异常时默认数据
    const message = data.name !== 'Error' ? data.message : defaultValue
    const errTitle = data.name !== 'Error' ? null : data.message
    return {
      message,
      errTitle
    }
  }
}
