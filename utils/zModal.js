/**
 * 简化wx.showModal
 * @param {String} title 
 * @param {String} content 
 * @param {Boolean} showCancel 
 * @param {Object} options 
 */
function showModal(title = '', content = '', showCancel = true, options = {}) {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: content,
      showCancel: showCancel,
      cancelText: options.cancelText,
      cancelColor: options.cancelColor,
      confirmText: options.confirmText,
      confirmColor: options.confirmColor,
      success: resolve,
      fail: reject,
    });
  });
}

module.exports = showModal;
