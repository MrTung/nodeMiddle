var Urls = require('../api/baseservice.js');

/*
 * 显示form表单
 * */
exports.form = function (req, res) {
  //TODO 这里可以调用后端api，拼接数据
  res.render('form', {
    title: 'Hey',
    message: 'Hello there',
    date: new Date(),
    commonUrls: Urls
  })
};


/*
 * 保存缓存数据
 * */
exports.save = function (req, res) {
  //TODO 这里可以调用后端api，拼接数据
  req.session.userName = req.body.userName;
  console.log("数据缓存成功-----" + req.session.userName);
  res.send('保存成功')
};


/*
 * 获取缓存数据
 * */
exports.getUsername = function (req, res) {
  console.log("获取缓存数据----" + req.session.userName);
  res.send(req.session.userName)
};
