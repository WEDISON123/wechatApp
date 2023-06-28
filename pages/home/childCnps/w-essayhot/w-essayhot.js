// pages/home/childCnps/w-essayhot/w-essayhot.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      console.log(this.data.essay);
    }
  }
})
