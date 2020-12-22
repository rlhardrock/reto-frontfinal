<template>
  <div>
    <v-toolbar flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>TECHMIX CLEARFORCE</v-toolbar-title>

      <v-spacer></v-spacer>

      <boton-deslog></boton-deslog>
      

    </v-toolbar>

  </div>
</template>

<script>
import BotonDeslog from './microcomponets/BotonDeslog.vue'


export default {
	components: { BotonDeslog },
    name: 'BardesNavigator'

}
</script>

<style>

</style>