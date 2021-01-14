<template>
	<div>
		<el-steps :active="activeIndex - 0" finish-status="success" align-center>
			<el-step title="选择商品分类"></el-step>
			<el-step title="填写商品信息"></el-step>
			<el-step title="填写商品属性"></el-step>
			<el-step title="选择商品关联"></el-step>
		</el-steps>
		<el-tabs :tab-position="'left'" :before-leave="beforeTabLeave" type v-model="activeIndex" style="margin-top: 30px;">
			<el-tab-pane label="选择商品分类" name='0'>
				<card>
					<div class="shopfenlei">
						<div>
							<div class="block">
								<span class="demonstration"> 您最近使用的商品分类：</span>
								<aaa :categorys="options" @fromChild="shoptreeid"></aaa>
							</div>
						</div>
					</div>
					<el-col :span="24">
						<div class="iptbuttom">
							<div class="butboxfa">
								<div class="buttombox active2" @click="next">下一步填写商品属性</div>
							</div>
						</div>
					</el-col>
				</card>
			</el-tab-pane>
			<el-tab-pane label="填写商品信息" name='1'>
				<div class="bigbox">
					<div class="bodydiv">
						<el-col :span="24">
							<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin-top: 100px; margin-left: 100px;">
								<el-form-item label="商品名称" prop="name">
									<el-input v-model="ruleForm.name" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="副标题" prop="twoname">
									<el-input v-model="ruleForm.twoname" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="商品品牌" prop="region">
									<el-select v-model="ruleForm.region" class="iptwidth-200" placeholder="请选择品牌">
										<el-option v-for="(item,index)  in  shopbrand" :value="item.brandName" @click="aa(item)" :key="index"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="商品介绍" prop="desc">
									<el-input type="textarea" :autosize="{ minRows: 5}" class="iptwidth-300" v-model="ruleForm.desc"></el-input>
								</el-form-item>
								<el-form-item label="运费模板" prop="freight">
									<el-select v-model="ruleForm.freight" class="iptwidth-200" placeholder="请选择模板">
										<el-option label="区域一" value="shanghai"></el-option>
										<el-option label="区域二" value="beijing"></el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="商品货号" prop="shopnumber">
									<el-input v-model="ruleForm.shopnumber" class="iptwidth-200"></el-input>
									<p style="color: darkgray;">如果您不输入商品货号，系统将自动生成一个唯一的货号。</p>
								</el-form-item>
								<el-form-item label="商品售价" prop="shopmoney">
									<el-input v-model="ruleForm.shopmoney" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="市场价" prop="market">
									<el-input v-model="ruleForm.market" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="商品库存" prop="stock">
									<el-input v-model="ruleForm.stock" class="iptwidth-200"></el-input>
									<p style="color: darkgray;">该设置只对单品有效，当商品存在多规格货品时为不可编辑状态，库存数值取决于货品数量</p>
								</el-form-item>
								<el-form-item label="库存预警值" prop="Warning">
									<el-input v-model="ruleForm.Warning" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="计量单位" prop="measurement">
									<el-input v-model="ruleForm.measurement" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="商品重量" prop="weight">
									<el-input v-model="ruleForm.weight" class="iptwidth-200"></el-input>
								</el-form-item>
								<el-form-item label="赠送优币">
									<el-input v-model="ruleForm.coin" class="iptwidth-300"></el-input>
									<p style="color: darkgray;">购买该商品时赠送消费积分数</p>
								</el-form-item>
								<el-form-item label="赠送等级成长值">
									<el-input v-model="ruleForm.growth" class="iptwidth-300"></el-input>
									<p style="color: darkgray;">购买该商品时赠送等级积分数</p>
								</el-form-item>
								<el-form-item label="优币购买金额">
									<el-input v-model="ruleForm.amount" class="iptwidth-300"></el-input>
									<p style="color: darkgray;">(此处需填写金额)购买该商品时最多可以使用积分的金额</p>
								</el-form-item>
								<el-form-item label="预告商品" prop="key">
									<el-switch v-model="ruleForm.key"></el-switch>
								</el-form-item>
								<el-form-item label="商品上架" prop="key2">
									<el-switch v-model="ruleForm.key2"></el-switch>
								</el-form-item>
								<el-form-item label="商品推荐" prop="type">
									<el-checkbox-group v-model="ruleForm.type">
										<el-checkbox label=" 新品" name="type"></el-checkbox>
										<el-checkbox label="推荐" name="type"></el-checkbox>
									</el-checkbox-group>
								</el-form-item>
								<el-form-item label="服务保证" prop="type1">
									<el-checkbox-group v-model="ruleForm.type1">
										<el-checkbox label="无忧退货" name="type1"></el-checkbox>
										<el-checkbox label="快速退款" name="type1"></el-checkbox>
										<el-checkbox label="免费包邮" name="type1"></el-checkbox>
									</el-checkbox-group>
								</el-form-item>
								<el-form-item label="详细页标题" prop="delivery">
									<el-input v-model="ruleForm.title" class="iptwidth-300"></el-input>
								</el-form-item>
								<el-form-item label="详细页描述" prop="delivery">
									<el-input v-model="ruleForm.describe" class="iptwidth-300"></el-input>
								</el-form-item>
								<el-form-item label="商品关键词" prop="delivery">
									<el-input v-model="ruleForm.keyword" class="iptwidth-300"></el-input>
									<p style="color: darkgray; width:500px;">商品关键词请用空格分隔；有两个功能，一是可以作为站内关键词查询，在前台搜索框输入关键词后，能够搜索到该商品；二是作为搜索引擎收录使用.</p>
								</el-form-item>
								<el-form-item label="商品备注" prop="delivery">
									<el-input v-model="ruleForm.remarks" class="iptwidth-300"></el-input>
								</el-form-item>
								<el-form-item label="特惠促销">
									<el-radio-group v-model="ruleForm.Promotion">
										<el-radio label="是"></el-radio>
										<el-radio label="否"></el-radio>
									</el-radio-group>
									<el-row>
										<el-col :span="24">
											<el-date-picker v-model="ruleForm.Promotiontime" type="daterange" range-separator="至" start-placeholder="开始日期"
											 end-placeholder="结束日期">
											</el-date-picker>
											<el-input class="iptwidth-100" v-model="ruleForm.Promotionmoney" placeholder="请输入促销价格"></el-input>
										</el-col>
									</el-row>


								</el-form-item>

								<el-form-item label="商品限购">
									<el-radio-group v-model="ruleForm.restrictions">
										<el-radio label="是"></el-radio>
										<el-radio label="否"></el-radio>
									</el-radio-group>
									<el-row>
										<el-col :span="24">
											<el-date-picker v-model="ruleForm.restrictionstime" type="daterange" range-separator="至" start-placeholder="开始日期"
											 end-placeholder="结束日期">
											</el-date-picker>
											<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
										</el-col>
									</el-row>
								</el-form-item>
								<el-form-item label="会员价格">
									<el-radio-group v-model="ruleForm.vipmoney.money">
										<el-radio label="是"></el-radio>
										<el-radio label="否"></el-radio>
									</el-radio-group>

									<el-row>
										<div style="width: 500px;">
											<ul style="width: 100%; list-style: none; display: flex;border: 1px solid #DCDFE6;">
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
											</ul>
										</div>
									</el-row>
								</el-form-item>
								<el-form-item label="会员价格">
									<el-radio-group v-model="ruleForm.vipmoney.money">
										<el-radio label="是"></el-radio>
										<el-radio label="否"></el-radio>
									</el-radio-group>

									<el-row>
										<div style="width: 500px;">
											<ul style="width: 100%; list-style: none; display: flex;border: 1px solid #DCDFE6;">
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
											</ul>
										</div>
									</el-row>
								</el-form-item>
								<el-form-item label="会员价格">
									<el-radio-group v-model="ruleForm.vipmoney.money">
										<el-radio label="是"></el-radio>
										<el-radio label="否"></el-radio>
									</el-radio-group>

									<el-row>
										<div style="width: 500px;">
											<ul style="width: 100%; list-style: none; display: flex;border: 1px solid #DCDFE6;">
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
												<li style="width: 33%; height: 100%; line-height: 50px; text-align: center;">
													<p>黄金会员</p>
													<el-input class="iptwidth-100" v-model="ruleForm.restrictionsnumber" placeholder="请输入限购数量"></el-input>
												</li>
											</ul>
										</div>
									</el-row>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
									<el-button @click="resetForm('ruleForm')">重置</el-button>
								</el-form-item>
							</el-form>
						</el-col>
						<el-col :span="24">
							<div class="iptbuttom">
								<div class="butboxfa">
									<div class="buttombox active1" @click="huitui">上一步选择商品分类</div>
									<div class="buttombox active2"  @click="submitForm('ruleForm')">下一步填写商品属性</div>
								</div>
							</div>
						</el-col>
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="填写商品属性" name='2'>
				<div class="bigbox">
					<div class="bodydiv">
						<el-form ref="three" :model="three" :rules="thr" label-width="80px" style="margin-top: 100px;">
							<el-form-item label="属性类型">
								<el-select v-model="three.region" placeholder="请选择活动区域">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-row  style="background-color: rgba(249, 250, 252, 1);">
								<el-form-item label="服务保证" prop="type">
									<el-checkbox-group label="区域一"  v-model="three.type">
										<el-checkbox label="无忧退货" name="type"></el-checkbox>
										<el-checkbox label="快速退款" name="type"></el-checkbox>
										<el-checkbox label="免费包邮" name="type"></el-checkbox>
										<el-checkbox label="无忧退货" name="type"></el-checkbox>
										<el-checkbox label="快速退款" name="type"></el-checkbox>
										<el-checkbox label="免费包邮" name="type"></el-checkbox>
										<el-checkbox label="无忧退货" name="type"></el-checkbox>
										<el-checkbox label="快速退款" name="type"></el-checkbox>
										<el-checkbox label="免费包邮" name="type"></el-checkbox>
									</el-checkbox-group>
								</el-form-item>
								<el-form-item label="服务保证" prop="type">
									<el-checkbox-group label="区域一"  v-model="three.type">
										<el-checkbox label="无忧退货" name="type"></el-checkbox>
										<el-checkbox label="快速退款" name="type"></el-checkbox>
										<el-checkbox label="免费包邮" name="type"></el-checkbox>
										<el-checkbox label="无忧退货" name="type"></el-checkbox>
										<el-checkbox label="快速退款" name="type"></el-checkbox>
										<el-checkbox label="免费包邮" name="type"></el-checkbox>
										<el-checkbox label="无忧退货" name="type"></el-checkbox>
										<el-checkbox label="快速退款" name="type"></el-checkbox>
										<el-checkbox label="免费包邮" name="type"></el-checkbox>
									</el-checkbox-group>
								</el-form-item>
							</el-row>

				
							<div style="width: 100%; height: 100px;">
							</div>
							<el-form-item label="上市年份" prop="year">
								<el-select v-model="three.year" placeholder="请选择">
									<el-option label="区域一" value="shanghai"></el-option>
									<el-option label="区域二" value="beijing"></el-option>
								</el-select>
							</el-form-item>
							<el-form-item label="主材含量" prop="content">
								<el-input v-model="three.content" class="iptwidth-300"></el-input>
							</el-form-item>
							<el-form-item label="适用对象" prop="obj">
								<el-input v-model="three.obj" class="iptwidth-300"></el-input>
							</el-form-item>
							<el-row style="display: flex; align-items:center; justify-content:center;">
								<el-card style="width: 20%;">
									<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
									<div style="padding: 14px;">
										<div class="bottom clearfix">
											<el-button type="text" class="button">商品主图</el-button>
											<el-button type="text" class="button">操作按钮</el-button>
										</div>
									</div>
								</el-card>
								<el-card style="width: 20%;">
									<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
									<div style="padding: 14px;">
										<div class="bottom clearfix">
											<el-button type="text" class="button">商品主图</el-button>
											<el-button type="text" class="button">操作按钮</el-button>
										</div>
									</div>
								</el-card>
								<el-card style="width: 20%;">
									<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
									<div style="padding: 14px;">
										<div class="bottom clearfix">
											<el-button type="text" class="button">商品主图</el-button>
											<el-button type="text" class="button">操作按钮</el-button>
										</div>
									</div>
								</el-card>
								<el-card style="width: 20%;">
									<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
									<div style="padding: 14px;">
										<div class="bottom clearfix">
											<el-button type="text" class="button">商品主图</el-button>
											<el-button type="text" class="button">操作按钮</el-button>
										</div>
									</div>
								</el-card>
								<el-card style="width: 20%;">
									<img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
									<div style="padding: 14px;">
										<div class="bottom clearfix">
											<el-button type="text" class="button">上传图片</el-button>
											<el-button type="text" class="button">操作按钮</el-button>
										</div>
									</div>
								</el-card>
							</el-row>
							<el-button type="primary">上传图片</el-button>
							<el-button type="primary">从图片库选择</el-button>
							<!-- <editor-bar v-model="detail" :isClear="isClear" @change="change"></editor-bar> -->
							<el-col :span="24">
								<div class="iptbuttom">
									<div class="butboxfa">
										<div class="buttombox active1" @click="huitui">上一步选择商品分类</div>
										<div class="buttombox active2" @click="next">下一步填写商品属性</div>
									</div>
								</div>
							</el-col>
						</el-form>
						<!-- 	<el-tabs type="border-card">
						  <el-tab-pane label="用户管理">用户管理</el-tab-pane>
						  <el-tab-pane label="配置管理">配置管理</el-tab-pane>
						  <el-tab-pane label="角色管理">角色管理</el-tab-pane>
						  <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
						</el-tabs> -->
					</div>
				</div>
			</el-tab-pane>
			<el-tab-pane label="选择商品关联" name='3'>
				<div class="bigbox">
					<div class="bodydiv">
								<template>
									<el-table :data="tableData" border style="width: 90%;margin: 0 auto;">
										<el-table-column prop="date" label="尺码" width="100">
										</el-table-column>
										<el-table-column prop="name" label="颜色" width="100">
										</el-table-column>
										<el-table-column prop="address" label="销售价格">
										</el-table-column>
										<el-table-column prop="address" label="商品库存">
										</el-table-column>
										<el-table-column prop="address" label="库存预警值">
										</el-table-column>
										<el-table-column label="操作" width="60">
											<template slot-scope="scope">
												<el-button type="text" size="small">删除</el-button>
											</template>
										</el-table-column>
									</el-table>
								</template>
						
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
		<!-- <el-button style="margin-top: 12px;" @click="next">下一步</el-button> -->
	</div>
