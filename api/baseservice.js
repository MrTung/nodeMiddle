// var config = require("../config.js");

var Baseurl = "http://t2.toolmall.com";
var Baseurl2 = "http://t2.toolmall.com/pc";


/*if (process.env.NODE_ENV == 'development') {

  Baseurl = "http://t2.toolmall.com" //测试环境

  Baseurl2 = "http://t2.toolmall.com/pc" //测试环境

} else {
  Baseurl = "http://b.toolmall.com" //正式环境
  Baseurl2 = "http://b.toolmall.com/pc" //正式环境
}*/

/**
 * 获取图形验证码
 */
const Captchaurl = Baseurl + "/verify/captcha"

/**
 * 校验图形验证码
 */
const Checkcodeurl = Baseurl + "/verify/checkcode"

/**
 * 登录链接  此接口特殊,参数要追加在url后面
 */
const Loginurl = Baseurl + "/merchant/back/users/login"

/**
 * 退出登录链接
 */
const Logouturl = Baseurl + "/merchant/back/users/userlogout"

/**
 * 注册链接
 */
const Registurl = Baseurl + "/merchant/back/users/register"

/**--
 * 发送短信验证码
 */
const SendMobileUrl = Baseurl + "/verify/mobileVerifyCode"

/**
 * 校验短信验证码
 */
const CheckMobileCodeUrl = Baseurl + "/verify/validateMobileVerifyCode"

/**
 * 查询用户信息接口
 */
const UserInfoUrl = Baseurl + "/merchant/back/users/getUserInfo"

/**
 * 修改用户手机号码
 */
const ModifyUserPhoneUrl = Baseurl + "/merchant/back/users/modifyMobile"

/**
 * 重置登录密码
 */
const ResetPwdUrl = Baseurl + "/merchant/back/users/reset"

/**
 * 忘记密码
 */
const FindPwdUrl = Baseurl + "/verify/reset"

/**
 * 注册时校验用户名是否存在
 */
const CheckUserNameUrl = Baseurl + "/verify/checkUserByUserName"

/**
 * 完善用户注册信息
 */
const PerfectUserInfoUrl = Baseurl + "/merchant/back/users/completeRegister"

/**
 * 获取用户账户信息
 */
const PersonCenter = Baseurl + "/merchant/back/users/userPersonalCenter"

/**
 * 获取登陆用户信息
 */
const GetLoginUserInfoUrl = Baseurl + "/merchant/back/users/getLoginUserInfo"

/**
 * 上传文件的服务器
 */
const UploadFileUrl = Baseurl + "/verify/uploadBusinessLicense"

/**
 * 校验手机号码是否存在
 */
const CheckMobileUrl = Baseurl + "/verify/checkMobilePhoneNumber"

/**
 * 注册步骤一： 输入了手机号、图片验证码、短信验证码、同意注册协议之后
 */
const registStepOne = Baseurl + "/merchant/back/users/firstRegister";

/**
 * 注册步骤一： 输入了用户名、密码之后
 */
const registStepTwo = Baseurl + "/merchant/back/users/secondRegister";

//----------------------------组织管理------------------------


/**
 * 获取组织树-王斌
 */
const GetAllStructureUrl = Baseurl + "/merchant/back/job/getAllStructure"

/**
 * 获取组织树
 */
const GetallorgUrl = Baseurl + "/merchant/back/org/getAllOrg"

/**
 * 增加子公司
 */
const AddcompanyUrl = Baseurl + "/merchant/back/org/addCompany"

/**
 * 获取子公司列表
 */
const QueryCompanyList = Baseurl + "/merchant/back/org/queryCompanyList"

/**
 * 增加部门
 */
const AdddepartmentUrl = Baseurl + "/merchant/back/dept/addDepartment"

/**
 * 删除公司
 */
const DeleteorgUrl = Baseurl + "/merchant/back/org/delete"

/**
 * 删除部门
 */
