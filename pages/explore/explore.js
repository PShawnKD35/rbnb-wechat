// pages/explore/explore.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    // Get User infor
    this.setData({ userId: getApp().globalData.userId })
    // Get Request
    // Items and services
    wx.request({

      url: "http://localhost:3000/api/v1/services",
      method: 'GET',
      success(res) {
        // get from json key (services:)
        const services = res.data
        console.log(res.data)
        page.setData({
          services: services,

        });
        wx.hideToast();
      }
    });
    // current location fuction
    wx.getLocation({
      type: 'wgs84', // **1
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        that.setData({ latitude, longitude, speed, accuracy })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },
  goToService: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  }
})