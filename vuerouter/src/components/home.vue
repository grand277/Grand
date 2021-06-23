<template>
	<div>
		<div>我的</div>
		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'home',
		// 组建被创建后执行
		created() {
			document.title = "首页"
		},
		// 界面发生刷新的时候使用
		updated() {

		},
		// 销毁缓存
		destroyed() {
			console.log("destroyed")
		}
	}
</script>

<style>

</style>
