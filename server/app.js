var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var router = require('./router.js');

// 使用body-parser解析post请求的参数，如果没有，req.body为undefined。
var cors = require('cors');
// cors 解决跨域
var app = express();
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(router);

//使用jade模板
//app.set('view engine', 'jade');

//使用ejs模板
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('server loaded in http://localhost:3000')
});

module.exports = app;
