import Vue from 'vue'
import VueRouter from 'vue-router'
// import login from '../views/Login.vue'
import login from "../views/Login.vue"
Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: "/login"
	},
	{
		path: '/login',
		component: () => import("../views/Login.vue")
	},
	{
		path: '/home',
		name: 'home',
		component: () => import("../views/Home.vue"),
		children: [{
				path: "/home/xitongshouye",
				name: "dataStatistics",
				component: () => import("../views/shouye/xitongshouye.vue"),
				meta: {
					permission: true,
					index: "xitongshouye"
				}
			},
			{
				path: "/home/zhanghushezhi",
				name: "zhanghushezhi",
				component: () => import("../views/shouye/zhanghushezhi.vue"),
				meta: {
					permission: true,
					index: "zhanghushezhi"
				}
			},
			{
				path: "/home/xitongxinxi",
				name: "xitongxinxi",
				component: () => import("../views/shouye/xitongxinxi.vue"),
				meta: {
					permission: true,
					index: "xitongxinxi"
				}
			},
			{
				path: "/home/denglurizhi",
				name: "denglurizhi",
				component: () => import("../views/shouye/denglurizhi.vue"),
				meta: {
					permission: true,
					index: "denglurizhi"
				}
			},
			{
				path: "/home/pinpaiguanli",
				name: "pinpaiguanli",
				component: () => import("../views/shangpin/pinpaiguanli.vue"),
				meta: {
					permission: true,
					index: "pinpaiguanli"
				}
			},
			{
				path: "/home/shangpinfenlei",
				name: "shangpinfenlei",
				component: () => import("../views/shangpin/shangpinfenlei.vue"),
				meta: {	
					permission: true,
					index: "shangpinfenlei"
				}
			},
			{
				path: "/home/shangpinhuishouzhan",
				name: "shangpinhuishouzhan",
				component: () => import("../views/shangpin/shangpinhuishouzhan.vue"),
				meta: {
					permission: true,
					index: "shangpinhuishouzhan"
				}
			},
			{
				path: "/home/shangpinleixing",
				name: "shangpinleixing",
				component: () => import("../views/shangpin/shangpinleixing.vue"),
				meta: {
					permission: true,
					index: "shangpinleixing"
				}
			},
			{
				path: "/home/shangpinliebiao",
				name: "shangpinliebiao",
				component: () => import("../views/shangpin/shangpinliebiao.vue"),
				meta: {
					permission: true,
					index: "shangpinliebiao"
				}
			},
			{
				path: "/home/shangpinpiliangxiugai",
				name: "shangpinpiliangxiugai",
				component: () => import("../views/shangpin/shangpinpiliangxiugai.vue"),
				meta: {
					permission: true,
					index: "shangpinpiliangxiugai"
				}
			},
			{
				path: "/home/shangpinpingjia",
				name: "shangpinpingjia",
				component: () => import("../views/shangpin/shangpinpingjia.vue"),
				meta: {
					permission: true,
					index: "shangpinpingjia"
				}
			},
			{
				path: "/home/shangpinshehe",
				name: "shangpinshenhe",
				component: () => import("../views/shangpin/shangpinshenhe.vue"),
				meta: {
					permission: true,
					index: "shangpinshehe"
				}
			},
			{
				path: "/home/tianjiashangpin",
				name: "tianjiashangpin",
				component: () => import("../views/shangpin/tianjiashangpin.vue"),
				meta: {
					permission: true,
					index: "tianjiashangpin"
				}
			},
			{
				path: "/home/tupiankuguanli",
				name: "tupiankuguanli",
				component: () => import("../views/shangpin/tupiankuguanli.vue"),
				meta: {
					permission: true,
					index: "tupiankuguanli"
				}
			},
			// 订单列表
			{
				path: "/home/dingdanliebiao",
				name: "dingdanliebiao",
				component: () => import("../views/dingdan/dingdanliebiao.vue"),
				meta: {
					permission: true,
					index: "dingdanliebiao"
				}
			},
			// 订单-确认收货
			{
				path: "/home/querenshouhuo",
				name: "querenshouhuo",
				component: () => import("../views/dingdan/querenshouhuo.vue"),
				meta: {
					permission: true,
					index: "querenshouhuo"
				}
			},
			// 到货提醒
			{
				path: "/home/daohuotixing",
				name: "daohuotixing",
				component: () => import("../views/dingdan/daohuotixing.vue"),
				meta: {
					permission: true,
					index: "daohuotixing"
				}
			},
			// 订单设置
			{
				path: "/home/dingdanshezhi",
				name: "dingdanshezhi",
				component: () => import("../views/dingdan/dingdanshezhi.vue"),
				meta: {
					permission: true,
					index: "dingdanshezhi"
				}
			},
			// 退货申请处理
			{
				path: "/home/tuihuoshenqingchuli",
				name: "tuihuoshenqingchuli",
				component: () => import("../views/dingdan/tuihuoshenqingchuli.vue"),
				meta: {
					permission: true,
					index: "tuihuoshenqingchuli"
				}
			},
			// 退款申请处理
			{
				path: "/home/tuikuanshenqingchuli",
				name: "tuikuanshenqingchuli",
				component: () => import("../views/dingdan/tuikuanshenqingchuli.vue"),
				meta: {
					permission: true,
					index: "tuikuanshenqingchuli"
				}
			},
			// 退货原因设置
			{
				path: "/home/tuihuoyuanyinshezhi",
				name: "tuihuoyuanyinshezhi",
				component: () => import("../views/dingdan/tuihuoyuanyinshezhi.vue"),
				meta: {
					permission: true,
					index: "tuihuoyuanyinshezhi"
				}
			},
			// 快递单模板
			{
				path: "/home/kuaididanmoban",
				name: "kuaididanmoban",
				component: () => import("../views/dingdan/kuaididanmoban.vue"),
				meta: {
					permission: true,
					index: "kuaididanmoban"
				}
			},
			// 自定义打印项
			{
				path: "/home/zidingyidayinxiang",
				name: "zidingyidayinxiang",
				component: () => import("../views/dingdan/zidingyidayinxiang.vue"),
				meta: {
					permission: true,
					index: "zidingyidayinxiang"
				}
			},
			// 发货点信息管理
			{
				path: "/home/fahuodianxinxiguanli",
				name: "fahuodianxinxiguanli",
				component: () => import("../views/dingdan/fahuodianxinxiguanli.vue"),
				meta: {
					permission: true,
					index: "fahuodianxinxiguanli"
				}
			},
			// 库存
			// 商品入库
			{
				path: "/home/shangpinruku",
				name: "shangpinruku",
				component: () => import("../views/kucun/shangpinruku.vue"),
				meta: {
					permission: true,
					index: "shangpinruku"
				}
			},
			// 商品出库
			{
				path: "/kucun/shangpinchuku",
				name: "shangpinchuku",
				component: () => import("../views/kucun/shangpinchuku.vue"),
				meta: {
					permission: true,
					index: "shangpinchuku"
				}
			},
			// 用户
			// 用户列表
			{
				path: "/home/yonghuliebiao",
				name: "yonghuliebiao",
				component: () => import("../views/yonghu/yonghuliebiao.vue"),
				meta: {
					permission: true,
					index: "yonghuliebiao"
				}
			},
			// 购买力筛选
			{
				path: "/home/goumailishaixuan",
				name: "goumailishaixuan",
				component: () => import("../views/yonghu/goumailishaixuan.vue"),
				meta: {
					permission: true,
					index: "goumailishaixuan"
				}
			},
			// 标签管理
			{
				path: "/home/biaoqianguanli",
				name: "biaoqianguanli",
				component: () => import("../views/yonghu/biaoqianguanli.vue"),
				meta: {
					permission: true,
					index: "biaoqianguanli"
				}
			},
			// 会员等级设置
			{
				path: "/home/huiyuandengjishezhi",
				name: "huiyuandengjishezhi",
				component: () => import("../views/yonghu/huiyuandengjishezhi.vue"),
				meta: {
					permission: true,
					index: "huiyuandengjishezhi"
				}
			},
			// 成长值及优币查询
			{
				path: "/home/chengzhangzhijiyoubi",
				name: "chengzhangzhijiyoubi",
				component: () => import("../views/yonghu/chengzhangzhijiyoubi.vue"),
				meta: {
					permission: true,
					index: "chengzhangzhijiyoubi"
				}
			},
			// 任务奖励设置
			{
				path: "/home/renwujianglishezhi",
				name: "renwujianglishezhi",
				component: () => import("../views/yonghu/renwujianglishezhi.vue"),
				meta: {
					permission: true,
					index: "renwujianglishezhi"
				}
			},
			// 更多规则设置
			{
				path: "/home/gengduoguizeshezhi",
				name: "gengduoguizeshezhi",
				component: () => import("../views/yonghu/gengduoguizeshezhi.vue"),
				meta: {
					permission: true,
					index: "gengduoguizeshezhi"
				}
			},
			// 促销
			// 秒杀活动列表
			{
				path: "/home/miaoshahuodongliebiao",
				name: "miaoshahuodongliebiao",
				component: () => import("../views/cuxiao/miaoshahuodongliebiao.vue"),
				meta: {
					permission: true,
					index: "miaoshahuodongliebiao"
				}
			},
			// 时间段列表
			{
				path: "/home/shijianduanliebiao",
				name: "shijianduanliebiao",
				component: () => import("../views/cuxiao/shijianduanliebiao.vue"),
				meta: {
					permission: true,
					index: "shijianduanliebiao"
				}
			},
	
			// 秒杀提醒通知
			{
				path: "/home/miaoshatixingtongzhi",
				name: "miaoshatixingtongzhi",
				component: () => import("../views/cuxiao/miaoshatixingtongzhi.vue"),
				meta: {
					permission: true,
					index: "miaoshatixingtongzhi"
				}
			},
			// 优惠卷列表
			{
				path: "/home/youhuijuanliebiao",
				name: "youhuijuanliebiao",
				component: () => import("../views/cuxiao/youhuijuanliebiao.vue"),
				meta: {
					permission: true,
					index: "youhuijuanliebiao"
				}
			},
			// 添加优惠券
			{
				path: "/home/tianjiayouhuijuan",
				name: "tianjiayouhuijuan",
				component: () => import("../views/cuxiao/tianjiayouhuijuan.vue"),
				meta: {
					permission: true,
					index: "tianjiayouhuijuan"
				}
			},
			// 活动列表
			{
				path: "/home/huodongliebiao",
				name: "huodongliebiao",
				component: () => import("../views/cuxiao/huodongliebiao.vue"),
				meta: {
					permission: true,
					index: "huodongliebiao"
				}
			},
			// 添加活动
			{
				path: "/home/tianjiahuodong",
				name: "tianjiahuodong",
				component: () => import("../views/cuxiao/tianjiahuodong.vue"),
				meta: {
					permission: true,
					index: "tianjiahuodong"
				}
			},
			// 品牌制造商
			{
				path: "/home/pinpaizhizaoshang",
				name: "pinpaizhizaoshang",
				component: () => import("../views/cuxiao/pinpaizhizaoshang.vue"),
				meta: {
					permission: true,
					index: "pinpaizhizaoshang"
				}
			},
			// 新鲜好物
			{
				path: "/home/xinxianhaowu",
				name: "xinxianhaowu",
				component: () => import("../views/cuxiao/xinxianhaowu.vue"),
				meta: {
					permission: true,
					index: "xinxianhaowu"
				}
			},
			// 人气推荐
			{
				path: "/home/renqituijian",
				name: "renqituijian",
				component: () => import("../views/cuxiao/renqituijian.vue"),
				meta: {
					permission: true,
					index: "renqituijian"
				}
			},
			// 精选专题
			{
				path: "/home/zhuantijingxuan",
				name: "zhuantijingxuan",
				component: () => import("../views/cuxiao/zhuantijingxuan.vue"),
				meta: {
					permission: true,
					index: "zhuantijingxuan"
				}
			},
			// 运营
			// 系统消息
			{
				path: "/home/xitongxiaoxi",
				name: "xitongxiaoxi",
				component: () => import("../views/yunying/xitongxiaoxi.vue"),
				meta: {
					permission: true,
					index: "xitongxiaoxi"
				}
			},
			// 短信消息
			{
				path: "/home/duanxinxiaoxi",
				name: "duanxinxiaoxi",
				component: () => import("../views/yunying/duanxinxiaoxi.vue"),
				meta: {
					permission: true,
					index: "duanxinxiaoxi"
				}
			},
			// 站内信消息
			{
				path: "/home/zhanneixinxiaoxi",
				name: "zhanneixinxiaoxi",
				component: () => import("../views/yunying/zhanneixinxiaoxi.vue"),
				meta: {
					permission: true,
					index: "zhanneixinxiaoxi"
				}
			},
			// 动态大屏
			{
				path: "/home/dongtaidaping",
				name: "dongtaidaping",
				component: () => import("../views/yunying/dongtaidaping.vue"),
				meta: {
					permission: true,
					index: "dongtaidaping"
				}
			},
			// 优惠卷查询
			{
				path: "/home/youhuijuanchaxun",
				name: "youhuijuanchaxun",
				component: () => import("../views/yunying/youhuijuanchaxun.vue"),
				meta: {
					permission: true,
					index: "youhuijuanchaxun"
				}
			},
			// 邀请好友查询
			{
				path: "/home/yaoqinghaoyouchaxun",
				name: "yaoqinghaoyouchaxun",
				component: () => import("../views/yunying/yaoqinghaoyouchaxun.vue"),
				meta: {
					permission: true,
					index: "yaoqinghaoyouchaxun"
				}
			},
			// 幸运抽奖查询
			{
				path: "/home/xingyunchoujiangchaxun",
				name: "xingyunchoujiangchaxun",
				component: () => import("../views/yunying/xingyunchoujiangchaxun.vue"),
				meta: {
					permission: true,
					index: "xingyunchoujiangchaxun"
				}
			},
			// 广告列表
			{
				path: "/home/guanggaoliebiao",
				name: "guanggaoliebiao",
				component: () => import("../views/yunying/guanggaoliebiao.vue"),
				meta: {
					permission: true,
					index: "guanggaoliebiao"
				}
			},
		]
	}
	// {
	//   path: '/about',
	//   name: 'About',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	// }
]



const router = new VueRouter({
	routes
})
// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
	if (to.path === '/login') return next()
	// 获取token
	const tokenStr = window.sessionStorage.getItem('userToken')
	if (!tokenStr) return next('/login')
	next()
})

export default router
