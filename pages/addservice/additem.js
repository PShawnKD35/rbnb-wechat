// pages/addservice/addservice.js
const app = getApp()
Page({
  data: {
    name: "",
    description: "",
    serviceId: '',
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    let page = this
    wx.request({
      url: `${app.globalData.url}users/${app.globalData.userId}`,
      method: "GET",
      success(res){
        console.log(res.data.service.id)
        page.setData({
          serviceId : res.data.service.id
        })
      }
    })

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
    let page = this
    wx.request({
      url: `${app.globalData.url}services/${this.data.serviceId}/items`,
      method: 'POST',
      data: {name: page.data.name, description: page.data.description},
      
      success: function (res) {
        console.log(res)
        wx.navigateTo({
          url: `/pages/explore/explore`
        })
        wx.showToast({
          title: `${this.data.name} added!`,
          icon: 'none'
        });
      }
    })


  }
})