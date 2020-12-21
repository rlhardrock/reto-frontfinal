<template>
	<v-app id="app">
		
		<router-view/>
	</v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
  export default {
	components: { HelloWorld },
    name: 'App'
  }
</script>