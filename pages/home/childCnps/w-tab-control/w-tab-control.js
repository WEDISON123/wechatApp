// pages/home/childCnps/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    essay:{
      type: Object,
      value: {}
    },
    essay2:{
      type: Object,
      value: {}
    },
    tab: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tab: 0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    selectTab(e) {
        // console.log(e);
        let tab = e.currentTarget.dataset.tab;
        this.setData({
          tab
        })
        const data = {tab: this.data.tab}
        this.triggerEvent("tabclick", data, {})
    },
  }
})
