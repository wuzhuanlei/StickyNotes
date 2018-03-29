//index.js
//获取应用实例
var arrayList;
const app = getApp()

Page({
  data: {
    motto: 'Hello Julie下午好！',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    src: '../resources/pin.jpg', 
    src1: '../resources/pin1.jpg',
    src2: '../resources/pin2.jpg',
    src3: '../resources/pin3.jpg',
    src4: '../resources/pin4.jpg',
    src5: '../resources/pin5.jpg',
    src6: '../resources/pin6.jpg',
    src7: '../resources/pin7.jpg',
    src8: '../resources/pin8.jpg',
    src9: '../resources/pin9.jpg',
    src_add: '../resources/add.png',
    src_delete:'../resources/delete.png',
    date: new Date().toLocaleDateString(),
    arrayList: [],
    inputValue: '',
    displaystr:'none'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  },
  bindKeyInput: function (e) {
    this.setData({
      inputValue: e.detail.value
    });
  },
  add: function () {
    //要增加的数组
    var newarray = [{
      message: this.data.inputValue
    }];
    if (this.data.inputValue!=''){
      this.setData({
        'displaystr':'flex'
      })
    }
    this.setData({
      'arrayList': this.data.arrayList.concat(newarray)
    });
  },

  //删除
  remove: function (e) {
    var dataset = e.target.dataset;
    var Index = dataset.index; //拿到是第几个数组
    this.data.arrayList.splice(Index, 1);
    this.setData({
      arrayList: this.data.arrayList
    });
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        arrayList:[]
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