</template>
<script>
	// import EditorBar  from "../../components/wangeditor.vue"
	import card from "../../components/kapian.vue"
	import aaa from "../../components/category-cascader.vue"
	import {
		shoptree,
		shopbrand,
		shopparameter

	} from "../../network/get.js"
	export default {
		components: {
			card,
			aaa
			// EditorBar
		},
		data() {
			return {
				// isClear: false,
				//           detail:"",
				activeName: "first",
				activeIndex: "0",
				options: [],
				// 分类id
				shopid: null,
				ruleForm: {
					name: '',
					region: '', //品牌
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: '',
					twoname: "", //副标题
					freight: "", //运费
					shopnumber: "", //货号
					shopmoney: '', //商品售价
					market: '', //市场价
					stock: '', //库存
					Warning: '', //预警值
					measurement: '', //计量单位
					weight: '', //商品重量
					coin: "", //优币
					growth: "", //成长值
					amount: "", //金额

					key: false, //预告商品
					key2: false, //商品上架

					type: [], //商品推荐
					type1: [], //服务保证
					title: "", //详情页标题
					describe: "", //详细页描述
					keyword: "", //商品关键词
					remarks: "", //备注
					Promotion: "", //商品促销
					Promotionmoney: "", //促销价格
					Promotiontime: "", //促销时间
					restrictions: "", //限购
					restrictionstime: "", //限购时间
					restrictionsnumber: "", //限购数量
					vipmoney: {
						money: "",
						one: "",
						two: "",
						three: ""
					}, //会员价格








				},
				shopbrand: null, //品牌数据
				form: {
					name: "",
					delivery: false,
					type: [],
					type1: []

				},
				three: {
					region: '',
					type: [],
					year: [],
					content: '',
					obj: ""


				},
				thr: {
					region: [{
						required: true,
						message: '请输入商品售价',
						trigger: 'blur'
					}],
				},
				rules: {
					shopmoney: [{
						required: true,
						message: '请输入商品售价',
						trigger: 'blur'
					}],
					name: [{
							required: true,
							message: '请输入商品名称',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 10,
							message: '长度在 1 到 10 个字符',
							trigger: 'blur'
						}
					],
					stock: [{
						required: true,
						message: '请输入库存',
						trigger: 'blur'
					}],
					twoname: [{
						required: true,
						message: '请输入副标题',
						trigger: 'blur'
					}, ],
					region: [{
						required: true,
						message: '请选择商品品牌',
						trigger: 'change'
					}],
					freight: [{
						required: true,
						message: '请选择运费模板',
						trigger: 'change'
					}],
					shopnumber: [{
							required: true,
							message: '请输入货号',
							trigger: 'blur'
						},
						{
							min: 1,
							max: 10,
							message: '长度在 1 到 10 个字符',
							trigger: 'blur'
						}
					],
					date1: [{
						type: 'date',
						required: true,
						message: '请选择日期',
						trigger: 'change'
					}],
					date2: [{
						type: 'date',
						required: true,
						message: '请选择时间',
						trigger: 'change'
					}],
					// type: [{
					// 	type: 'array',
					// 	required: true,
					// 	message: '请至少选择一个活动性质',
					// 	trigger: 'change'
					// }],
					resource: [{
						required: true,
						message: '请选择活动资源',
						trigger: 'change'
					}],
					desc: [{
						required: true,
						message: '请填写活动形式',
						trigger: 'blur'
					}]
				},
				tableData: [{
					date: '1',
					name: '2',
					address: '3 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路1517弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路1519弄'
				}, {
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1516 弄'
				}]
			};
		},
		created() {
			// 商品分类
			shoptree({}).then(res => {
				this.options = res.data
				console.log(res)
			})
		},
		mounted() {


		},
		methods: {
			change(val) {
				console.log(val)
			},
			submitForm(formName) {
				let that = this
				this.$refs[formName].validate((valid) => {
					if (valid) {
                       let a = Number(this.activeIndex)
                       a++
                       if (a > 4) {
                       	a = 0
                       }
                       this.activeIndex = a + ""
						
					} else {
							this.$message.error('请先填写必填项')
						// console.log(this.ruleForm)
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			shoptreeid(v) {
				this.shopid = v
				if (this.shopid[2]) {
					let catid = this.shopid[2]
					console.log(catid)
					shopbrand(catid).then(res => {
						if (res.data) {
							this.shopbrand = res.data
						}
						console.log(res)
					})
					shopparameter(catid).then(res=>{
						console.log(res)
					})
				}
				console.log(this.shopid, 66666)
			},
			next() {

				let a = Number(this.activeIndex)
				a++
				if (a > 4) {
					a = 0
				}
				this.activeIndex = a + ""
				console.log(this.activeIndex)
			},
			huitui(){
					let a = Number(this.activeIndex)
					a--
					if(a<=0){
						a=0
					}
					this.activeIndex = a + ""
			},
			beforeTabLeave(activeName, odlActiveName) {
				console.log(activeName, odlActiveName)
				// 未选中商品分类阻止Tab标签跳转
				console.log(this.shopid)
				if (odlActiveName === '0' && this.shopid === null) {
					this.$message.error('请先选择商品分类')
					this.activeIndex=0
					return false
				}
			},
			// tab
			handleClick(tab, event) {
				console.log(tab, event);
			},
			aa(item){
				console.log(item)
			}

		},

	}
</script>

<style scoped="scoped">
	.active1 {
		border: 1px solid rgb(26, 188, 156);
		color: rgb(26, 188, 156);
	}

	.active2 {
		background-color: rgb(26, 188, 156);
		color: #FFFFFF;
	}

	.butboxfa {
		/* position: absolute;

		top: 58%;

		left: 40%;

		margin-top: -50px;

		margin-left: -50px; */
	}

	.iptbuttom {
		width: 100%;
		height: 200px;
		/* border-top: 1px solid darkgray; */
		display: flex;

		justify-content: center;

		align-items: center;
	}

	.buttombox {
		width: 180px;
		height: 35px;
		display: inline-block;
		margin-left: 10px;
		text-align: center;
		line-height: 35px;
		/* border: 1px solid black; */
	}

	.iptwidth-200 {
		width: 200px;
	}

	.iptwidth-100 {
		width: 100px;
	}

	.iptwidth-300 {
		width: 300px;

	}

	/deep/ .el-tabs__nav-scroll {
		display: none;
	}

	.shopfenlei {
		width: 100%;
		height: 100%;
	}

	.shopfenlei>div {
		margin-top: 50px;
		text-align: center;
	}

	.bigbox {
		width: 100%;
		display: flex;
		position: relative;
	}

	.title {
		width: 30%;
		z-index: 5;
		position: absolute;
		top: 8%;
		left: 8%;
		max-width: 200px;
		height: 50px;
		line-height: 50px;
		text-align: center;
		color: #FFFFFF;
		background-image: url(../../assets/u2891.svg);
		background-repeat: no-repeat;
		background-size: auto;
		/* bac */
		/* background-position: ; */
	}

	.bodydiv {
		margin: 0 auto;
		width: 1000px;
		height: 100%;
		/* height: 500px; */
		min-height: 500px;
		/* height: 800px; */
		/* height: 500px; */
		background-color: #FFFFFF;
	}

	.time {
		font-size: 13px;
		color: #999;
	}

	.bottom {
		margin-top: 13px;
		line-height: 12px;
	}

	.button {
		padding: 0;
		/* float: right; */
	}

	.image {
		width: 100%;
		display: block;
	}

	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}

	.clearfix:after {
		clear: both
	}
</style>
