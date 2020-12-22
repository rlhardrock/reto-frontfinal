<template>
    <div id="app">
        <v-container grid-list-md>
            <v-layout row wrap>
            <v-flex xs12>
                <v-app id="inspire">
                    
                    <v-card class="mx-auto" width="750px">
                    <h2 class="text-md-center">CASOS DE EXITO</h2>
                    <v-container fluid>
                        <v-row dense>
                        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                            <v-card>
                                <div>
                                    <v-img
                                        :src="card.src"
                                        class="white--text align-end"
                                        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                                        height="380px">
                                        <v-card-title v-text="card.title"></v-card-title>
                                    </v-img>
                                </div>
                                <div>
                                    <p v-text="card.exito"></p>
                                </div>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                
                                <v-btn icon>
                                <v-icon>mdi-heart</v-icon>
                                </v-btn>
                
                                <v-btn icon>
                                <v-icon>mdi-bookmark</v-icon>
                                </v-btn>
                
                                <v-btn icon>
                                <v-icon>mdi-share-variant</v-icon>
                                </v-btn>
                            </v-card-actions>
                            </v-card>
                        </v-col>
                        </v-row>
                    </v-container>
                    </v-card>
                </v-app>
            </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'CasosExito',
    data: () => ({
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
      ],
    }),
  }
</script>

<style>

</style>