<template>
	<div id="headerBox">
		<div class="box">
			<p class="titleLogo">{{msg}}</p>
			<p class="titleList">三</p>

			<!-- Drawer -->
		<!-- <drawer :show="drawerShow" 
		    :pos="pos" 
		    :tran="tran"
		    @change-show="changeDrawerShow"
		    @on-hide="onHide"
		    @on-show="onShow">
		    <div class="layout" slot="drawer" >
		      <h2><a href="#">bajian drawer</a></h2>
		      <ul>
		        <li v-for="item in navItems"><a :href="'#'+item">{{item}}个人观点发给</a></li>
		      </ul>
		    </div>
		    <button v-on:click="directionFlip">directionChange</button><br><br>
		    <button v-on:click="tranFlip">tranChange</button><br><br>
		    <button v-on:click="drawerToggle">toggle</button>
		  </drawer> -->

		</div>
		<div class="whiteBox"></div>
	</div>
</template>
<script>
	import Drawer from './../components/plugs/vux/Drawer'
	export default {
	  	name: 'headerBox',
	  	components:{
   			Drawer
		},
		data(){
	     return {
	     	msg: 'Q约',
	       pos: 'left',
	       tran: 'overlay',
	       drawerShow: false,
	       navItems: [
	       'decide the width u like',
	       'Item2',
	       'Item3',
	       'Item4',
	       'Item5'
	       ]
	     }
	   },
	   methods: {
		     /*directionFlip() {
		       this.pos=this.pos =='left'?'right':'left'
		       setTimeout(()=>{
		        this.drawerToggle()
		      },500)
		     },*/
		     tranFlip() {
		       this.tran=this.tran =='overlay'?'overlay':'overlay'
		       console.log(typeof this.tran)
		       setTimeout(()=>{
		        this.drawerToggle()
		      },0)
		     },
		     drawerToggle() {
		       this.drawerShow=!this.drawerShow
		     },
		     onHide() {
		       console.log('hide');
		     },
		     changeDrawerShow(state) {
		      this.drawerShow=state;
		      console.log('drawer was changed from components');
		    },
		    onShow() {
		     console.log('show');
		   }
		 },
	}
</script>
<style scoped>
	.whiteBox{
		height: 70px;
	}

	#headerBox .box{
		/*width: 100%;*/
		height: 70px;
		background: #76d49b;
		line-height: 70px;
		color: #fff;
		font-size: larger;
		padding: 0 20px;
		position: fixed;
	    left: 0;
	    right: 0;
	    top: 0;
	    margin-bottom: 70px;
	}
	
	#headerBox .titleLogo{
		float: left;
	}

	#headerBox .titleList{
		float: right;
	}



</style>