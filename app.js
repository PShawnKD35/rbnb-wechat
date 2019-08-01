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
            this.globalData.userId = res.data.userId
            console.log("got userId from backend")
            console.log("gloabl data userId: " + this.globalData.userId)
          }
        })
      }
    })
  },

  globalData: {
    userId : '',
    userInfo : null,
    url: 'http://localhost:3000/api/v1/'
    // url: 'https://dragonbnb.herokuapp.com/api/v1/'
  }
})