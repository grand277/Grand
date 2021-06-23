<template>
	<div id="app">
		<!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
		<router-link tag="button" replace v-bind:to="'/user/'+userId">用户</router-link>
		<router-link to="/about" tag="button" replace>关于我们</router-link>
		<router-link to="/home" replace>我的</router-link>
		<!-- <router-link to="/Profile">档案</router-link> -->
		<router-link :to="{path:'/Profile',query:{name:'grand',height:190}}">档案</router-link>
		<!-- <router-view></router-view> -->
		<keep-alive>
			<router-view></router-view>
		</keep-alive>
	</div>
</template>

<script>
	// import HelloWorld from './components/HelloWorld.vue'

	export default {
		name: 'App',
		data() {
			return {
				userId: '111',
			}
		}
		// components: {
		//   HelloWorld
		// }
	}
</script>

<style>
	/* 	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	} */
</style>
