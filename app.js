// app.js
App({
  onLaunch() {
    wx.getSystemInfo({
      success:res => {
        // console.log(res);
        // 获得胶囊的尺寸及位置
        let menuButtonObject =
          wx.getMenuButtonBoundingClientRect()
        // console.log(menuButtonObject);
        // 获取状态栏高度
        let statusBarHeight = res.statusBarHeight
        // console.log(statusBarHeight);
        // 计算navigationBar高度
        let navHeight = statusBarHeight
          + menuButtonObject.height
          + (menuButtonObject.top - statusBarHeight) * 2;
        // console.log(navHeight);
        let navTop = menuButtonObject.top;
        let windowHeight = res.windowHeight;
        // console.log(windowHeight);
        Object.assign(this.globalData,{
          navHeight,
          navTop,
          menuButtonObject,
          windowHeight,
          statusBarHeight
        })
      }
    })
  },
  globalData: {
  }
})
