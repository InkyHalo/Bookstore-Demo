import VueRouter from 'vue-router'

import read  from  '../component/read/read.vue'
import book from '../component/book/book.vue'
import find from '../component/find/find.vue'
import settings from '../component/settings/settings.vue'
import fantasy from '../component/classify/fantasy.vue'
import city from '../component/classify/city.vue'
import coatard from '../component/classify/coatard.vue'
import his from '../component/classify/his.vue'
import game from '../component/classify/game.vue'

export default new VueRouter({
	routes:[
		{path:'/read',component:read},
		{path:'/book',component:book},
		{path:'/find',component:find},
		{path:'/settings',component:settings},
		{path:'/fantasy',component:fantasy},
		{path:'/coatard',component:coatard},
		{path:'/city',component:city},
		{path:'/his',component:his},
		{path:'/game',component:game},
		{path:'/',redirect:'/read'}
	]
})
