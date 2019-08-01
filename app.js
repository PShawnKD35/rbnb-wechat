//app.js
App({
  onLaunch: function () {
    const host = this.globalData.url
    wx.login({
      success: res => {
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          success: (res) => {
            console.log(res.data.userId)
            this.globalData.openid = res.data.userId
          }
        })
      }
    })
  },

  globalData: {
    userInfo : null,
    url: 'http://localhost:3000/api/v1/'
    // url: 'https://dragonbnb.herokuapp.com/api/v1/'
  }
})