// pages/explore/explore.js
const app = getApp()
Page({
  data: {
    markers: [],
    allServices : {},
    longitude: '',
    latitude: ''
  },
  // for the sliding tabs
  // filter by catagory and updating data
  onChange(event) {
    const category = event.detail.title
    const services = this.data.allServices
    if (category != "All"){
      const fifilteredServices = []
      wx.showToast({
        title: `Switched to ${event.detail.title}`,
        icon: 'none'
      });
      // services.forEach(
      //   function (service) {
      //     if (service.category == category) {
      //       fifilteredServices.push(service)
      //     }
      //   }
      // );
      this.setMarker(fifilteredServices)
      this.setData({
        services: fifilteredServices
      })
    }
    else {
      this.setData({
        services: services
      })
      this.setMarker(services)
    }
  },

  calloutTap(e) {
    let id = e.markerId
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

  setMarker(services) {
    let page = this
    page.setData({
      markers: []
    })
    const markers = []
    services.forEach(function (service) {
      markers.push(
        {
          iconPath: "../img/marker.png",
          width: 30,
          height: 30,
          latitude: service.latitude,
          longitude: service.longitude,
          id: service.id,
          callout: {
            content: `${service.name}`,
            display: 'ALWAYS',
            color: 'black',
            bgColor: 'white',
            fontSize: '12',
            borderRadius: '15px',
            padding: '7px',
          }
        }
      )
    });
    page.setData({
      markers: markers
    })
  },

  onLoad: function (options) {
    let page = this
    const url = app.globalData.url
    console.log(url)
    // Get Request
    // Items and services
    wx.request({

      url: url + 'services',
      method: 'GET',
      success(res) {
        const services = res.data
        page.setData({
          services: services,
          allServices: services
        });
        page.setMarker(services);
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
    let searchKeyword = event.detail
    wx.request({
      url: `${app.globalData.url}services/search?item_name=${searchKeyword}`,
      method: 'GET',
      success(res) {
        console.log(res)
        const services = res.data
        page.setMarker(services)
        page.setData({
          services: services
        })
      }
    })
  },
  
})