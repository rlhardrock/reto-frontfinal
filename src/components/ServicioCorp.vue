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
      { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito' },
      { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 12, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito'},
      { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 12, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito'},
    ],
  }),
}
</script>

<style>

</style>