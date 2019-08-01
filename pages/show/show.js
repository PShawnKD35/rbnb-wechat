// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {
    bookingDate: '',
    times: ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00","17:00","18:00"],

    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    maxDate: new Date().getTime() + 13410355483,
    formatter(type, value) {
      if (type === 'year') {
        return `${value}`;
      } else if (type === 'month') {
        return `${value}`;
      }
      return value;
    }
  },

  onInput(event) {
    console.log(event.detail)
    this.setData({
      bookingDate: event.detail
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