const DeletedeptUrl = Baseurl + "/merchant/back/dept/delete"

/**
 * 根据公司id获取子公司列表
 */
const getCompanyListUrl = Baseurl + "/merchant/back/org/queryCompanyList"

//----------------------------岗位管理------------------------

/**
 * 增加岗位
 */
const AddjobUrl = Baseurl + "/merchant/back/job/addJob"

/**
 * 删除岗位
 */
const DeletejobUrl = Baseurl + "/merchant/back/job/delete"

/**
 * 获取所有岗位
 */
const GetalljobUrl = Baseurl + "/merchant/back/job/getAllJob"

//----------------------------角色管理------------------------

/**
 * 增加角色
 */
const AddroleUrl = Baseurl + "/merchant/back/role/addRole"

/**
 * 删除角色
 */
const DeleteroleUrl = Baseurl + "/merchant/back/role/delete"

/**
 * 获取所有角色
 */
const GetallroleUrl = Baseurl + "/merchant/back/role/getAllRole"

//----------------------------角色权限管理------------------------

/**
 * 角色权限管理-权限编辑
 */
const SaveUserRoleAuthorityoUrl = Baseurl + "/merchant/back/roleauthority/saveRoleAuthority"

/**
 * 获取角色权限管理列表
 */
const GetUserRoleAuthorityListUrl = Baseurl + "/merchant/back/roleauthority/getCompanyRoleVoList"

/**
 * 角色权限管理-权限展示
 */
const ShowOneRoleAuthorityInfo = Baseurl + "/merchant/back/roleauthority/getRoleAuthorityMenuButtons"

/**
 * 角色权限管理-权限搜索
 */
const SearchRoleAuthority = Baseurl + "/merchant/back/roleauthority/searchRoleAuthority"

//----------------------------岗位角色管理（废弃)------------------------

/**
 * 角色权限编辑
 */
const GetRoleAuthorityUrl = Baseurl + "/merchant/back/positionrole/getRoleAuthority"

/**
 * 获取所有该公司下所有角色
 */
const GetCompanyRolesUrl = Baseurl + "/merchant/back/positionrole/getCompanyRoles"

/**
 * 岗位角色管理列表
 */
const GetPositionListUrl = Baseurl + "/merchant/back/positionrole/getPositionList"

/**
 *岗位对应角色列表
 */
const GetPositionRoleListUrl = Baseurl + "/merchant/back/positionrole/getPositionRoleList"

/**
 * 角色权限编辑保存
 */
const SaveRoleAuthorityUrl = Baseurl + "/merchant/back/positionrole/saveRoleAuthority"



//----------------------------首页菜单数据------------------------
/**
 * 获取首页菜单数据
 */
const getIndexMenus = Baseurl + "/merchant/back/menus/getIndexMenus"

/**
 * 获取首页友情链接
 */
const getFriendshipLinkList = Baseurl + "/verify/getFriendshipLinkList"

/**
 * 新增首页友情链接
 */
const saveFriendshipLink = Baseurl + "/verify/saveFriendshipLink"

//----------------------------用户权限------------------------
/**
 * 用户权限—岗位编辑
 */
const EditUserPositioUrl = Baseurl + "/merchant/back/userauthority/editUserPosition"

/**
 * 获取用户权限列表
 */
const GetAllUserPositionUrl = Baseurl + "/merchant/back/userauthority/getAllUserPosition"

/**
 * 用户权限—岗位展示
 */
const GetOneUserAndPositionUrl = Baseurl + "/merchant/back/userauthority/getOneUserAndPosition"

/**
 * 用户权限—权限展示
 */
const GeteditUserAuthorityAdjustnUrl = Baseurl + "/merchant/back/userauthority/editUserAuthorityAdjust"

/**
 * 用户权限—搜索
 */
const SearchUserAuthority = Baseurl + "/merchant/back/userauthority/searchUserAuthority"

