function remSize() {
    //获取屏幕宽度750
    var deviceWidth=document.documentElement.clientWidth || window.innerWidth
    // 手机屏幕最小320
    if (deviceWidth >= 750) {
        deviceWidth = 750
    }
    if (deviceWidth <= 320) {
        deviceWidth = 320
    }
    // 设置根目录的字体大小
    document.documentElement.style.fontSize = (deviceWidth/7.5)+'px'
    document.body.style.fontSize = 0.16+'rem'
}
remSize()
// 根据浏览器变化去调用函数
window.onresize = function() {
    remSize()
}