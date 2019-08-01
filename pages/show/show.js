// pages/show/show.js
const app = getApp()
Page({

  /**
   * Page initial data
   */
  data: {
    bookingDate: ''
  },


  bindDateChange(e) {
    let { value } = e.detail;
    console.log("date:", value);
    this.setData({
      bookingDate: value
    })
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    this.setData({ UserInfo: getApp().globalData.userInfo })
    wx.request({
      url: `${app.globalData.url}services/${options.id}`,
      method: 'GET',
      success(res) {
        page.setData({
        service: res.data.service,
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
  goToConfirm: function () {
    wx.navigateTo({
      url: '/pages/confirmation/confirmation',
    })
  }
})