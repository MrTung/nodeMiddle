/*
* node 服务器提供的接口
* */

var config = require("../config.js");

var Baseurl = config.server.protocol + "://" + config.server.host + ":" + config.server.port;


//登录
const login = Baseurl + "/login";
//登出
const loginOut = Baseurl + "/loginOut";
//加入购物车
const AddCart = Baseurl + "/cart/addCart";
/**
 * 商品数量增减
 */
const DecreOrIncre = Baseurl + "/cart/decreOrIncre";
/**
 * 删除购物车
 */
const DelCart = Baseurl + "/cart/deleteCart";
/**
 * 采购单下单
 */
const PlaceOrderUrl = Baseurl + "/merchant/purchaseorder/placeOrder";

// node自己提供的接口
const submitCart = Baseurl + "/cart/submitCart";
const getSessionUser = Baseurl + "/user/getSessionUser";


module.exports = {
    login,
    loginOut,
    AddCart,
    DecreOrIncre,
    DelCart,
    PlaceOrderUrl,
    submitCart,
    getSessionUser
};
