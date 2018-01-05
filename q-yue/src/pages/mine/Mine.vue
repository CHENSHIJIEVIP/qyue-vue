<template>
	<div id="mine">
		<div class="headPortrait">
			<div class="portraitBox" >
				<div class="portrait"><img src="../../assets/images/titlePic.png"></div>
				<div class="infoBox" >
					<div v-if='hideUserInfo'>
						<router-link to="/user/login" class="login">登录</router-link>
						<router-link to="/user/regist" class="Register">注册</router-link>
					</div>
					<div v-else class="userName">
						{{name}}
					</div>
				</div>
			</div>
		</div>
		<div class="navList clearfix">
			<ul>
				<li><a href="#">发布</a></li>
				<li><router-link to="/mine/runOrWalk">约跑</router-link></li>
				<li><router-link to="/mine/runOrWalk">约行</router-link></li>
			</ul>
		</div>

		<div class="mainList">
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon01.png"><span>学生认证</span></div>
					<div class="listRight"><span></span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon02.png"><span>我的详情</span></div>
					<div class="listRight"><span></span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon03.png"><span>消息通知</span></div>
					<div class="listRight"><span></span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
		</div>

		<div class="mainList">
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon04.png"><span>邀请好友</span></div>
					<div class="listRight"><span></span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon05.png"><span>选择高校</span></div>
					<div class="listRight"><span></span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
		</div>

		<div class="mainList whiteSpace lastBottom">
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon06.png"><span>设置</span></div>
					<div class="listRight"><span></span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
			<div class="list">
				<a href="#">
					<div class="listLeft"><img src="../../assets/images/lisIcon07.png"><span>联系客服</span></div>
					<div class="listRight"><span class="rightPhone">18612368835</span><span></span><span></span><img src="../../assets/images/rightIcon.png" alt="ddd"></div>
				</a>
			</div>
		</div>

		<!-- 从vuex中读取状态的组件 -->
		<!--<count></count>-->

	</div>
</template>
<script>
	// import Count from '../../components/count'

	import { mapGetters } from 'vuex'

	export default{
		name:'mine',
		data(){
			return {
				name : ''
			}
		},
		components:{
		},
		methods: {
			
		},
		computed: {
			hideUserInfo(){
				if(localStorage.loginStatus){
					console.log(localStorage.loginStatus);
					var infoObj = JSON.parse(localStorage.userInfo);
					this.name = infoObj.username;
					console.log(name);
					return false;	
				}
				else{
					return true;
				}
			}
	  	}
	}

</script>

<style scoped lang="scss">

	@import '../../assets/css/function';

	.whiteSpace{
		margin-bottom: px2rem(240px) !important;
	}

	#mine{
		background-color: #f5f5f5;
		/*background-color: blue;*/
    	/*width: 100%;*/
	}

	.headPortrait{
		height: 100%;
		width: 100%;
		background-color: #76d49b;
		margin-top: px2rem(200px);
	}

	.portraitBox{
		margin: 0 auto;
		width: px2rem(1200px);
	}

	.portrait{
		text-align: center;
	}

	.infoBox{
	    // letter-spacing: -999px;
	    margin: 12px 0;
	    text-align: center;
	}

	.infoBox a{
		display: inline-block;
		width: px2rem(580px);
		height: px2rem(200px);
		// letter-spacing: 0;
		text-align: center;
		line-height: px2rem(200px);
	}

	.userName{
		width: 100%;
		// background-color:red;
		color: #ffffff;
		font-size: px2rem(130px)
	}

	.login{
	    background: #2ad2c9;
	    color: #fff;
	    border-radius: 5px 0 0 5px;
	}

	.Register{
	    color: #2ad2c9;
	    background: #fff;
	    border-radius: 0 5px 5px 0;
	}

	.navList{
		margin-bottom: 18px;
		background-color: #ffffff;
	}

	.navList li{
		float: left;
		width: 33.33%;
		padding: px2rem(50px) 0;
	}

	.navList li:nth-child(2) a{
		border-left: 1px solid #89f0eb;
		border-right: 1px solid #89f0eb;
	}

	.navList li a{
		display: inline-block;
		width: 100%;
		color: #7e8c8d;
		height: px2rem(220px);
		line-height: px2rem(220px);
		text-align: center;
	}

	/*列表*/
	.mainList{
		margin-bottom: px2rem(80px);
		background-color: #ffffff;

	}

	.mainList .list{
		height: px2rem(260px);
		border-bottom: 1px solid #f5f5f5;

	}

	.mainList .list a{
		width: 100%;
		display: block;
		height: 100%;
		line-height: px2rem(260px);
		color: #555;
	}

	.listLeft img{
		vertical-align: middle;
		margin: 0 px2rem(50px);
	}

	.list .listLeft{
		float: left;
	}

	.list .listRight{
		float: right;
		padding-right: px2rem(30px);
	}

	.list .listRight img{
		vertical-align: middle;
	}

	.list .listRight .rightPhone{
		vertical-align: sub;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
		font-size: smaller;
		font-weight: normal;
	}

	.lastBottom{
		border-bottom: px2rem(80px) solid #f5f5f5;
	}

</style>
