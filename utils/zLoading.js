/**
 * 简化wx.showLoading
 * @param {String} title 
 * @param {Object} mask 
 */
function showLoading(title = '', mask = true) {
  return new Promise((resolve, reject) => {
    wx.showLoading({
      title: title,
      mask: true,
      success: resolve,
      fail: reject,
    });
  });
}

module.exports = showLoading;
