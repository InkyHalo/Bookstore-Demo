<template>
	<div class="container">
		<div class="newbook" style="padding: 6px;">
			<h1 style="margin: 10px 0px 10px;">新书抢先</h1>
			<div class="hot-nav">
				<ul>
					<li v-for="v in msg">
						<div class="bimg">
							<!--<img :src="v.images" width="100px" />-->
							<img v-lazy="v.images" width="100px" />
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
								<span>{{v.type}}</span>
								<span>{{v.serialize}}</span>
								<span>{{v.wordcount}}万字</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="hotbook" style="padding: 6px;">
			<h1 style="margin: 10px 0px 10px;">热门小说</h1>
			<div class="hot-nav">
				<ul>
					<li v-for="v in msg1">
						<div class="bimg">
							<img v-lazy="v.images" width="100px" />
							<!--<img :src="v.images" width="100px" />-->
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
								<span>{{v.type}}</span>
								<span>{{v.serialize}}</span>
								<span>{{v.wordcount}}万字</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="like" style="padding: 6px;">
			<h1 style="margin: 10px 0px 10px;">猜你喜欢</h1>
			<div class="hot-nav">
				<ul>
					<li v-for="v in msg2">
						<div class="bimg">
							<!--<img :src="v.images" width="100px" />-->
							<img v-lazy="v.images" width="100px" />
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
								<span>{{v.type}}</span>
								<span>{{v.serialize}}</span>
								<span>{{v.wordcount}}万字</span>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				msg: '',
				msg1: '',
				msg2: ''
			}
		},
		mounted() {
			this.$http.get('hot1.json').then(function(res) {
					this.msg = res.body;
					console.log(this.msg)
				}),
				this.$http.get('rank1.json').then(function(res) {
					this.msg1 = res.body;
					console.log(this.msg1)
				}),
				this.$http.get('free1.json').then(function(res) {
					this.msg2 = res.body;
					console.log(this.msg2)
				})
		}
	}
</script>

<style scoped>
	.container {
		position: relative;
		margin-top: 40px;
		height: 90vh;
		background-color: #EBEBEB;
	}
	
	.newbook,
	.hotbook,
	.like {
		background-color: white;
		margin: 1px auto 10px;
		padding: 15px;
		/*margin: 1px;*/
	}
	
	h1 {
		display: block;
		font-weight: 900;
		color: brown;
		font-size: 16px;
		margin-left: 0;
		margin-bottom: 10px;
		line-height: 16px;
		border-left: 2px solid #ed424b;
		text-indent: 5px;
	}
	/*.hot-nav{
		position: absolute;
		padding: 12px;
	}*/
	
	li {
		list-style: none;
	}
	
	.hot-nav ul li {
		display: flex;
		margin-bottom: 14px;
		padding-bottom: 10px;
		border-bottom: 1px solid #ddd;
	}
	/*.book-detail {
		position: relative;
		width: 245px;
		flex: 1;
		margin-left: 20px;
		
	}*/
	
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
		-webkit-line-clamp: 3;
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