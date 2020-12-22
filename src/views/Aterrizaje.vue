<template>
<div class="aterrizaje">
    <v-app>
        <v-main>
        <bar-navigator></bar-navigator>
        <carrusel-slider></carrusel-slider>
        <informacion-sector></informacion-sector>
        <servicio-corp></servicio-corp>
        <casos-exito></casos-exito>
        <double-footer></double-footer>
        </v-main>
    </v-app>
</div>
</template>

<script>
import BarNavigator from '../components/BarNavigator.vue';
import CarruselSlider from '../components/CarruselSlider.vue';
import ServicioCorp from '../components/ServicioCorp.vue';
import DoubleFooter from '../components/DoubleFooter.vue';
import InformacionSector from '../components/InformacionSector.vue';
import CasosExito from '../components/CasosExito.vue';

export default {
  name: 'Aterrizaje',

  components: {
    CarruselSlider,
    BarNavigator,
    InformacionSector,
    ServicioCorp,
    DoubleFooter,
    CasosExito   
    
  },

};
</script>
