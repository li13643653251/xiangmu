<template>
	<div>
		<menutop :title="title"></menutop>
		<div class="jiange"></div>



		<div style="background-color: #F3F3F3; width: 100%;">
			<div class="toptitle">
				<div>数据列表</div>
			</div>
			<div class="shopalllist">
				<div>
					<div class="listtitle">
						新手任务
						<span> 新手任务每个用户只奖励一次，相关值必须为大于0的整数</span>
					</div>
				</div>

				<div class="listbox">
					<ul class="listul">
						<li>
							<div class="liname">
								新手奖励
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								设置头像
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								设置昵称
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								完善个人信息
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								成功关注1位达人
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								首次分享商品或专题
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								首次收藏商品或专题
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>
						</li>
						<li>
							<div class="liname">
								首次购物成功
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>
						</li>
						<li>
							<div class="liname">
								首次完成评价
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="shopalllist">
				<div>
					<div class="listtitle">
						日常任务
						<span> 日常任务可以奖励多次，相关值必须为大于0的整数</span>
					</div>
				</div>
				<div class="listbox">
					<ul class="listul">
						<li>
							<div class="liname">
								每日登录
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								每日签到
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								分享商品或专题
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>
						</li>
						<li>
							<div class="liname">
								邀请好友
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								好友首次下单成功
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>
						<li>
							<div class="liname">
								购买天数达标
							</div>
							<div style=" display: flex;">
								<div class="liipt">
									<el-input placeholder="请输入成长值" v-model="jiangli.ipt1">
										<template slot="append">分</template>
									</el-input>
								</div>
								<div class="liipt">
									<el-input placeholder="请输入优币" v-model="jiangli.ipt2">
										<template slot="append">个</template>
									</el-input>
								</div>
							</div>

						</li>

					</ul>

				</div>
	             <div class="tijiao">
					 <div style="width: 100px; margin: 0 auto; margin-top: 100px;">
						 <el-button  class="btn">提交</el-button>
					 </div>
	             </div>
			</div>
		
		</div>

	</div>
</template>

<script>
	import menutop from "../../components/menutop.vue" //标题
	export default {
		data() {
			return {
				title: "商品入库",
				jiangli: {
					ipt1: "",
					ipt2: ""
				}

			}
		},
		components: {
			menutop
		},
		methods: {

		}

	}
</script>

<style>
	.jiange {
		width: 100%;
		height: 20px;
	}



	.toptitle {
		display: flex;
		justify-content: space-between;
		line-height: 50px;
		width: 100%;
		height: 50px;
	}

	.toptitle>div {
		margin: 0 20px;
	}

	/* .shopalllist>div{
	margin-left: 50px;
} */
	.shopalllist {
		width: 100%;
		/* height: 200px; */
		background-color: #ffffff;
		/* padding: 20px 50px ; */
		/* padding-right: 50px; */
	}

	.listtitle {
		/* width: 100%; */

		height: 80px;
		font-size: 18px;
		line-height: 80px;
		padding-left: 50px;
		/* margin-left: 50px; */
		/* padding: 20px 50px ; */
		color: #666666;
	}

	.listtitle>span {
		font-size: 12px;
		color: #CCCCCC;
	}

	.listbox {
		/* padding: 20px 50px ; */
		width: 100%;
		/* border: 1px solid #CCCCCC; */
		/* height: 100%; */
	}

	.listul {
		padding: 0 50px;
		/* width: 100%; */
	}

	.listul>li {
		display: flex;
		list-style: none;
		line-height: 50px;
		/* width: 100%; */
		border: 1px solid #CCCCCC;
		height: 50px;

		/* margin: 0 20px; */

	}

	.liname {
		width: 20%;
		background-color: #F9FAFC;
		line-height: 50px;
		text-align: right;
		padding-right: 20px;
		/* border: 1px solid #CCCCCC; */
	}

	.liipt {
		margin-left: 200px;
		/* display: flex; */
		line-height: 50px;
	}

	.tijiao {
		width: 100%;
		height: 200px;
		/* margin: 0 auto; */
		/* line-height: 50px; */
		/* background-color: rgba(26, 188, 156, 1); */
	/* 	margin: 0 auto;
        margin-top: 100px;
		margin-bottom: 100px; */
	}
	.btn{
		    background-color: rgba(26, 188, 156, 1);
        color: #FFFFFF;
		
	}
</style>
