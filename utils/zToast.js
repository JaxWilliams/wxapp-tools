/**
 * 简化wx.toast用法，增加少量图标
 */

const iconPathBase = '/images/';

/**
 * 提示
 * @param {String} image
 * @param {String} content 
 * @param {Object} options 
 * @returns {Promise}
 */
function toast(image, content, options) {
  return new Promise((resolve, reject) => {
    wx.showToast({
      title: content,
      image: image,
      duration: options.duration || 1500,
      mask: !!options.mask,
      success: resolve,
      fail: reject,
    });
  });
}


/**
 * 成功提示
 * @param {String} content
 * @param {Object} options type - 1: 成功 2: 圆边框成功 3: 圆边框实心成功
 */
function success(content, options = { type: 1 }) {
  return toast(getSuccessIcon(options.type), content, options);
}

/**
 * 失败提示
 * @param {String} content 
 * @param {Object} options type - 1: 失败 2: 圆边框失败 3: 圆边框实心失败
 */
function fail(content, options = { type: 1 }) {
  return toast(getFailIcon(options.type), content, options);
}

/**
 * 警告提示
 * @param {String} content 
 * @param {Object} options type - 1: 警告 2: 警告实心
 */
function warn(content, options = { type: 1 }) {
  return toast(getWarnIcon(options.type), content, options);
}

/**
 * 通知提示
 * @param {String} content 
 * @param {Object} options type - 1:通知  2: 通知实心
 */
function info(content, options = { type: 1 }) {
  return toast(getInfoIcon(options.type), content, options);
}

/**
 * 等待提示
 * @param {String} content 
 * @param {Object} options type - 1:时钟  2: 时钟实心 3: 
 */
function wait(content, options = { type: 1 }) {
  return toast(getTimeIcon(options.type), content, options);
}

/**
 * 刷新提示
 */
function refresh(content, options = { type: 1 }) {
  return toast(`${iconPathBase}refresh.png`, content, options);
}

/**
 * 成功提示图标
 */
function getSuccessIcon(type) {
  switch (type) {
    case 1:
      return `${iconPathBase}check.png`;
    case 2:
      return `${iconPathBase}round_check.png`;
    case 3:
      return `${iconPathBase}round_check_fill.png`;
    default:
      return `${iconPathBase}check.png`;
  }
}

/**
 * 失败提示图标
 */
function getFailIcon(type) {
  switch (type) {
    case 1:
      return `${iconPathBase}close.png`;
    case 2:
      return `${iconPathBase}round_close.png`;
    case 3:
      return `${iconPathBase}round_close_fill.png`;
    default:
      return `${iconPathBase}close.png`;
  }
}

/**
 * 信息图标
 */
function getInfoIcon(type) {
  switch (type) {
    case 1:
      return `${iconPathBase}info.png`;
    case 2:
      return `${iconPathBase}info_fill.png`;
    default:
      return `${iconPathBase}info.png`;
  }
}

/**
 * 警告图标
 */
function getWarnIcon(type) {
  switch (type) {
    case 1:
      return `${iconPathBase}warn.png`;
    case 2:
      return `${iconPathBase}warn_fill.png`;
    default:
      return `${iconPathBase}warn.png`;
  }
}

/**
 * 时间图标
 */
function getTimeIcon(type) {
  switch (type) {
    case 1:
      return `${iconPathBase}time.png`;
    case 2:
      return `${iconPathBase}time_fill.png`;
    default:
      return `${iconPathBase}time.png`;
  }
}


module.exports = {
  success,
  fail,
  warn,
  info,
  wait,
  refresh,
}
