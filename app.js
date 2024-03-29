//app.js
const Towxml = require('/towxml/main'); 
App({
  onLaunch: function() {
    this.postListRequest();
  },
  towxml: new Towxml(),
  postListRequest() {
    let reqUrl = this.globalData.reqUrl;
    let ghostKey = this.globalData.ghostKey;

    wx.request({
      url: reqUrl + 'posts' + ghostKey + '&limit=all',
      header: {
        'Content-Type': 'application/json'
      },
      success: res => {
        this.globalData.posts = res.data.posts;
        if (this.resPostsReadyCallback) {
          this.resPostsReadyCallback(res)
        }
      }
    })

  },
  globalData: {
    reqUrl: "https://blog.gxuann.cn/ghost/api/v2/content/",
    ghostKey: "?key=f2caa52e237358a9f3faf46c5c",
    posts: null
  }
})