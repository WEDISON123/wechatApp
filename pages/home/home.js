// pages/home/home.js
const app = getApp();
import { getEssayData } from '../../service/home'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    tab : 0,
    sizeData: app.globalData,
    essay: [],
    essay2: []
  },
  onLoad() {
    // console.log(app.globalData);
    this._getEssayData()
  },
  _getEssayData() {
    getEssayData()
      .then(res => {
        let { essay, essay2} = res.data
        this.setData({
          essay,
          essay2
        }) 
      })
  },
  tabclick(e) { 
    let tab = e.detail.tab;
    this.setData({
      tab
    })
    // console.log(e);
  },
  doTabChange(e) {
    let tab = e.detail.current
    this.setData({
      tab
    })
  }
})