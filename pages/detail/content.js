// pages/detail/content.js
const app = getApp();
import { getEssayContent } from '../../service/home'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    sizeData: app.globalData,
    id: 0,
    essay: {},
    rate: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id;
    console.log(id);
    this.setData({
      id
    })
    this._getEssayContent()
  },
  _getEssayContent() {
    getEssayContent()
      .then(res => {
        let { essay, rate } = res.data
        console.log(res);
        this.setData({
          essay,
          rate
        })
      })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})