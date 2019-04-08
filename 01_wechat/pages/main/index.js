var app = getApp();
Page({
  data: {
    offline: false,
    remind: '加载中',
    cores: [
      [
        { id: 'kb', name: '检测报告', disabled: false, teacher_disabled: false, offline_disabled: false, navpath: '../jcbg/index' },
        { id: 'cj', name: '报价单', disabled: false, teacher_disabled: true, offline_disabled: false, navpath: '../bjdcx/index' },
        { id: 'ks', name: '订货单', disabled: false, teacher_disabled: false, offline_disabled: false, navpath: '../dhdcl/index'},
        { id: 'jy', name: '历史订单', disabled: false, teacher_disabled: false, offline_disabled: false,navpath:'../lsddcx/index' },
        { id: 'jy', name: '历史配送', disabled: false, teacher_disabled: false, offline_disabled: false, navpath: '../lspsdcx/index' },
        { id: 'bx', name: '口令修改', disabled: false, teacher_disabled: false, offline_disabled: true,navpath:'../klsz/index' }
      ]
    ],
    user: {},
    disabledItemTap: false //点击了不可用的页面
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: 'We重邮',
      desc: '碎片化、一站式、一体化校园移动门户',
      path: '/pages/index/index'
    };
  },
  //下拉更新
  onPullDownRefresh: function () {
    
  },
  onShow: function () {
    var _this = this;
    
  },
  onLoad: function () {
   
  },
  goNav:function(event){
    console.log(event)
    var item = event.currentTarget.dataset.bind;
    console.log(item)
    wx.navigateTo({
      url: item.navpath
    })
  }
 
});