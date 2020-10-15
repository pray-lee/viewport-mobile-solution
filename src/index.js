import * as dd from 'dingtalk-jsapi'
console.log(dd)
dd.ready(() => {
    const btn = document.querySelector('#chooseImage')
    btn.addEventListener('click', () => {
        dd.device.notification.alert({
            message: '测试弹框',
            buttonName: '收到'
        })
    })
})
