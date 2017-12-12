//index.js
//获取应用实例
const zToast = require('../../utils/zToast.js');

Page({
  onLoad() {
    zToast.info('成功', { type: 2 }).then(() => {
      console.log('成功');
    }).catch(() => {
      console.log('失败');
    });
  }
});
