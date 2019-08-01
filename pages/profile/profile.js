
const app = getApp()
Page({
  data: {
    time: "",
    date: "",
    userInfo: {},
    hasUserInfo: false,
    userId: '',
    hasRegistered: false,
    user: ""
  },

  onLoad: function () {
    let userId = app.globalData.userId
    const page = this
    page.setData({ userId: userId })
    wx.request({
      url: `${app.globalData.url}users/${userId}`,
      method: 'GET',
      success(res) {
        let user = res.data
        page.setData({ user: user })
        if (res.data.email != null) {
          page.setData({ hasRegistered: true })
        }
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }


  },

  bindTimeChange(e) {
    let { value } = e.detail;
    console.log("time:", value);
    this.setData({
      time: value
    })
  },

  bindDateChange(e) {
    let { value } = e.detail;
    console.log("date:", value);
    this.setData({
      date: value
    })
  },

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    // wx.request({
    //   url: `${app.globalData.url}services`,
    // })
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      userId: app.globalData.userId,
      userInfo: app.globalData.userInfo
    })
  },

  formSubmit: function (e) {
    let id = this.data.userId
    let name = e.detail.value.name
    let description = e.detail.value.description
    let email = e.detail.value.email
    let user = { name: name, description: description, email: email }
    wx.request({
      url: `${app.globalData.url}users/${id}`,
      method: 'PUT',
      data: user,
      success: function (res) {
        console.log(res)
        wx.reLaunch({
          url: '/pages/profile/profile',
        })
      }
    })
  },


})




// // pages/profile/profile.js
// const app = getApp()
// Page({

//   /**
//    * Page initial data
//    */
//   data: {
//     userInfo:[]
//   },

//   /**
//    * Lifecycle function--Called when page load
//    */
//   onLoad: function (options) {


//   },
//   onShow: function () {

//   },
//   onLoad: function () {
//     console.log(app.globalData)
//     var that = this;
//     wx.getUserInfo({
//       success: function(res) {
//         that.setData({
//           userInfo: res.userInfo
//         })
//         console.log(that.userInfo)
//       }
//     })

//   },

// })