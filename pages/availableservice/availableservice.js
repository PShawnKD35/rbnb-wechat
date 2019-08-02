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

  onLoad: function(e) {
    let userId = app.globalData.userId
    const page = this
    page.setData({ userId: userId })
    console.log(userId)
    // wx.request({
    //   url: `${app.globalData.url}users/${app.globalData.userId}`,
    //   method: 'GET',
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  },

  submitNewAvaliableTime(e) {
    let start_time = `${this.data.date} ${this.data.startTime}:00+08:00`
    let end_time = `${this.data.date} ${this.data.endTime}:00+08:00`
    console.log(start_time)
    console.log(end_time)
  }

  // wx.request({
  //   let start_time = `${date} ${startTime}:00+08:00`
  //   let end_time = `${date} ${endTime}:00+08:00`
  //   url: `${app.globalData.url}`,
  //   method: 'POST',
  //   data: {start_time: start_time, end_time: end_time}
  // })

})