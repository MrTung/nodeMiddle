/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-refresh': '&#xe908;',
		'icon-ask': '&#xe909;',
		'icon-qq': '&#xe90a;',
		'icon-check': '&#xe90b;',
		'icon-lighten': '&#xe90c;',
		'icon-phone': '&#xe90d;',
		'icon-dianzuan': '&#xe90e;',
		'icon-alipay': '&#xe90f;',
		'icon-danger': '&#xe910;',
		'icon-card': '&#xe911;',
		'icon-cash': '&#xe912;',
		'icon-ok': '&#xe913;',
		'icon-error': '&#xe914;',
		'icon-order': '&#xe915;',
		'icon-cash2': '&#xe916;',
		'icon-english': '&#xe917;',
		'icon-ok2': '&#xe918;',
		'icon-arrow-top': '&#xe919;',
		'icon-arrow-left': '&#xe91a;',
		'icon-arrow-right': '&#xe91b;',
		'icon-arrow-bottom': '&#xe91c;',
		'icon-weixin2': '&#xe91d;',
		'icon-bao': '&#xe91e;',
		'icon-diandong': '&#xe91f;',
		'icon-laofang': '&#xe920;',
		'icon-qidong': '&#xe921;',
		'icon-qixiu': '&#xe922;',
		'icon-runhua': '&#xe923;',
		'icon-shoudong': '&#xe924;',
		'icon-yibiao': '&#xe925;',
		'icon-zhaoming': '&#xe926;',
		'icon-zutao': '&#xe927;',
		'icon-baozheng': '&#xe928;',
		'icon-cart': '&#xe929;',
		'icon-fapiao': '&#xe92a;',
		'icon-lipin': '&#xe92b;',
		'icon-qitian': '&#xe92c;',
		'icon-home': '&#xe92d;',
		'icon-gongju': '&#xe92e;',
		'icon-clock': '&#xe92f;',
		'icon-iOS': '&#xe930;',
		'icon-android': '&#xe931;',
		'icon-qiangshua': '&#xe932;',
		'icon-jupian': '&#xe933;',
		'icon-qianzi': '&#xe934;',
		'icon-chanzi': '&#xe935;',
		'icon-ask2': '&#xe936;',
		'icon-diandong2': '&#xe937;',
		'icon-erweima': '&#xe938;',
		'icon-laofang2': '&#xe939;',
		'icon-qidong2': '&#xe93a;',
		'icon-account2': '&#xe900;',
		'icon-cart22': '&#xe901;',
		'icon-order2': '&#xe902;',
		'icon-quan2': '&#xe903;',
		'icon-shoucang2': '&#xe904;',
		'icon-zhuce2': '&#xe905;',
		'icon-zixun2': '&#xe906;',
		'icon-cart2': '&#xe907;',
		'icon-android2': '&#xe93c;',
		'icon-iOS2': '&#xe93d;',
		'icon-WAP2': '&#xe93e;',
		'icon-weixin': '&#xe93f;',
		'icon-circle': '&#xe93b;',
		'icon-coupon': '&#xe940;',
		'icon-eyeclosed': '&#xe943;',
		'icon-eye': '&#xe944;',
		'icon-phone2': '&#xe941;',
		'icon-message': '&#xe942;',
		'icon-lock': '&#xe945;',
		'icon-circle2': '&#xe946;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
