// components/w-essayrec-item/w-essayrec-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    essayitem: {
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
      const id = this.data.essayitem.id;
      console.log(id);
      wx.navigateTo({
        url: `/pages/detail/content?id=${id}`,
      })
    }
  }
})
