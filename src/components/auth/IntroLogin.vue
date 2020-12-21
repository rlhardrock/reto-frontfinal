<template>
    
    <div class="log">
        <form class="row g-3">
            <div class="col-auto">
                <label for="staticEmail2" class="visually-hidden">email</label>
                <input 
                v-model="login.email"
                type="text" 
                class="form-control" 
                id="staticEmail2" 
                placeholder="email">
            </div>
            <div class="col-auto">
                <label for="inputPassword2" class="visually-hidden">Password</label>
                <input 
                v-model="login.password"
                type="password" 
                class="form-control" 
                placeholder="password">
            </div>
            
            <div class="col-auto">
                <button
                @click.prevent="loginUser"
                type="submit" 
                class="btn btn-success mb-3">Authenticate</button>
            </div>
            
        </form>
    </div>
    
</template>

<script>

import Swal from 'sweetalert2'
import VueJwtDecode from 'vue-jwt-decode'

export default {
    name: 'IntroLogin',
    data(){
        return{
            login:{
                email:'',
                password:''
            }
        }
    },
    methods: {
        async loginUser () {
            try{
                let response = await this.$http.post('/api/auth/login', this.login);
                let token = response.data.tokenReturn;
                let user = response.data.user;

                localStorage.setItem('jwt',token);
                localStorage.setItem('user', JSON.stringify(user));
                if(token){
                    Swal.fire({
                        icon: 'success',
                        title: 'Bienvenido !',
                        showConfirmButton: false,
                        timer: 1500,
                        backdrop: `rgba(0,250,0,0.6)`
                        });
                        this.$router.push('/services');
                }
            }catch (e){
                Swal.fire({
                title: 'Datos Incorrectos!  Reintentalo !',
                width: 600,
                padding: '3em',
                timer: 2500,
                backdrop: `rgba(0,125,250,0.9)`
                });
            }
        }
    }
}

</script>

<style scoped>



</style>