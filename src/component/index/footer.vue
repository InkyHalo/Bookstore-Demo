	<template>
		<main>
			<router-link to="/read"><i class="fa fa-book fa-2x" aria-hidden="true"></i><br />读书</router-link>
			<router-link to="/book"><i class="fa fa-list fa-2x" aria-hidden="true"></i><br />书城</router-link>
			<router-link to="/find"><i class="fa fa-search fa-2x" aria-hidden="true"></i><br />找书</router-link>
			<router-link to="/settings"><i class="fa fa-cogs fa-2x" aria-hidden="true"></i><br />设置</router-link>
		</main>
	</template>

	<style scoped>
		main{
			width: 100%;
			bottom: 0;
			left: 0;
			position: fixed;
			background-color: white;
		}
		main a{
			width: 25%;
			float: left;
			font-size: 12px;
			color: #596e87;
			text-decoration: none;
			text-align: center;
		}
		main img{
			width: 50%;
		}
	</style>