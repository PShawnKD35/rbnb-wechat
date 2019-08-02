// pages/addservice/addservice.js
const app = getApp()
Page({
  data: {
    name: "",
    description: "",
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  itemName(e) {
    this.setData({
      name: e.detail.value
    })
  },

  itemDescription(e) {
    this.setData({
      description: e.detail.value
    })
  },

  submitNewItem(e) {
    console.log(this.data.name)
    let newItem = {
      name: this.data.name,
      description: this.data.description,
    }

    wx.request({
      url: `${app.globalData.url}users/${app.globalData.userId}/services`,
      method: 'POST',
      data: newItem,
      success: function (res) {
        wx.navigateTo({
          url: `/pages/explore/explore`
        })
        wx.showToast({
          title: `this.data.name added!`,
          icon: 'none'
        });
      }
    })


  }
})