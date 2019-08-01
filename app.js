//app.js
App({
  onLaunch: function () {
    // post request to API
    // should be posting to User.new
    // data: { userID }
    const host = 'http://localhost:3000/'
    wx.login({
      success: res => {
        wx.request({
          url: host + 'login',
          method: 'post',
          data: {
            code: res.code
          },
          success: (res) => {
            this.globalData.userId = res.data.userId
            console.log(res.data.userId)
          }
        })
      }
    })
  },
  globalData: {
    userInfo: null
  }
})