var Urls = require('../api/baseservice.js');

var items = [{
  title: '文章1'
}, {
  title: '文章2'
}];
/*
 *
 * */
exports.list = function (req, res) {
  res.render('list', {
    title: '文章列表',
    items: items
  });
};

/*
 * 
 * */
exports.list_user = function (req, res) {
  console.log("/list_user GET 请求");
  res.json({
    code: 0,
    msg: 'success',
    data: 'express'
  })
};

exports.del_user = function (req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
};
