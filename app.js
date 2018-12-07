var express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
var router = require('./server/router.js');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

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
var options = {
  "host": "127.0.0.1",
  "port": "6379",
  'db':1,
  "ttl": 60 * 60 * 24 * 30,   //Session的有效期为30天
};

// /usr/local / redis - 5.0.0本地redis数据库
app.use(session({
  secret: 'keyboard cat',//签名
  cookie: {
    maxAge: 1000 * 60 *60 *3//3小时
  },
  store: new RedisStore(options),
//session存储的实例子
  resave: true,//强制session保存到session store中
  saveUninitialized: false//强制没有“初始化”的session保存到storage中
}))

app.use(router);

//使用jade模板
//app.set('view engine', 'jade');

//使用ejs模板
app.set('view engine', 'ejs');

app.listen(3000, () => {
  console.log('server loaded in http://localhost:3000')
});

module.exports = app;
