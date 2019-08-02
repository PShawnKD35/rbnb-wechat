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
      user_id: app.globalData.userId,
    }
// fill in when route for item creation is done
    // submitNewItem(e){
    //   console.log(this.data.name)
    //   let newItem = {
    //     name: this.data.name,
    //     description: this.data.description,
    //     user_id: app.globalData.userId,
    //   }

    //   wx.request({
    //     url: `${app.globalData.url}users/${app.globalData.userId}/services`,
    //     method: 'POST',
    //     data: newItem,
    //     success: function (res) {
    //       wx.navigateTo({
    //         url: "additem",
    //       })
    //       wx.showToast({
    //         title: `this.data.name added!`,
    //         icon: 'none'
    //       });
    //     }
    //   })

    // },
  }
})