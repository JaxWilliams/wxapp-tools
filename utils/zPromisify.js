/**
 * 使微信的APIPromise化，方便使用
 * 执行时间约0.7ms，测试机型 "2015 early 13.5ch mac" "macOS HighSerria"
 * 调用方法：
 * const zPromisify = require('../../utils/zPromisify.js');
 * const zx = zPromisify();
 * 使用方法：
 * wx.request({}) => zx.request({}).then()
 */

// 无需Promise化的白名单
const promisifyWhiteList = {
  'stopRecord': true,
  'pauseVoice': true,
  'stopVoice': true,
  'pauseBackgroundAudio': true,
  'stopBackgroundAudio': true,
  'showNavigationBarLoading': true,
  'hideNavigationBarLoading': true,
  'createAnimation': true,
  'createContext': true,
  'createCanvasContext': true,
  'createSelectorQuery': true,
  'createAudioContext': true,
  'createInnerAudioContext': true,
  'createVideoContext': true,
  'createCameraContext': true,
  'createMapContext': true,
  'pageScrollTo': true,
  'onBLEConnectionStateChange': true,
  'onBLECharacteristicValueChange': true,
  'hideKeyboard': true,
  'stopPullDownRefresh': true,
}

function promisify() {
  let zPromisify = {};
  Object.keys(wx)
    .filter(key => key.substr(0, 2) !== 'on' && !/\w+Sync$/.test(key) && !promisifyWhiteList[key])
    .map(key => {
      zPromisify[key] = function (options) {
        return new Promise((resolve, reject) => {
          wx[key](Object.assign({}, options, { success: resolve, fail: reject }));
        });
      }
    });
  return zPromisify;
}

module.exports = promisify;
