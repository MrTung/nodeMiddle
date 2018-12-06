var Urls = require('../server/formatURL.js');

/*
 * 执行静态化方法
 * */
exports.login = function (req, res) {
    //TODO 这里可以调用后端api，拼接数据
    console.log("跳转到登录界面");
    res.render('login', {
        title: 'Hey',
        message: 'Hello there',
        date: new Date(),
        commonUrls: Urls
    })
};
