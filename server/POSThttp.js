var URL = require('./formatURL.js');
var toolmall = require('./formatURL.js');

var http = require('http');

const toolmallHttp = function (request) {
  return new Promise((resolve, reject) => {
    let body = '';
    // http模块拿到真实后台api的数据
    http.get(toolmall(), function (res) {
      res.on('data', (data) => {
        body += data;
      }).on('end', () => {
        resolve(JSON.parse(body));
      });
    });
  });
};


module.exports = toolmallHttp;



