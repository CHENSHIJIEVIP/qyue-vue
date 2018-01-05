<template>
	<div id="home">
		<!-- banner轮播图 -->
		<div class="banner">
			<div class="swiperBox">
				<swiper></swiper>
			</div>
		</div>
		<!-- 首页导航 -->
		<div class="homeNav">
			<div class="homeImg"><img src="../../assets/images/download.png" alt="icon">年轻哪能不放纵，约起来</div>
			<div class="homeList clearfix">
				<ul>
					<li><a href="#"><img src="../../assets/images/icon01.jpg" alt=""><span>新用户</span></a></li>
					<li><router-link to="/home/runOrWalk"><img src="../../assets/images/icon02.jpg" alt=""><span>我的约跑</span></router-link></li>
					<li><router-link to="/home/runOrWalk"><img src="../../assets/images/icon03.jpg" alt=""><span>我的约行</span></router-link></li>
					<li><a href="#"><img src="../../assets/images/icon04.jpg" alt=""><span>去发布</span></a></li>
				</ul>
			</div>
		</div>
		<!-- 热门活动列表 -->
		<div class="hotList">
			<div class="hotHeader"><i class="icon iconHot">&#xe678;</i>热门活动</div>
			<div class="hot" v-for="(item, index) in data">
				<div class="lineBox">
					<router-link :to="{ path: '/walking/'+ item.objectId }">
						<div class="imgBox">
							<div class="hotImg"><img :src="item.travelPic"></div>
							<div class="i-activity p-number">{{item.joinNum}}人报名</div>
							<div class="i-activity p-free">免费</div>
							<div class="activity-s p-signup">正在报名</div>
						</div>
						<div class="hotBox clearfix">
							<div class="hotLeft hotTitle">{{item.title}}</div>
							<div class="hotRight hotSee"><i class="icon">&#xe62a;</i>{{item.clicks}}</div>
						</div>
						<div class="hotBox clearfix">
							<div class="hotLeft hotName">{{item.releaseUsername}}</div>
							<div class="hotRight hotTime">{{item.releaseTime}}</div>
						</div>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	// 导入轮播图组件
	import Swiper from '../../components/Swiper'

	import {API} from '../../api/api'

	export default {
		name:'home',
		props: ["travel"],
		data(){
			return{
				data : []
			}
		},
		// 注册轮播图组件
		components:{
			Swiper
		},
		created(){
			this.$http({
                method:"get",
                url:API+"6500/travelList"
        	}).then(res => {
                console.log(res.data);
                this.data = res.data;
            }, err => {
            	console.log(err);
            });
		}
	}
</script>
<style scoped lang="scss">
	@import '../../assets/css/function';
	/* .sports{
	margin-top: px2rem(200px);
	} */

	.hotHeader .iconHot{
		color: #F14343;
        font-size: px2rem(90px);
        // vertical-align: middle;
        padding-right: px2rem(40px);
        padding-top: px2rem(80px);
	}

	.icon {
		color: #7e8c8d;
		font-size: px2rem(90px);
		padding-right: px2rem(3px);
	}

	#home{
    	width: 100%;
		background-color: #f5f5f5;
	}

	#home .homeNav{
		margin-bottom: px2rem(10px);
		background-color: #ffffff;
		padding: px2rem(60px) 0;
	}

	#home .homeImg{
		border-bottom: 1px solid #000;
		width:px2rem(1200px);
		margin: 0 auto px2rem(100px);
		text-align: center;
		vertical-align: middle;
	}

	#home .homeList li{
		float: left;
		width: 25%;
		text-align: center;
	}

	#home .homeList li a{
		color: #7e8c8d;
	}

	#home .homeList li img{
	    width: px2rem(450px);
	    border-radius: 50%;
	}

	#home .homeList li span{
		display: block;
		height: px2rem(150px);
		line-height: px2rem(150px);
		font-size: 14px;
	}

	#home .hotList{
		background-color: #ffffff;
		margin-bottom: px2rem(200px);
	}

	#home .hotHeader{
		background-color: #ffffff;
		height: px2rem(200px);
		line-height: px2rem(200px);
		padding-left: 10px;
		padding: 10px 15px;
		font-size: px2rem(80px);
		margin-top: px2rem(80px);
		/* font-family: 'Avenir', Helvetica, Arial, sans-serif;
		    	-webkit-font-smoothing: antialiased; */
	}

	#home .hot{
		/*width: 99%;*/
		// border-top: 1px  solid #f1f1f1;
		// border-top: 1px  solid #76d49b;
		// border-bottom: 1px  solid #f1f1f1;
		padding: px2rem(60px) px2rem(60px);
		margin-bottom: 10px;
		margin-top: px2rem(60px);
	}

	.lineBox{
		// border: 1px solid red;
		border-bottom: 1px  solid #f1f1f1;
	}

	.hotImg img{
		display: block;
		width: 100%;
		height: px2rem(800px);
	}

	.imgBox{
		position: relative;
	}

	.p-number{
		background: rgba(0,0,0,.37);
		position: absolute;
		bottom: px2rem(660px);
		right: 0;
		color: #fff;
		border-radius: 10px 0 0 10px;
		padding: px2rem(5px);
	}

	.p-signup{
		background: rgba(0,125,255,.48);
		position: absolute;
		
		bottom: px2rem(30px);
		left: px2rem(30px);
		padding: px2rem(5px);
		color: #fff;
	}

	.p-free {
	    background: rgba(4,255,4,.48);
	    position: absolute;
	    bottom: px2rem(660px);
		left: px2rem(30px);
	    color: #fff;
	    border-radius: 4px;
	    padding: px2rem(5px);
	}

	/*列表*/
	#home .hotBox{
	 	padding: 7px 10px;
	 	/*border: 1px solid red;*/
	}

	#home .hotLeft{
		float: left;
	}

	#home .hotRight{
		float: right;
		color: #7e8c8d;
	}

	#home .hotTitle{
		color: #000;
		font-weight: bolder;
		font-size: 16px;
	}

	#home .hotName{
		/*color: #3c3c3c;*/
	    color: #007aff;
		font-weight: bolder;
		font-size: 16px;
	}


</style>
