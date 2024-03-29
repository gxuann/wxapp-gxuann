// pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    article: {},
    resTitle: '',
    backTopValue: 'none'  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = this.data.id;
    this.setData({id: options.id})
    this.getArticle();
  },
  getArticle() {
    let reqUrl = app.globalData.reqUrl;
    let ghostKey = app.globalData.ghostKey;
    let id = this.data.id;
    let page = this.data.page;

    wx.request({
      url: reqUrl + 'posts/'+ id + ghostKey,
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        let resTitle = res.data.posts[0].title;
        let rs = res.data.posts[0].html;
        let data = app.towxml.toJson(rs, 'html');
        this.setData({
          resTitle: resTitle, 
          article: data
          })
        console.log(data)
      }
    })

  },

  backToTop(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 300
    })
  },

  onPageScroll: function(event) {

    let scrollTop = event.scrollTop;
    if(scrollTop>500){
      this.setData({ backTopValue: 'block' });
    }
    let backTopValue = scrollTop > 500 ? 'block':'none';
    this.setData({ backTopValue: backTopValue});
    console.log(backTopValue)
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