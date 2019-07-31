// pages/profile/profile.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    userInfo:[]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {


  },
  onShow: function () {

  },
  onLoad: function () {
    console.log(app.globalData)
    var that = this;
    wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo: res.userInfo
        })
        console.log(that.userInfo)
      }
    })

  },

})