var Urls = require('../api/baseservice.js');

var axios = require('axios');

axios.defaults.withCredentials = true;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';  //此处是增加的代码，设置请求头的类型

/*
 * 执行静态化方法
 * */
exports.login = function (req, res) {
  //TODO 这里可以调用后端api，拼接数据

  req.session.token = '121212121212';

  console.log("跳转到登录界面");
  res.render('login', {
    title: 'Hey',
    message: 'Hello there',
    date: new Date(),
    commonUrls: Urls
  })

  // res.redirect(302, 'http://www.baidu.com');

};


/*
 * 执行静态化方法
 * */
exports.loginout = function (req, res) {
  //   console.log(req.session[ACCESS_TOKEN]);
  res.send('删除页面' + req.session.token);
};