/**
 * 用户权限—权限跳转保存
 */
const SaveUserAuthorityAdjustUrl = Baseurl + "/merchant/back/userauthority/saveUserAuthorityAdjust"

//----------------------------用户管理------------------------

/**
 * 获取这个用户的公司及其子公司
 */
const getCompanyListByUserIdUrl = Baseurl + "/merchant/back/userManage/getCompanyListByUserId"

/**
 * 获取这个公司的所有部门
 */
const getDeptListByCompanyIdUrl = Baseurl + "/merchant/back/userManage/getDeptListByCompanyId"

/**
 * 获取这个部门的所有岗位
 */
const getPositionListByDeptIdUrl = Baseurl + "/merchant/back/userManage/getPositionListByDeptId"

/**
 * 用户管理—新增用户
 */
const saveUserManageUrl = Baseurl + "/merchant/back/userManage/save-user-manage"

/**
 * 用户管理—编辑用户
 */
const updateUserManageUrl = Baseurl + "/merchant/back/userManage/update-user-manage"

/**
 * 用户权限-角色编辑-角色展示
 */
const getAllRoleUrl = Baseurl + "/merchant/back/userManage/getAllRole"

/**
 * 用户管理列表
 */
const getUserManageListUrl = Baseurl + "/merchant/back/userManage/getUserManageList"

/**
 * 用户管理列表查询兼模糊搜索查询
 */
const searchUserManageVoListUrl = Baseurl + "/merchant/back/userManage/searchUserManageVoList"

/**
 * 用户权限-权限调整-显示菜单按钮
 */
const getUserAuhtorityMenuButtonsUrl = Baseurl + "/merchant/back/userManage/getUserAuhtorityMenuButtons"

/**
 * 用户权限-权限调整-显示菜单按钮
 */
const saveUserAuthorityUrl = Baseurl + "/merchant/back/userManage/saveUserAuthority"

/**
 * 用户管理—删除用户
 */
const deleteUserManageUrl = Baseurl + "/merchant/back/userManage/delete-user-manage"

//----------------------------发票管理------------------------

/**
 * 获取发票信息
 */
const getInvoiceUrl = Baseurl + "/merchant/back/invoice/getInvoice"

/**
 * 保存发票信息
 */
const saveInvoiceUrl = Baseurl + "/merchant/back/invoice/saveInvoice"

const drawOrderInvoiceUrl = Baseurl + "/merchant/back/invoice/drawOrderInvoice"

/**
 * 新增发票信息
 */
const updateInvoiceUrl = Baseurl + "/merchant/back/invoice/updateInvoice"

/**
 * 删除发票信息
 */
const deleteInvoiceUrl = Baseurl + "/merchant/back/invoice/deleteInvoice"

//----------------------------商品转换管理------------------------
/**
 * 删除公司商品记录
 */
const DeletecompanyProductUrl = Baseurl + "/merchant/back/companyProduct/delete"

/**
 * 查询公司商品列表
 */
const FindPageListUrl = Baseurl + "/merchant/back/companyProduct/findPageList"

/**
 * 批量导入商品模板
 */
const ImportExcelUrl = Baseurl + "/merchant/back/companyProduct/importExcel"

/**
 * 新增公司商品记录
 */
const SavecompanyProductUrl = Baseurl + "/merchant/back/companyProduct/save"

/**
 * 根据商品id或名称查询商品信息
 */
const QuerySelectListUrl = Baseurl + "/merchant/demandorder/querySelectList"

/**
 * 修改公司商品记录
 */
const UpdateCompanyProductUrl = Baseurl + "/merchant/back/companyProduct/update"


//----------------------------购物车管理------------------------
/**
 * 获取购物车列表
 */
const GetCartListUrl = Baseurl + "/merchant/back/cart/getCartList"

/**
 * 购物车增加
 */
const AddCart = Baseurl + "/merchant/back/cart/addCart"

/**
 * 商品数量增减
 */
