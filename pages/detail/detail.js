// pages/detail/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    article: {}
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
        this.setData({ article: data})
        console.log(data)
        this['event_bind_touchstart'] = (event) => {
          console.log(event.target.dataset._el);     // 打印出元素信息
        };
      }
    })

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