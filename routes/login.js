var Urls = require('../api/baseservice.js');

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
};


/*
 * 执行静态化方法
 * */
exports.loginout = function (req, res) {
  //   console.log(req.session[ACCESS_TOKEN]);
  res.send('删除页面' + req.session.token);
};
