function getDateString(date = new Date) {
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    currentDate: new Date().getTime()
  }
}

const { currentDate, year, month, day, hour, minute } = getDateString()

Page({
  data: {
    value6: [year, month, day, hour, minute, '1'],
    value7: [hour, minute, '1']
  },
  onChange(e) {
    console.log(e)
    const { key, values } = e.detail

  },
  setValue(values, key) {
    this.setData({
      [`value${key}`]: values.value,
      [`displayValue${key}`]: values.displayValue.join(' '),
    })
  },
  onValueChange(e) {
    const { index } = e.currentTarget.dataset
    this.setValue(e.detail, index)
    console.log(`onValueChange${index}`, e.detail)
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