const DecreOrIncre = Baseurl + "/merchant/back/cart/decreOrIncre"

/**
 * 删除购物车
 */
const DelCart = Baseurl + "/merchant/back/cart/delCart"


//----------------------------采购单管理------------------------
/**
 * 采购单下单
 */
const PlaceOrderUrl = Baseurl + "/merchant/purchaseorder/placeOrder"

/**
 * 转账凭证提交
 */
const UploadCredentialsUrl = Baseurl + "/merchant/purchaseorder/uploadCredentials"

//----------------------------物流管理------------------------
/**
 * 查询物流
 */
const GetLogisticUrl = Baseurl + "/merchant/logistic/getLogistic"

//----------------------------收货地址管理------------------------

/**
 * 获取省市区
 */
const GetAreaUrl = Baseurl + "/merchant/back/users/getArea"

/**
 * 获取公司收获地址
 */
const getRecieverAddressListUrl = Baseurl + "/merchant/back/users/getRecieverAddressList"
/**
 * 新增公司收获地址
 */
const AddRecieverAddressUrl = Baseurl + "/merchant/back/users/addRecieverAddress"

/**
 * 根据id删除公司收获地址
 */
const DeleteRecieverAddressUrl = Baseurl + "/merchant/back/users/deleteRecieverAddress"

/**
 * 修改公司收获地址
 */
const UpdateRecieverAddressurl = Baseurl + "/merchant/back/users/updateRecieverAddress"

/**
 * 设置默认地址
 */
const SetDefaultAddressurl = Baseurl + "/merchant/back/users/setDefaultAddress"


//----------------------------场景分类------------------------

/**
 * 场景列表
 */
const getPlanSceneList = Baseurl + "/merchant/back/scene/getPlanSceneList"

/**
 * 根据场景ID查询详情
 */
const getPlanSceneContent = Baseurl + "/merchant/back/scene/getPlanSceneContent"

/**
 * 根据焦点ID查询焦点商品
 */
const getPlanSceneFocusProductList = Baseurl + "/merchant/back/scene/getPlanSceneFocusProductList"

//----------------------------需求单管理------------------------

/**
 * 退款申请
 */
const cancelOrderRequest = Baseurl + "/merchant/cancelOrder/cancelOrderRequest"

/**
 * 撤销申请
 */
const cancelRequest = Baseurl + "/merchant/cancelOrder/cancelOrder"

/**
 * 查询订单取消列表（当前审核状态等）
 */
const getCancelOrderList = Baseurl + "/merchant/cancelOrder/getCancelOrderList"

/**
 * 查询退货单的详情
 */
const getCancelOrderDetails = Baseurl + "/merchant/cancelOrder/getCancelOrderDetails"

/**
 * 修改退款申请
 */
const modifyRequest = Baseurl + "/merchant/cancelOrder/modifyCancelOrderRequest"

/**
 * 退货退款物流信息
 */
const cancelOrderLogistics = Baseurl + "/merchant/cancelOrder/cancelOrderLogistics"

/**
 * 取消需求订单
 */
const CancelDemandOrderUrl = Baseurl + "/merchant/demandorder/cancelDemandOrder"

/**
 * 查询全部询价单
 */
const GetAllDemandOrderUrl = Baseurl + "/merchant/demandorder/getAllDemandOrder"

/**
 * 根据订单id查询需求价单
 */
const GetDemandOrderUrl = Baseurl + "/merchant/demandorder/getDemandOrder"

/**
 * 解析Excel模板
 */
const ParseExcelUrl = Baseurl + "/merchant/demandorder/parseExcel"

/**
 * 保存需求订单
 */
const SaveDemandOrderUrl = Baseurl + "/merchant/demandorder/saveDemandOrder"

/**
 * 根据商品id或名称查询商品信息
 */
const QueryProductInfoUrl = Baseurl + "/merchant/demandorder/queryProductInfo"

