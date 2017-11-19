<template>
	<div id="container">
		<p class="history">历史</p>
		<div class="list">
			<ul>
				<li v-for="v in msg">
					<div class="bimg">
						<!--<img :src="v.images" width="100px" />-->
						<img v-lazy="v.images" width="100px" height="133px" />
					</div>
					<div class="book-detail">
						<h2>{{v.name}}</h2>
						<p>{{v.intro}}</p>
						<div class="author">
							<i class="fa fa-user-o"></i>
							<span>
								{{v.author}}
							</span>
						</div>
						<div class="catego">
							<span>{{v.n}}</span>
							<span>{{v.serialize}}</span>
							<span>{{v.wordcount}}万字</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
			}
		},
		mounted() {
			this.$http.get('http://39.108.14.248:3333/type?type=4').then(function(res) {
				this.msg = res.body;
				console.log(this.msg)
			})
		}
	}
</script>

<style>
	.history{
		position: fixed;
		z-index: 3;
		top: 1%;
		left: 12%;
		color: #FFF;
		font-size: 20px;
		font-weight: 600;
	}
	.list{
		margin-top: 42px;
		padding: 15px;
		background-color: #fff;
	}
	.list ul li {
		display: flex;
		margin-bottom: 14px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ddd;
	}
	.bimg {
		width: 80px;
	}
	
	.book-detail {
		display: block;
		position: relative;
		flex: 1;
		padding: 0;
		margin-left: 30px;
	}
	
	.book-detail h2 {
		font-size: 18px;
		margin-bottom: 10px;
		font-weight: bold;
	}
	
	.book-detail p {
		width: 100%;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		overflow: hidden;
		font-size: 14px;
		color: #969ba3;
	}
	
	.author {
		position: absolute;
		left: 0;
		bottom: 5px;
		color: #969BA3;
		font-size: 13px;
		display: block;
	}
	
	.fa.fa-user-o {
		position: relative;
		/*bottom: -3px;*/
		left: 5px;
		display: inline-block;
		width: 16px;
		height: 16px;
		color: #969BA3;
	}
	
	.catego {
		position: absolute;
		right: 0;
		bottom: 5px;
		float: right;
		color: #969ba3;
		font-size: 10px;
	}
	
	.catego span {
		border: 1px solid #ccc;
		border-radius: 2px;
		padding: 0 2px;
	}
	
	.catego span:nth-child(2) {
		color: #ed424b;
	}
	
	.catego span:nth-child(3) {
		color: #4284ed;
	}
</style>