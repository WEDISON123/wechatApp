// pages/detail/childCnps/w-detail_search/w-detail_search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    sizeData: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hotTopic: '卡塔尔世界杯'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    back() {
      wx.navigateBack({
        delta: 1
      })
    },
    toHome() {
      wx.switchTab({
        url: '/pages/home/home',
      })
    }
  }
})
