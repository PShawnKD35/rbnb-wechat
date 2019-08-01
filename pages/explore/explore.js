// pages/explore/explore.js
Page({
  data: {
    markers: [],
  },
  // for the sliding tabs
  onChange(event) {
    console.log(event.detail.title)
    wx.showToast({
      title: `切换到标签 ${event.detail.title}`,
      icon: 'none'
    });
  },

  onLoad: function (options) {
    let page = this
    // Get Request
    // Items and services
    wx.request({
      url: "http://dragonbnb.herokuapp.com/api/v1/services",
      method: 'GET',
      success(res) {
        // get from json key (services:)
        const services = res.data
        const markers = []
        page.setData({
          services: services,
        });
        services.forEach(function(service) {
          markers.push(
            {iconPath: "../img/marker.png",
              width: 30,
              height: 30,
              latitude: service.latitude,
              longitude: service.longitude,
              id: service.id
            }
          )
        });
        page.setData({
          markers: markers
        })


        wx.hideToast();
      }
    });
    // current location fuction
    wx.getLocation({
      type: 'wgs84', // **1
      success: function (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        that.setData({ latitude, longitude, speed, accuracy })
      //markers
      }
    })
  },
  
  goToService: function (event) {
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

// not fetching data after search
  onSearch: function (event) {
    let page = this
    let searchKeyword = console.log(event.detail)
    wx.request({
      url: `https://dragonbnb.herokuapp.com/api/v1/services/search?item_name=${searchKeyword}`,
      method: 'GET',
      success(res){
        console.log(res)
        const services = res.data
        page.setData({
          services: services
        })
      }
    })
  }
})