const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    userId: '',
    hasRegistered: false,
    name: "",
    description: "",
    email: "",
    user: {}
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: `/pages/addservice/addservice`
    })
  },
  onLoad: function () {
    let userId = app.globalData.userId
    const page = this
    page.setData({ userId: userId })
    wx.request({
      url: `${app.globalData.url}users/${userId}`,
      method: 'GET',
      success(res) {
        console.log(res.data.user)
        let user = res.data.user
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

  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      userId: app.globalData.userId,
      userInfo: app.globalData.userInfo
    })
  },

  userName(e) {
    this.setData({
      name: e.detail.value
    })
  },

  userDescription(e) {
    this.setData({
      description: e.detail.value
    })
  },

  userEmail(e) {
    this.setData({
      email: e.detail.value
    })
  },

  bindSubmit: function (e) {
    let id = this.data.userId
    let name = this.data.name
    let description = this.data.description
    let email = this.data.email
    let user = { name: name, description: description, email: email }
    console.log(user)
    this.setData({user: user})
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