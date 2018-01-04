<template>
	<div id="count">
		<h2>{{title}}</h2>
		<hr>
		<h3>{{$store.state.count}}</h3>
		<div>
			<button @click="$store.commit('add')">+</button>
			<button @click="$store.commit('reduce')">-</button>
		</div>
	</div>
</template>
<script>
	import store from '@/vuex/store'
	
	export default{
		name:'count',
		data(){
			return{
				title:'vuex'
			}
		},
		store
	} 
</script>
<style lang="scss" scoped type="text/css">
	#count{
		border: 1px solid red;
	}
</style>