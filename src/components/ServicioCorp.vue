<template>
    <div id="app">
        <v-app id="inspire">
            <v-card class="mx-auto" width="85%">
            <h2 class="text-md-center">SERVICIOS</h2>
            <v-container>
                <v-row dense>
                <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                    <v-card>
                    <div>
                        <v-img
                            :src="card.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="300px" >
                            <v-card-title v-text="card.title"></v-card-title>
                        </v-img>
                    </div>
                    <div>
                        <p v-text="card.exito"> </p>
            
                        <v-card-actions>
                                        
                        </v-card-actions>
                    </div>    
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            </v-card>
        </v-app>
    </div>
</template>

<script>
export default {
    name: 'ServicioCorp',
    data: () => ({
    cards: [
      { title: 'ANTI CORROSION', src: require('../assets/img/enfriador.jpg'), flex: 12, exito: 'La corrosión del metal es uno de los problemas más comunes que enfrentan múltiples industrias. Hay varios pasos innovadores que se han introducido para la protección de materiales contra la corrosión y la oxidación. Sin embargo, debido a muchas razones, no son soluciones mágicas y aún es necesario el mantenimiento. Por su naturaleza, muchas empresas, como proveedores y distribuidores de gas natural y agua, sufren continuamente corrosión. Estos problemas de pueden ser realmente dañinos y costosos para las máquinas y herramientas indispensables para la operación del negocio. Los problemas de corrosión se enfrentan cuando un metal está expuesto a la humedad en el aire o del agua. La mayoría de los metales son vulnerables a reaccionar con el oxígeno, lo que crea una oxidación que conduce a la corrosión.' },
      { title: 'PREPARACION', src: require('../assets/img/infraestructura.jpg'), flex: 12, exito: 'La limpieza de superficies con herramientas manuales como raspadores y cepillos de alambre es relativamente ineficaz para eliminar residuos pegagosos o el óxido adherido. Las herramientas eléctricas ofrecen una ligera mejora con respecto a los métodos manuales y estos métodos pueden tener una efectividad aproximada del 30% al 50%, pero generalmente no se utilizan para nuevas fabricaciones de acero. Cuando no sea posible limpiar con chorro abrasivo, los métodos manuales y con herramientas eléctricas pueden ser los únicos métodos alternativos aceptables. Las herramientas eléctricas modernas se han desarrollado no solo para lograr un buen nivel de limpieza y perfil de la superficie, sino también para proporcionar una contención casi total de todo el polvo y los escombros generados. '},
      { title: 'FORMACIÓN', src: require('../assets/img/ServicioTaller.jpg'), flex: 12, exito: 'Si actúas con rapidez y aplicas ciertos procesos de limpieza en la mezcladoras podrás eliminar la suciedad con más facilidad. Los talleres de formacion son absolutamente imprescindibles. Es probablemente una maquinaria  de trabajo que más suciedad acumula. Para evitar el deterioro de las instalaciones y la maquinaria, así como la reducción de riesgos laborales, es imprescindible mantener BPS. Y no es algo que puedas dejar para mañana. Unas simples acciones diarias te ayudarán a trabajar en un lugar de trabajo limpio y eso también será beneficioso para el rendimiento laboral.'},
    ],
  }),
}
</script>

<style>

</style>