<template>
	<div>
		<h1>我是H1</h1>
		<div>用户6666666</div>
		<h2>{{userId}}</h2>
		<h1>{{$route.params.userId}}</h1>
		<button @click="btnClick()">按钮</button>
	</div>
</template>

<script>
	export default {
		name: 'user',
		computed: {
			userId() {
				return this.$route.params.userId
			}
		},
		methods:{
			btnClick(){
				console.log(this.$route)
				console.log(this.$router)
				console.log(this.name)
			}
		}
	}
</script>

<style>

</style>
