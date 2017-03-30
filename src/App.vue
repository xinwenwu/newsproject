<template>
  <div id="app"> 
  	<NavHeader></NavHeader>
  	<router-view class="router-view"></router-view>
  	<FooterView></FooterView>
		
		
  </div>
</template>

<script>
	import NavHeader from './components/Nav.vue'
	import FooterView from './components/Footer.vue'
	
	import Home from './components/Home.vue'

	import {mapGetters} from 'vuex'
	export default{
		components:{
			NavHeader,
			FooterView
		}
	}
</script>
	
	
	
<style>
	
</style>
