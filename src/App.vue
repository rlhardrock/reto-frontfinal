<template>
	<v-app id="inspire">
		<v-navigation-drawer
			v-model="drawer"
			app
			src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
			<v-list-item>
				<v-list-item-content class="white--text">
					<v-list-item-title class="title"> RAZON SOCIAL </v-list-item-title>
					<v-list-item-subtitle> NIT </v-list-item-subtitle>
					</v-list-item-content>
			</v-list-item>

			<v-divider></v-divider>

			<v-card class="mx-auto" width="300">
				<v-list>
					<!-- Aterrizaje -->
					<v-list-item :to="{name: 'Home'}">
						<v-list-item-icon>
							<v-icon>mdi-home</v-icon>
						</v-list-item-icon>

							<v-list-item-title>Principal</v-list-item-title>
						</v-list-item>
					<v-list-group :value="true" prepend-icon="mdi-account-circle">
						<template v-slot:activator>
							<v-list-item-title>Zona Interna</v-list-item-title>
						</template>

						<v-list-group :value="true" no-action sub-group>
							<template v-slot:activator>
								<v-list-item-content>
									<v-list-item-title>Insumos</v-list-item-title>
								</v-list-item-content>
							</template>

							<v-list-item v-for="([title, icon], i) in admins" :key="i" link>
								<v-list-item-title v-text="title"></v-list-item-title>

								<v-list-item-icon>
									<v-icon v-text="icon"></v-icon>
								</v-list-item-icon>
							</v-list-item>
						</v-list-group>

						<v-list-group :value="true" no-action sub-group>
							<template v-slot:activator>
								<v-list-item-content>
									<v-list-item-title>Personal</v-list-item-title>
								</v-list-item-content>
							</template>
											<!-- Adicion de rutas  to .... -->
							<v-list-item v-for="([title, icon, ruta], i) in cruds" :key="i" :to="{name: ruta}"   >
								<v-list-item-title v-text="title"></v-list-item-title>

								<v-list-item-icon>
									<v-icon v-text="icon"></v-icon>
								</v-list-item-icon>
							</v-list-item>
						</v-list-group>
					</v-list-group>
				</v-list>
			</v-card>
		</v-navigation-drawer>

		<v-app-bar app color="blue darken-3" >
			<!-- <v-app-bar-nav-icon   style="65px"> -->
			<v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title color-text class="white--text">TABLERO DE GESTIÓN DE USUARIOS</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn icon>
				<v-icon>mdi-magnify</v-icon>
			</v-btn>

			<v-menu left bottom>
				<template v-slot:activator="{ on, attrs }">
					<v-btn icon v-bind="attrs" v-on="on">
						<v-icon>mdi-dots-vertical</v-icon>
					</v-btn>
				</template>

				<v-list>
					<v-list-item v-for="n in 5" :key="n" @click="() => {}">
						<v-list-item-title>Option {{ n }}</v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
		</v-app-bar>
	</v-app>
</template>

<script>
  export default {
    data: () => ({
	  drawer: null,
      admins: [
        ['Categoria', 'mdi-account-multiple-outline', 'Categoria'],
        ['Articulo', 'mdi-cog-outline', 'Articulo'],
      ],
      cruds: [
		['Usuario', 'mdi-plus-outline', 'Usuario'],
		['Clientes', 'mdi-plus-outline', 'Clientes'],
		      
      ],
    }),
  }
</script>