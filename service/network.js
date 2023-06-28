// 所有请求的封装
import { baseURL, timeout } from './config'
function request(options) {
  wx.showLoading({
    title: '数据加载中...',
  })
  //
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout,
      data: options.data || {},
      success: function(res) {
        resolve(res.data)
      },
      fail: function(err) {
        reject(err)
      },
      complete: function() {
        wx.hideLoading()
      }
    })
  })
}

export default request