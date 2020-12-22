<template>
	<div class="sector">
		<v-app id="inspire">
			
			<v-container grid-list-md>
			<h2 class="text-md-center">SECTOR</h2>
			<v-layout row wrap>
				<v-flex xs12 sm4>
					<v-card :loading="loading" class="mx-auto my-12" max-width="374">
						<template slot="progress">
							<v-progress-linear color="deep-purple" height="10" indeterminate ></v-progress-linear>
						</template>
						<v-img height="250" src="https://cdn.vuetifyjs.com/images/cards/cooking.png" ></v-img>
						<v-card-title>SEGURIDAD</v-card-title>
						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-rating
									:value="4.5"
									color="amber"
									dense
									half-increments
									readonly
									size="14"
								></v-rating>
								<div class="grey--text ml-4">4.5 (413)</div>
							</v-row>
							
							<div>
								El objetivo de la seguridad e higiene industrial es prevenir los accidentes laborales, los cuales se producen como consecuencia de las actividades de producción, por lo tanto, una producción que no contempla las medidas de seguridad e higiene no es una buena producción. Una buena producción debe satisfacer las condiciones necesarias de los tres elementos indispensables, seguridad, productividad y calidad de los productos.
							</div>
						</v-card-text>
						<v-divider class="mx-4"></v-divider>
						<v-card-title>     .....</v-card-title>
						<v-card-text> </v-card-text>
						<v-card-actions> </v-card-actions>
					</v-card>
				</v-flex>

				<v-flex xs12 sm4>
					<v-card :loading="loading" class="mx-auto my-12" max-width="374">
						<template slot="progress">
							<v-progress-linear
								color="deep-purple"
								height="10"
								indeterminate
							></v-progress-linear>
						</template>
						<v-img
							height="250"
							src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
						></v-img>
						<v-card-title>CONTROL</v-card-title>
						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-rating
									:value="4.5"
									color="amber"
									dense
									half-increments
									readonly
									size="14"
								></v-rating>
								<div class="grey--text ml-4">4.5 (413)</div>
							</v-row>
							
							<div>
								SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR
								SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR .
							</div>
						</v-card-text>
						<v-divider class="mx-4"></v-divider>
						<v-card-title>     .....</v-card-title>
						<v-card-text> </v-card-text>
						<v-card-actions> </v-card-actions>
					</v-card>
				</v-flex>

				<v-flex xs12 sm4>
					<v-card :loading="loading" class="mx-auto my-12" max-width="374">
						<template slot="progress">
							<v-progress-linear
								color="deep-purple"
								height="10"
								indeterminate
							></v-progress-linear>
						</template>
						<v-img
							height="250"
							src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
						></v-img>
						<v-card-title>CALIDAD</v-card-title>
						<v-card-text>
							<v-row align="center" class="mx-0">
								<v-rating
									:value="4.5"
									color="amber"
									dense
									half-increments
									readonly
									size="14"
								></v-rating>
								<div class="grey--text ml-4">4.5 (413)</div>
							</v-row>
							
							<div>
								SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR
								SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR SECTOR .
							</div>
						</v-card-text>
						<v-divider class="mx-4"></v-divider>
						<v-card-title>     .....</v-card-title>
						<v-card-text> </v-card-text>
						<v-card-actions> </v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>
			</v-container>
		</v-app>
	</div>
</template>

<script>
export default {
    name: 'InformacionSector',
	data: () => ({
      loading: false,
      selection: 1,
    }),
}
</script>

<style scoped>



</style>

