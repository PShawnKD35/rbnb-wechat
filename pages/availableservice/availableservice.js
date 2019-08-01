// pages/availableservice/availableservice.js
Page({

  /**
   * Page initial data
   */
  data: {
    minHour: 10,
    maxHour: 20,
    minDate: new Date().getTime(),
    maxDate: new Date(2019, 10, 1).getTime(),
    currentDate: new Date().getTime()
  },
  onChange(event) {
    this.setData({
      currentDate: event.detail.value
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

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
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

})