var express = require('express');
var toolmallHttp = require('./httpRequest.js');

var router = express.Router();

var routerItems = {};

var items = [{
  title: '文章1'
}, {
  title: '文章2'
}];

//首页
routerItems.index = function (req, res) {
  toolmallHttp(req).then((data) => {
    res.send(data);
  }).catch((err) => {
    res.send(err);
  });
}

routerItems.hello = function (req, res) {
  res.send('Hello GET');
};

routerItems.del_user = function (req, res) {
  console.log("/del_user 响应 DELETE 请求");
  res.send('删除页面');
};

routerItems.list = function (req, res, next) {
  res.render('list', {
    title: '文章列表',
    items: items
  });
};

routerItems.article = function (req, res, next) {
  res.render('article', {
    title: '文章列表',
    message: 'fendo8888'
  });
};

routerItems.list_user = function (req, res) {
  console.log("/list_user GET 请求");
  res.json({
    code: 0,
    msg: 'success',
    data: 'express'
  })
};

//可以将复杂的执行函数放在单独的js文件里，然后require导入进来
routerItems.generate = require('../routes/generate.js');
routerItems.login = require('../routes/login.js');

router.get('/', routerItems.index); //首页
router.get('/hello', routerItems.hello);
router.get('/del_user', routerItems.del_user);
router.get('/login', routerItems.login.login);
router.get('/list', routerItems.list);
router.post('/article', routerItems.article);
router.get('/list_user', routerItems.list_user);
router.get('/generate', routerItems.generate.runGenerate);

module.exports = router;
