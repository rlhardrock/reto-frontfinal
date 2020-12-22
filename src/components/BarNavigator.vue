<template>
  <div>
    <v-toolbar flat dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>TECHMIX CLEARFORCE</v-toolbar-title>

      <v-spacer></v-spacer>

      <boton-log></boton-log>

    </v-toolbar>

  </div>
</template>

<script>
import BotonLog from './microcomponets/BotonLog.vue'

export default {
	components: { BotonLog },
    name: 'BarNavigator'

}
</script>

<style>

</style>