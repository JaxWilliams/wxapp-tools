//index.js
//获取应用实例
const zToast = require('../../utils/zToast.js');
const zPromisify = require('../../utils/zPromisify.js');
const zx = zPromisify();

Page({
  onLoad() {
    console.log(zx);
  }
});
