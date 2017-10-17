//公共头部资源
const template2 = require('./common/header-common.art')
const title = '首页'
document.getElementsByTagName('head')[0].innerHTML = template2({ title: title })