/**
 * 根据商品id或名称查询商品信息
 */
const QueryProductListUrl = Baseurl2 + "/product/getQueryList"

/**
 * 根据商品id查询报价单信息
 */
const QueryOfferOrderUrl = Baseurl + "/merchant/proposalorder/getProposalOrder"

//----------------------------采购单------------------------

/**
 * 获取对账单列表
 */
const GetbillOrderVoListUrl = Baseurl + "/merchant/purchaseorder/billOrderVoList"

/**
 * 采购单管理中的全部订单查询
 */
const AllPurchaseUrl = Baseurl + "/merchant/purchaseorder/getAllOrder"

/**
 * 采购单管理中的订单状态查询
 */
const PurchaseOrderStatusUrl = Baseurl + "/merchant/purchaseorder/getPurchaseOrderStatusEnum"

/**
 * 采购单id查询采购单商品详情
 */
const QueryPurchaseOrderUrl = Baseurl + "/merchant/purchaseorder/getOrderById"

/**
 * 查询订单详情
 */
const QueryOrderDetailUrl = Baseurl + "/merchant/purchaseorder/getOrderDetail"

/**
 * 采购单审核的更改状态
 */
const PurchaseOrderStUrl = Baseurl + "/merchant/purchaseorder"

/**
 * 采购单审核的更改状态
 */
const PurchaseOrderDetailUrl = Baseurl + "/merchant/purchaseorder/getOrderDetail"

/**
 * 退款申请
 */
// const cancelOrderRequest = Baseurl + "/merchant/cancelOrder/cancelOrderRequest"

/**
 * 撤销申请
 */
const CancelRequestUrl = Baseurl + "/merchant/cancelOrder/cancelOrder"

/**
 * 查询订单取消列表（当前审核状态等）
 */
// const getCancelOrderList = Baseurl + "/merchant/cancelOrder/getCancelOrderList"

/**
 * 查询退货单的详情
 */
// const getCancelOrderDetails = Baseurl + "/merchant/cancelOrder/getCancelOrderDetails"

/**
 * 修改退款申请
 */
// const modifyRequest = Baseurl + "/merchant/cancelOrder/modifyCancelOrderRequest"

/**
 * 退货退款物流信息
 */
// const cancelOrderLogistics = Baseurl + "/merchant/cancelOrder/cancelOrderLogistics"


//----------------------------账期管理------------------------

/**
 * 账期申请提交
 */
const BillingApplicateUrl = Baseurl + "/merchant/back/accountPeriod/save-account-period"

/**
 * 获取账期列表
 */
const BillingListUrl = Baseurl + "/merchant/back/accountPeriod/get-account-period"

//----------------------------首页分类------------------------

/**
 * 首页全部分类类目信息接口
 */
const HomeMenuUrl = Baseurl2 + "/productCategory/getTreeList"

/**
 * 首页今日推荐和轮播位接口
 */
const HomeAdvertUrl = Baseurl + "/merchant/back/product/recommends"

/**
 * 首页楼层接口
 */
const HomeFloorUrl = Baseurl + "/merchant/back/product/products"



//----------------------------  商品详情页 ------------------------

/**
 * 商品信息查询接口
 */
const ProductChangeInfo = Baseurl + "/merchant/back/product/findById";

/**
 * 分类搜索显示商品列表
 */
const GetPrdList = Baseurl + "/merchant/back/product/database/search";

/*
 * 商品规格 以及 同规格的兄弟产品列表
 * */
const ProductSpecification = Baseurl + "/merchant/back/product/specification";
/*
 * 猫工推荐搭配（相关商品）的商品列表
 * */
const ProductRelatedProducts = Baseurl + "/merchant/back/product/relatedProducts";
/*
 * 分类搜索显示商品列表
 * */
// const GetPrdList = Baseurl2 + "/shop/product/searchShopProducts";
/*
 * 搜索关键字显示商品列表
 * */
