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
        { title: 'DETERGENTE', src: require('../assets/team/team01.png'), flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
        { title: 'PANADERIA', src: require('../assets/team/team03.png'), flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
        { title: 'ALIMENTOS', src: require('../assets/team/team04.png'), flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
        { title: 'PAPELERIA', src: require('../assets/team/team05.png'), flex: 6, exito: 'CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito CasoExito ' },
      ],
    }),
  }
</script>

<style>

</style>