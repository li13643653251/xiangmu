
import request from "./request.js";

// import Qs from 'qs'
function getlogin(datas) {
    return request({
        method: 'POST',
        url: "/sys/login",
        data:datas
    });
}
function homemenu(data){
	return request({
		method:"GET",
		url:"/sys/menu/new_list",
		params:{
			token:data
		}
	})
}
function skuinfo(data){
	return request({
		method:"GET",
		url:`/product/skuinfo/list/${data}`	,
	})
}
// 商品列表
function shoplistdata(data){  
		method: 'POST',
		url:"/product/spuinfo/list",
		data:data
	})
}
// ��Ʒ����
function shoptree(data){
	return request({
		method: 'GET',
		url:"/product/category/list/tree",	
		data:data
	})
}
// 商品品牌：
 function shopbrand(data){
	 return request({
	 	method: 'GET',
	 	url:"/product/categorybrandrelation/brands/list",
	 	params:{
	 		"catId":data
	 	}
	 })
 }
 // 商品参数：
  function shopparameter(data){
 	 return request({
 	 	method: 'GET',
 	 	url:`/product/attrgroup/${data}/withattr`,
 	 	
 	 })
  }
export { getlogin,homemenu,shoplistdata,skuinfo,shoptree,shopbrand,shopparameter}