const searchBC = Baseurl + "/merchant/back/product/engineSearch";
/*
 * 立即购买一个商品的校验
 * */
const QueryProductBuyCheck = "";



//---------------------------- 场景采购 ------------------------

/**
 * 获取场景采购商品列表
 */
const GetSceneProduct = Baseurl + "/merchant/back/product/getSceneProduct";

/**
 * 获取场景id列表
 */
const getSceneId = Baseurl + "/merchant/back/scene/findListByCompanyId";

/**
 * 获取场景采购商品列表
 */
const getProductList = Baseurl + "/merchant/back/scene/findProductByCompanyScene";


//----------------------------  支付 ------------------------
/**
 * 支付订单
 */
const Payurl = Baseurl + "/merchant/back/pay/pay";

/**
 * 获取支付方式枚举
 */
const GetPaymentTypeEnumurl = Baseurl + "/merchant/back/accountPeriod/getPaymentTypeEnum";

/**
 * 微信支付结果，请求接口
 */
const getWePayStateUrl = Baseurl + "/merchant/scanPayNotify/getOrderStatus";

//----------------------------  活动 ------------------------

/**
 * 样本册活动请求接口
 */
const getActivityOrderUrl = Baseurl + "/merchant/activity/activityOrder";

//----------------------------  品牌 ------------------------

/**
 * 查询品牌列表，返回的结果根据品牌拼音首字母进行分组排序
 */
const getBrandListUrl = Baseurl + "/merchant/back/brand/pinyinList";

/**
 * 根据品牌ID查询商品分类
 */
const getCategoriesByBrandUrl = Baseurl + "/merchant/back/productCategory/getByBrandId";

/**
 * 根据品牌ID和类目ID查询商品列表
 */
const getPrdsByBrandCategoryUrl = Baseurl + "/merchant/back/product/findByBrandAndCategory";

/*
 * 根据品牌id来查询商品信息（类目到商品的树）
 * */
const getPrdsByBrandUrl = Baseurl + "/merchant/back/product/findByBrand";

/*
 * 根据商品一级分类获取二级分类和对应分类的品牌列表
 * */
const getBrandTreeOfCategoryUrl = Baseurl + "/merchant/back/productCategory/getChildAndBrand"

//----------------------------  SEO（搜索引擎优化） ------------------------
/**
 * 搜索引擎优化信息
 */
const getSeoConfig = Baseurl + "/merchant/back/seoConfig/getSeoConfig";

//----------------------------  广告位 ------------------------
/**
 * 获取广告位的数据
 */
// const getAdvertisingPosition = 'http://10.254.183.18:8080' + "/merchant/back/advertise/getAdvertisingPosition";


const getAdvertisingPosition = Baseurl + "/merchant/back/advertise/getAdvertisingPosition";



//----------------------------  用户数据统计 ------------------------
/**
 * 订单统计
 */
const getOrderStatis = Baseurl + "/merchant/orderStatis/getOrderStatis";

/**
 *商品统计
 */
const getProductStatis = Baseurl + "/merchant/orderStatis/getProductStatis";

