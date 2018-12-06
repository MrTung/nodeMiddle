
/*------------------------------  node.js版新增的 ---------------------------------*/
var tmUtil_Pc = {};
tmUtil_Pc.utils = {};

//对数字，生成固定小数位数
//参数：number, 数字，且必须大于等于0
//参数： digits, 小数位数。只能取值 0、1、2、3、4， 默认是2
//返回值：一个对象,如 {intStr:'15',decimalStr:'16'}。  调用处要拼接数字，拼接结果是： 15.16
tmUtil_Pc.utils.formatNumberFixed = function(number, digits) {
    var result = {intStr:'',decimalStr:''};
    var number1, intNumber1, intStr1 = '', decimalNumber1, decimalStr1 = '';
    if(typeof number === 'string'){
        number = parseFloat(number);
    }
    if(typeof number  !== 'number' || isNaN(number)){
        throw 'the first param is not a number . by function [formatNumberFixed] ';
        return {};
    }
    if(number < 0){
        throw 'the number cannot be negative . by function [formatNumberFixed] ';
        return {};
    }
    if(typeof digits === 'string'){
        digits = parseInt(digits);
    }
    if(typeof digits !== 'number' || isNaN(digits)){
        digits = 2;
    }
    if(digits !== 0 && digits !== 1 && digits !== 2 && digits !== 3 && digits !== 4){
        digits = 2;
    }
    if(digits === 0){
        intStr1 = '' + Math.round(number);
        decimalStr1 = '';
    }else if(digits === 1){
        number1 = Math.round(number * 10);
        intNumber1 = Math.floor(number1 / 10);
        intStr1 = '' + intNumber1;
        decimalNumber1 =  number1 - intNumber1 * 10;
        decimalStr1 = '' + decimalNumber1;
    }else if(digits === 2){
        number1 = Math.round(number * 100);
        intNumber1 = Math.floor(number1 / 100);
        intStr1 = '' + intNumber1;
        decimalNumber1 =  number1 - intNumber1 * 100;
        decimalStr1 = '' + decimalNumber1;
        if(decimalNumber1 < 10){
            decimalStr1 = '0' + decimalStr1;
        }
    }else if(digits === 3){
        number1 = Math.round(number * 1000);
        intNumber1 = Math.floor(number1 / 1000);
        intStr1 = '' + intNumber1;
        decimalNumber1 =  number1 - intNumber1 * 1000;
        decimalStr1 = '' + decimalNumber1;
        if(decimalNumber1 < 10){
            decimalStr1 = '0' + decimalStr1;
        }
        if(decimalNumber1 < 100){
            decimalStr1 = '0' + decimalStr1;
        }
    }else if(digits === 4){
        number1 = Math.round(number * 10000);
        intNumber1 = Math.floor(number1 / 10000);
        intStr1 = '' + intNumber1;
        decimalNumber1 =  number1 - intNumber1 * 10000;
        decimalStr1 = '' + decimalNumber1;
        if(decimalNumber1 < 10){
            decimalStr1 = '0' + decimalStr1;
        }
        if(decimalNumber1 < 100){
            decimalStr1 = '0' + decimalStr1;
        }
        if(decimalNumber1 < 1000){
            decimalStr1 = '0' + decimalStr1;
        }
    }
    result.intStr = intStr1;
    result.decimalStr = decimalStr1;
    return result;
};

tmUtil_Pc.utils.setCookie = function(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
};
tmUtil_Pc.utils.getCookie = function(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
};

//html解码，依赖于jquery
tmUtil_Pc.utils.htmlDecode = function(value){
    return $('<div/>').html(value).text();
};

//PC端用的，当土猫网用户退出时，调用七鱼的logout接口
tmUtil_Pc.qiyuLogout = function(){
    var camzql = getCookie("camzql");
    if(camzql && ysf && ysf.logoff){
        ysf.logoff({
            uid:camzql
        });
    }
};

//设置，应该由 node.js后台来生成
tmUtil_Pc.main_host = "http://defu.toolmall.com:3003";
tmUtil_Pc.Apis = {
    loginOut: "http://defu.toolmall.com:3003/loginOut"
};


//  js改变公共的页面头部的 购物车数量
//  用于 加入购物车 成功后，改变页面的外观
tmUtil_Pc.changeCartNum = function (addNum) {
	if($("#cartQuantities").length === 1 && addNum){
        var currentNum = $("#cartQuantities").text();
        var newNum = currentNum / 1 + addNum / 1;
        $("#cartQuantities").text(newNum);
	}
};
//  js设置公共的页面头部的 购物车数量
//  用于 产品页ajax获取用户信息后，改变页面的外观
tmUtil_Pc.setCartNum = function (cartNum) {
    if($("#cartQuantities").length === 1){
        $("#cartQuantities").text(cartNum);
    }
};


//js 设置页面头部的用户信息
//  用于 产品页ajax获取用户信息后，改变页面的外观
tmUtil_Pc.setUserInfo = function (username) {

    if($("#js_global_top_user").length === 1){
    	var html1 = '';
        if(username){
            html1 += '<span>您好，</span>';
            html1 += '<a style="color:#0D76E7;cursor: pointer;" href="' + tmUtil_Pc.main_host + '/profile">' + username + '</a>';
            html1 += '<a rel="nofollow" onclick="javascript:tmUtil_Pc.loginout();return false;">退出登录</a>';
        }else{
            html1 += '<span>您好，请</span>';
            html1 += '<a style="color:#1b6dc5;cursor: pointer;" href="' + tmUtil_Pc.main_host + '/loginshow">登录</a>';
            html1 += '<a rel="nofollow" href="' + tmUtil_Pc.main_host + '/regist">免费注册</a>';
		}
        $("#js_global_top_user").html(html1);
    }
};

/*--------------------  有 ajax请求的 --------------------*/
// product.toolmall.com 的退出登录方法， 跨域
tmUtil_Pc.loginout = function(){
    $.ajax({
        url: tmUtil_Pc.Apis.loginOut,
        type: 'GET',
        data: {},
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (response) {
            if(response.code == "0000"){
                alert("退出登录成功, 3秒后跳转到首页");
                setTimeout(function () {
                    window.location.href = tmUtil_Pc.main_host + "/";
                });
            }
        },
        error: function (xhr, err) {
            debugger
        }
    });
    return false;
};
