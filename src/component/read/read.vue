	<template>
		<div class="container">
			<nav class="nav-header">
				<mt-swipe class="swipe" :auto="3000">
					<mt-swipe-item class="swipeit"><img src="../../assets/image/1.jpg" /></mt-swipe-item>
					<mt-swipe-item class="swipeit"><img src="../../assets/image/2.jpg" /></mt-swipe-item>
					<mt-swipe-item class="swipeit"><img src="../../assets/image/3.jpg" /></mt-swipe-item>
					<mt-swipe-item class="swipeit"><img src="../../assets/image/4.jpg" /></mt-swipe-item>
					<mt-swipe-item class="swipeit"><img src="../../assets/image/5.jpg" /></mt-swipe-item>
				</mt-swipe>
			</nav>
			<div class="classify">
					<ul class="cla-nav">
						<li>
							<router-link to="/fantasy">
								<i class="fa fa-superpowers fa-lg" aria-hidden="true"></i><br />玄幻
							</router-link>
						</li>
						<li>
							<router-link to="/coatard">
								<i class="fa fa-universal-access fa-lg" aria-hidden="true"></i><br />修真
							</router-link>
						</li>
						<li>
							<router-link to="/city">
								<i class="fa fa-taxi fa-lg" aria-hidden="true"></i><br />都市
							</router-link>
						</li>
						<li>
							<router-link to="/his">
								<i class="fa fa-globe fa-lg" aria-hidden="true"></i><br />历史
							</router-link>
						</li>
						<li>
							<router-link to="/game">
								<i class="fa fa-gamepad fa-lg" aria-hidden="true"></i><br />游戏
							</router-link>
						</li>
					</ul>
				</div>
			<div class="hot" style="padding: 6px;">
				<h2 style="margin: 10px 0px 10px;">| 热门小说</h2>
				<div class="hot-nav">
					<ul>
						<li v-for="v in msg">
							<!--<img :src="v.images" width="100px"/>-->
							<img v-lazy="v.images" width="100px" height="133px"/>
							<p style="font-weight: 550;">{{v.name}}</p>
							<p style="color: #8E8F97;">{{v.author}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="rank" style="padding: 6px;">
				<h2 style="margin: 10px 0px 10px;">| 排行榜</h2>
				<div class="rank-nav">
					<ul>
						<li v-for="v in msg1">
							<!--<img :src="v.images" width="100px"/>-->
							<img v-lazy="v.images" width="100px" height="133px"/>
							<p style="font-weight: 550;">{{v.name}}</p>
							<p style="color: #8E8F97;">{{v.author}}</p>
						</li>
					</ul>
				</div>
			</div>
			<div class="free" style="padding: 6px;">
				<h2 style="margin: 10px 0px 10px;">| 限时免费</h2>
				<div class="free-nav">
					<ul>
						<li v-for="v in msg2">
							<!--<img :src="v.images" width="100px"/>-->
							<img v-lazy="v.images" width="100px" height="133px"/>
							<p style="font-weight: 550;">{{v.name}}</p>
							<p style="color: #8E8F97;">{{v.author}}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</template>
	<script>
		export default {
			data(){
				return{
					msg:'',
					msg1:'',
					msg2:''
				}
			},
/*			mounted(){
				this.$http.get('http://39.108.14.248:3333/booklist').then(function(res)
				{
					this.msg = res.body;
					console.log(this.msg)
				})
			}*/
			mounted(){
				this.$http.get('hot.json').then(function(res)
				{
					this.msg = res.body;
					console.log(this.msg)
				}),
				this.$http.get('rank.json').then(function(res)
				{
					this.msg1 = res.body;
					console.log(this.msg1)
				}),
				this.$http.get('free.json').then(function(res)
				{
					this.msg2 = res.body;
					console.log(this.msg2)
				})
			}
		}
	</script>
	<style scoped>
		.container{
			position: relative;
			overflow-x: hidden;
			margin-top: 40px;
			height: 90vh;
			background-color: #EBEBEB;
		}
		/*.swipe{
			width: 100%;
			height: 150px;
			padding-bottom: 5px;
		}
		.swipe img{
			width: 100vw;
			height: 150px;  
		}*/
		.swipe{
			width: 100%;
			height: 25vh;
		}
		.swipe img{
			width: 100%;
			height: 100%;  
		}
		/*
		.swipe{
			width: 100%;
			height: 0;
			padding-bottom: 47%;
		}
		.swipe img{
			width: 100%;
		}*/
		.classify{
			margin-top: 5px;
			width: 100%;
		}
		.cla-nav{
			width: 100%;
			height: 65px;
			background-color: white;
		}
		.cla-nav li{
			width: 20%;
			margin: 15px 0;
			float: left;
			text-align: center;
		}
		a{
			text-decoration: none;
			size: a3;
			color: #596e87;
		}
		.hot{
			position: absolute;
			height:235px;
			width: 100%;
			margin: 10px 0;
			background-color: white;
		}
		.rank{
			position: absolute;
			top: 492px;
			height:235px;
			width: 100%;
			margin: 10px 0;
			background-color: white;
		}
		.free{
			position: absolute;
			top: 748px;
			height:235px;
			width: 100%;
			margin: 10px 0 0;
			background-color: white;
		}
		.hot h2,.rank h2,.free h2{
			font-weight: 900;
			font-size: 16px;
		}
		.hot h2,.free h2{
			color: brown;
		}
		.hot-nav,.rank-nav,.free-nav{
			width: 100%;
			position: absolute;
			overflow-x:scroll;
		}
		.hot ul,.rank ul,.free ul{
			width: 1200px;
		}
		.hot li,.rank li,.free li{
			float: left;
			width: 100px;
			padding: 0 6px;
		}
		.hot li p,.rank li p,.free li p{
			font-size: 14px;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	</style>