module.exports = {
  Checkcodeurl,
  Captchaurl,
  Loginurl,
  Logouturl,
  GetLoginUserInfoUrl,
  Registurl,
  UserInfoUrl,
  SendMobileUrl,
  GetallorgUrl,
  AddcompanyUrl,
  QueryCompanyList,
  AdddepartmentUrl,
  DeleteorgUrl,
  DeletedeptUrl,
  CheckMobileCodeUrl,
  AddjobUrl,
  DeletejobUrl,
  GetalljobUrl,
  ModifyUserPhoneUrl,
  ResetPwdUrl,
  CheckUserNameUrl,
  PerfectUserInfoUrl,
  AddroleUrl,
  DeleteroleUrl,
  FindPwdUrl,
  GetallroleUrl,
  getIndexMenus,
  EditUserPositioUrl,
  GetAllUserPositionUrl,
  GetOneUserAndPositionUrl,
  SaveUserAuthorityAdjustUrl,
  GeteditUserAuthorityAdjustnUrl,
  SearchUserAuthority,
  SaveUserRoleAuthorityoUrl,
  ShowOneRoleAuthorityInfo,
  GetUserRoleAuthorityListUrl,
  SearchRoleAuthority,
  GetPositionRoleListUrl,
  GetRoleAuthorityUrl,
  GetRoleAuthorityUrl,
  GetCompanyRolesUrl,
  GetPositionListUrl,
  GetPositionRoleListUrl,
  SaveRoleAuthorityUrl,
  GetCartListUrl,
  AddCart,
  DelCart,
  DecreOrIncre,
  GetAreaUrl,
  getRecieverAddressListUrl,
  AddRecieverAddressUrl,
  DeleteRecieverAddressUrl,
  UpdateRecieverAddressurl,
  SetDefaultAddressurl,
  getPlanSceneContent,
  getPlanSceneFocusProductList,
  getPlanSceneList,
  HomeMenuUrl,
  ProductSpecification,
  ProductRelatedProducts,
  GetPrdList,
  searchBC,
  GetSceneProduct,
  getSceneId,
  getProductList,
  QueryProductBuyCheck,
  HomeAdvertUrl,
  SaveDemandOrderUrl,
  GetAllDemandOrderUrl,
  QueryProductInfoUrl,
  GetDemandOrderUrl,
  cancelOrderRequest,
  cancelRequest,
  getCancelOrderList,
  getCancelOrderDetails,
  modifyRequest,
  // cancelOrderLogistics,
  CancelDemandOrderUrl,
  PlaceOrderUrl,
  HomeFloorUrl,
  QueryOfferOrderUrl,
  ParseExcelUrl,
  UploadFileUrl,
  QueryProductListUrl,
  GetbillOrderVoListUrl,
  AllPurchaseUrl,
  PurchaseOrderStatusUrl,
  QueryPurchaseOrderUrl,
  PurchaseOrderStUrl,
  PurchaseOrderDetailUrl,
  QueryOrderDetailUrl,
  cancelOrderRequest,
  CancelRequestUrl,
  // getCancelOrderDetails,
  // modifyRequest,
  cancelOrderLogistics,
  PersonCenter,
  GetAllStructureUrl,
  getCompanyListUrl,
  BillingApplicateUrl,
  getCompanyListByUserIdUrl,
  getDeptListByCompanyIdUrl,
  getPositionListByDeptIdUrl,
  saveUserManageUrl,
  getAllRoleUrl,
  getUserManageListUrl,
  updateUserManageUrl,
  getUserAuhtorityMenuButtonsUrl,
  saveUserAuthorityUrl,
  deleteUserManageUrl,
  getInvoiceUrl,
  saveInvoiceUrl,
  drawOrderInvoiceUrl,
  updateInvoiceUrl,
  deleteInvoiceUrl,
  GetLogisticUrl,
  Payurl,
  GetPaymentTypeEnumurl,
  UploadCredentialsUrl,
  searchUserManageVoListUrl,
  DeletecompanyProductUrl,
  FindPageListUrl,
  ImportExcelUrl,
  SavecompanyProductUrl,
  BillingListUrl,
  QuerySelectListUrl,
  ProductChangeInfo,
  CheckMobileUrl,
  registStepOne,
  registStepTwo,
  getWePayStateUrl,
  getActivityOrderUrl,
  getFriendshipLinkList,
  saveFriendshipLink,
  UpdateCompanyProductUrl,
  getBrandListUrl,
  getCategoriesByBrandUrl,
  getPrdsByBrandCategoryUrl,
  getPrdsByBrandUrl,
  getBrandTreeOfCategoryUrl,
  getSeoConfig,
  getAdvertisingPosition,
  getOrderStatis,
  getProductStatis
}
