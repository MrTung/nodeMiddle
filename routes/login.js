var Urls = require('../api/baseservice.js');

var axios = require('axios');
md5 = require('js-md5');


/*
 * 执行登录方法
 * */
exports.loginApi = function (req, res) {
  let p;
  Object.keys(req.body).forEach(key => {
    p = JSON.parse(key);
  })
  let params = {
    userName: p.userName,
    password: md5(p.password),
    type: p.type,
    scope: p.scope,
    clientId: p.clientId,
    clientSecret: p.clientSecret
  };
  let dataStr = '';
  Object.keys(params).forEach(key => {
    dataStr += key + '=' + params[key] + '&';
  })
  if (dataStr !== '') {
    dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
  }

  axios.post(Urls.Loginurl + '?' + dataStr).then(function (response) {
    if (response.data.code == "0000") {
      console.log('登录成功');
      req.session.ACCESS_TOKEN = response.data.data;

      //获取用户信息 购物车数据和权限等数据
      var promiseAry = [];
      axios.defaults.headers['Authorization'] = 'Bearer ' + req.session.ACCESS_TOKEN;
      promiseAry.push(axios.get(Urls.UserInfoUrl));
      promiseAry.push(axios.get(Urls.GetCartListUrl));

      Promise.all(promiseAry).then(resultAry => {

        //获取购物车商品数量
        var cartListResult = resultAry[0].data;
        if (cartListResult.code == "0000" && cartListResult.data && cartListResult.data.cartModels) {
          var totalcount = 0;
          cartListResult.data.cartModels.forEach(function (item) {
            totalcount += item.num;
          });
          req.session.CART_TOTAL_COUNT = totalcount;
        } else {
          req.session.CART_TOTAL_COUNT = 0;
        }

        //获取用户信息
        var userInfoResult = resultAry[1].data;
        var userInfo = null;
        if (userInfoResult.code == "0000" && userInfoResult.data) {

          console.log("获取userinfo成功");
          userInfo = userInfoResult.data;
          req.session.USERINFO = userInfo;

          // 设置用户权限
          axios.get(Urls.getUserAuhtorityMenuButtonsUrl + '?userId=' + userInfo.userId).then(function (powerResult) {

            if (powerResult.data.code == "0000" && powerResult.data.data) {
              var power = powerResult.data.data;

              var powMap = {};

              power.forEach(function (item) {
                item.buttonModelList.forEach(function (childItem) {
                  // console.log(childItem);

                  if (childItem.flag) {
                    //以下是权限获取保存
                    if (childItem.buttonName == '引用询价单') {
                      powMap.isQueryPow = true;
                    }
                    if (childItem.buttonName == '导入采购商品') {
                      powMap.isPurchasePow = true;
                    }
                    if (childItem.buttonName == '引用其他公司订单') {
                      powMap.isOtherCompanyPow = true;
                    }
                    if (childItem.buttonName == '提交订单') {
                      powMap.isPurchaseSettlePow = true;
                    }
                    if (childItem.buttonName == '去支付') {
                      powMap.isPurchasePayPow = true;
                    }
                    if (childItem.buttonId == '20180512144932064110000270315530') {
                      powMap.isPurchaseOrderInfo = true; //采购单管理中的订单详情
                    }
                    if (childItem.buttonName == '新增询价单') {
                      powMap.isNewQueryPow = true;
                    }
                    if (childItem.buttonId == '20180512144932063110000266121216') {
                      powMap.isQueryEditPow = true; //询价单管理中的编辑权限
                    }
                    if (childItem.buttonName == '删除') {
                      powMap.isQueryDeletePow = true;
                    }
                    if (childItem.buttonName == '打印') {
                      powMap.isQueryPrintPow = true;
                    }
                    if (childItem.buttonName == '我要采购') {
                      powMap.isQueryToPurchasePow = true;
                    }
                    if (childItem.buttonName == '发票申请') {
                      powMap.isAccountReceiptsPow = true;
                    }
                    if (childItem.buttonName == '批量发票申请') {
                      powMap.isAccountBatchReceiptsPow = true;
                    }
                    if (childItem.buttonId == '20180512144932063110000266121226') {
                      powMap.isPurchaseAudit = true; //采购单审核中的权限标识
                    }
                  }
                });
              });
              console.log(powMap);
              req.session.CONTAIN_POWER = powMap;
              res.json(response.data);
            }
          })
        }
      });
    } else {
      //登录失败操作
      console.log('登录失败');
    }
  })
};


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

  // res.redirect(302, 'http://www.baidu.com');

};


/*
 * 执行静态化方法
 * */
exports.loginout = function (req, res) {
  //   console.log(req.session[ACCESS_TOKEN]);
  res.send('删除页面' + req.session.token);
};
