<template>
  <v-app id="app">
    <div id="nav">
      <router-link to="/"></router-link> 
      <router-link to="/aterrizaje"></router-link> 
      <v-btn color="##EB5F28" flat elevation="2" rounded x-large><router-link to="/catalogo">Catalogo</router-link></v-btn> |
      <v-btn color="##EB5F28" flat elevation="2" rounded x-large><router-link to="/planes">Planes</router-link></v-btn> |
      <v-btn color="##EB5F28" flat elevation="2" rounded x-large><router-link to="/usuario">Usuario</router-link></v-btn> |
      <v-btn color="##EB5F28" flat elevation="2" rounded x-large><router-link to="/categoria">Categoria</router-link></v-btn> |
      <v-btn color="##EB5F28" flat elevation="2" rounded x-large><router-link to="/articulo">Articulo</router-link></v-btn>
      
      <v-main>
         <aterrizaje></aterrizaje>
      </v-main>
    </div>
  </v-app>
</template>

<script>
import Aterrizaje from './views/Aterrizaje.vue';


export default {
  name: 'App',

  components: {
    Aterrizaje
        
  },

};
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #000046;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to top, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: royalblue;
}

#nav a.router-link-exact-active {
  color: navy;
}
</style>