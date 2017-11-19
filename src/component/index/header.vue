	<template>
		<mt-header class="header" title="" fixed="" style="font-size: 16px;">
			<router-link to="/" slot="left">
			    <mt-button><i @click="back" class="fa fa-arrow-left fa-lg"></i></mt-button>
			</router-link>
			  <mt-button slot="right"><i @click="home" class="fa fa-refresh fa-lg"></i></mt-button>
			</mt-header>
		</template>
	
	<script type="text/javascript">
		export default{
		methods:{
			back(){
				this.$router.go(-1)
			},
			home(){
				this.$router.go('/')
			}
		}
	}
	</script>
	<style scoped>
		.header{
			background-color: #fd6467;
			z-index: 2;
		}
		/*.top{
			position: fixed;
			top: 0;
			margin: 0;
			width: 100%;
			background-color: #fd6467;
			color: white;
			height: 6vh;
			padding-left: 10px;
			padding-right: 10px;
			font-size: 30px;
		}*/
		/*.fa.fa-plus{
			position: absolute;
			left: 75%;
			margin-top: 5px;
			position: absolute;
			left: 75vw;
		}*/
		/*input{
			position: absolute;
			border-radius: 20px;
			width: 60vw;
			height: 3vh;
			top: 6px;
			left: 16%;
		}*/
	</style>