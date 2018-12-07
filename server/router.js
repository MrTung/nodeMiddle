var express = require('express');
var axios = require('axios');

var router = express.Router();

var routerItems = {};

//可以将复杂的执行函数放在单独的js文件里，然后require导入进来
routerItems.generate = require('../routes/generate.js');
routerItems.login = require('../routes/login.js');
routerItems.index = require('../routes/index.js');
routerItems.list = require('../routes/list.js');
routerItems.loginout = require('../routes/login.js');
routerItems.form = require('../routes/form.js');

router.get('/', routerItems.index.index); //首页
router.get('/login', routerItems.login.login);
router.get('/loginout', routerItems.login.loginout);

router.get('/form', routerItems.form.form);
router.post('/save', routerItems.form.save);
router.get('/getUsername', routerItems.form.getUsername);


router.get('/list', routerItems.list.list);
router.get('/list_user', routerItems.list.list_user);
router.get('/del_user', routerItems.list.del_user);
router.get('/generate', routerItems.generate.runGenerate);

module.exports = router;
