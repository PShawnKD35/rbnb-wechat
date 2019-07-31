// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    times: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"],

    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    }
  },

  onInput(event) {
    this.setData({
      currentDate: event.detail
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    this.setData({ UserInfo: getApp().globalData.userInfo })
    wx.request({
      url: `http://dragonbnb.herokuapp.com/api/v1/services/${options.id}`,
      method: 'GET',
      success(res) {
        console.log(res)
        page.setData({
        story: res.data.service,
        item: res.data.service.items[0]});
        wx.hideToast();
      }
    });
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
  goToConfirm: function () {
    wx.navigateTo({
      url: '/pages/confirmation/confirmation',
    })
  }
})