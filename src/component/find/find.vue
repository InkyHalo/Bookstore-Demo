<template>
	<div class="container">
		<mt-search class="find" v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
		<mt-index-list>
			<mt-index-section index="A">
				<mt-cell title="Aaron"></mt-cell>
				<mt-cell title="Alden"></mt-cell>
				<mt-cell title="Austin"></mt-cell>
			</mt-index-section>
			<mt-index-section index="B">
				<mt-cell title="Baldwin"></mt-cell>
				<mt-cell title="Braden"></mt-cell>
			</mt-index-section>
			<mt-index-section index="C">
				<mt-cell title="Caldwin"></mt-cell>
				<mt-cell title="Craden"></mt-cell>
			</mt-index-section>
			<mt-index-section index="D">
				<mt-cell title="Daldwin"></mt-cell>
				<mt-cell title="Draden"></mt-cell>
			</mt-index-section>
			<mt-index-section index="Z">
				<mt-cell title="Zack"></mt-cell>
				<mt-cell title="Zane"></mt-cell>
			</mt-index-section>
		</mt-index-list>
	</div>
</template>
<script>
</script>
<style scoped>
	.container{
		position: relative;
		margin-top: 40px;
	}
	.find{
		display: inline;
	}
</style>