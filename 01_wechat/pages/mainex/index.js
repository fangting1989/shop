// pages/main/index.js
// pages/index/index.js
const MENUS = [{
  name: '历史上的今天',
  url: '/pages/today-in-history/index',
  style: 'background-color: #E8D3A9;'
},
{
  name: '周公解梦',
  url: '/pages/dream/index',
  style: 'background-color: #D3D5B0;'
},
{
  name: '更多功能正在开发中',
  url: '',
  style: 'background-color: #9DC9AC;'
}
];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menus: MENUS
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})