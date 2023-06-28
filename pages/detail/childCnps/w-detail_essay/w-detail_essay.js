// pages/detail/childCnps/w-detail_essay/w-detail_essay.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    essay: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    number1: Math.floor(Math.random() * (10000 - 1000 + 1)) + 1000,
    number2: Math.floor(Math.random() * (1000 - 100 + 1)) + 100,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
