var Urls = require('../api/baseservice.js');

var http = require('http');

var axios = require('axios');

const toolmallHttp = function (request) {
  return new Promise((resolve, reject) => {
    let body = '';
    // http模块拿到真实后台api的数据,并根据自己的实际需求修改数据，以最佳形态返回给前端直接使用。
    http.get(Urls.getPlanSceneList, function (res) {
      res.on('data', (data) => {
        body += data;
      }).on('end', () => {
        resolve(JSON.parse(body));
      });
    });
  });
};

// 通过axios.all可以合并后台的多个请求，等数据全部返回之后返回给前端。
const toolmallHttp1 = function (request) {
  axios.all([
      axios.get('/Urls/request1'),
      axios.get('/Urls/request2', {
        params: {
          page: 1
        }
      }),
    ])
    .then(axios.spread(function (res1, res2) {
      config.throwError(next, res1, res2);
      var page = 1;
      res.render('index', {
        title: config.title('首页'),
        keywords: config.keywords,
        description: config.description,
        menuNav: 0,
        carList: res1.data.Data,
        top10: res2.data.Data.slice((page - 1) * 3, page * 3)
      });
    })).catch(e => {
      config.renderError(req, res, e);
    })
}


/*
 * 执行静态化方法
 * */
exports.index = function (req, res) {
  if (req.session.USERINFO) {
    res.render('index', {
      userName: req.session.USERINFO.sessionUser.userName,
      message: req.session.USERINFO.sessionUser.userId,
    })
  } else {
    res.render('index')
  }
};
