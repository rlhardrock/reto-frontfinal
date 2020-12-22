<template>


  <v-btn
  @click.prevent="logout"
  color="#E05916"
  flat
  elevation="24"
  rounded
  x-large
    >FINALIZAR SESIÓN</v-btn>


</template>

<script>

import VueJwtDecode from 'vue-jwt-decode'

export default {
    name: 'BotonDeslog',
    data(){
        return{
            user:{
                
            }
        }
    },
    methods:{
        getUserDetails(){
            let user = localStorage.getItem('user');
            let token = localStorage.getItem('jwt');
            let decoded = VueJwtDecode.decode(token);
            this.user = user;
        },
        logout(){
            localStorage.removeItem('jwt');
            localStorage.removeItem('user');
            this.$router.push('/');
        }
    },
    created(){
        this.getUserDetails();
    }
}
</script>

<style>

</style>