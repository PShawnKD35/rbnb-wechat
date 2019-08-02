const app = getApp()
const year = new Date().getFullYear()
const month = new Date().getMonth() + 1
const day = new Date().getDate()
const hour = new Date().getHours() + 1



Page({
  data: {
    today: `${year}-${month}-${day}`,
    todayAndThreeMonths: `${year}-${month + 3}-${day}`,
    startTime: "",
    date: `${year}-${month}-${day}`,
    endTime: "",
    serviceId: 0
  },

  bindStartTimeChange(e) {
    let { value } = e.detail;
    console.log("startTime:", value);
    this.setData({
      startTime: value
    })
  },

  bindEndTimeChange(e) {
    let { value } = e.detail;
    console.log("time:", value);
    this.setData({
      endTime: value
    })
  },

  bindDateChange(e) {
    let { value } = e.detail;
    this.setData({
      date: value
    })
  },

  onLoad: function (options) {
    let page = this
    wx.request({
      url: `${app.globalData.url}users/${app.globalData.userId}`,
      method: "GET",
      success(res) {
        console.log(res.data.service.id)
        page.setData({
          serviceId: res.data.service.id
        })
      }
    })

  },


  submitNewAvaliableTime(e) {
    let start_time = this.data.startTime
    let end_time = this.data.endTime
    let date = this.data.date
    let serviceId = this.data.serviceId
    wx.request({
      url: `${app.globalData.url}services/${this.data.serviceId}/available_services`,
      method: 'POST',
      data: { date: date, start_time: start_time, end_time: end_time },
      success: function(res) {
        console.log(res)
        wx.redirectTo({
          url: `/pages/show/show?id=${serviceId}`,
        })
        wx.showToast({
          title: `${page.data.name} added!`,
          icon: 'none'
        });
      }
    })
  }
})