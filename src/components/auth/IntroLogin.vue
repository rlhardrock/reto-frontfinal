<template>
	<div id="intro">
		<v-app id="inspire">
			<v-layout>
                <v-row>
                    <v-col>
                        <v-card>
                            <v-form ref="form" v-model="valid" lazy-validation>
				<v-text-field
					v-model="login.email"
                    placeholder="email"
					:rules="emailRules"
					label="E-MAIL"
					required
				></v-text-field>

                <v-text-field
					v-model="login.password"
                    placeholder="password"
					:rules="emailRules"
					label="PASSWORD"
					required
				></v-text-field>

				<!-- <v-select
					v-model="select"
					:items="items"
					:rules="[(v) => !!v || 'Item is required']"
					label="Item"
					required
				></v-select> -->

				<v-btn :disabled="!(this.login.password && this.login.email)"
                color="success" class="mr-4" @click.prevent="loginUser" >
					AUTHENTICATE
				</v-btn>

				<v-btn color="error" class="mr-4" @click="reset"> 
                    RESET CLEAR
                </v-btn>

				<!-- <v-btn color="warning" @click="resetValidation">
					Reset Validation
				</v-btn> -->
			                </v-form>
                        </v-card>
                    </v-col>
                </v-row>
            </v-layout>
        </v-app>
    </div>
</template>

<script>
import Swal from "sweetalert2";
import VueJwtDecode from "vue-jwt-decode";

export default {
	name: "IntroLogin",
	data() {
		return {
			login: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		async loginUser() {
			try {
				let response = await this.$http.post("/api/auth/login", this.login);
				let token = response.data.tokenReturn;
				let user = response.data.user;

				localStorage.setItem("jwt", token);
				localStorage.setItem("user", JSON.stringify(user));
				if (token) {
					Swal.fire({
						icon: "success",
						title: "Bienvenido !",
						showConfirmButton: false,
						timer: 1500,
						backdrop: `rgba(0,250,0,0.6)`,
					});
					this.$router.push("/services");
				}
			} catch (e) {
				Swal.fire({
					title: "Datos Incorrectos!  Reintentalo !",
					width: 600,
					padding: "3em",
					timer: 2500,
					backdrop: `rgba(0,125,250,0.9)`,
				});
			}
		},
	},
};
</script>

<style scoped>

</style>