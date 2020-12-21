<template>
	<div id="app">
		<v-app id="inspire">
			<v-data-table
				:headers="headers"
				:items="categoria"
				sort-by="nombre"
				class="elevation-1"
        :loading="carga"
        loading-text=" ... PROCESANDO INFORMACION"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title>CATEGORIAS</v-toolbar-title>
						<v-divider class="mx-4" inset vertical></v-divider>
						<v-spacer></v-spacer>
						<v-dialog v-model="dialog" max-width="500px">
							<template v-slot:activator="{ on, attrs }">
								<v-btn
									color="primary"
									dark
									class="mb-2"
									v-bind="attrs"
									v-on="on"
								>
									NUEVA CATEGORIA
								</v-btn>
							</template>
							<v-card>
								<v-card-title>
									<span class="headline">{{ formTitle }}</span>
								</v-card-title>
                <!-- ################## -->
								<v-card-text>
									<v-container>
										<v-row>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.nombre"
													label="Nombre"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.calories"
													label="Calories"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.fat"
													label="Fat (g)"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.carbs"
													label="Carbs (g)"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.protein"
													label="Protein (g)"
												></v-text-field>
											</v-col>
										</v-row>
									</v-container>
								</v-card-text>

								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue darken-1" text @click="close">
										CANCELAR
									</v-btn>
									<v-btn color="blue darken-1" text @click="save"> Save </v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
						<v-dialog v-model="dialogDelete" max-width="500px">
							<v-card>
								<v-card-title class="headline">ESTA SEGURO DE LA ELIMINACION?</v-card-title>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue darken-1" text @click="closeDelete">CANCELAR</v-btn>
									<v-btn color="blue darken-1" text @click="deleteItemConfirm">CONFIRMADO</v-btn>
									<v-spacer></v-spacer>
								</v-card-actions>
							</v-card>
						</v-dialog>
					</v-toolbar>
				</template>

        <!-- ############################## -->

				<template v-slot:item.actions="{ item }">
					<v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
					<v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
				</template>
				<template v-slot:no-data>
					<v-btn color="primary" @click="initialize"> RESTAURAR </v-btn>
				</template>
			</v-data-table>
		</v-app>
	</div>
</template>





<script>
import axios from "axios";

export default {
	name: 'DatosArticulo',

	data: () => ({
    dialog: false,
    carga: 'true',
		dialogDelete: false,
		headers: [{
      text: 'ID', value: 'id'
    },
			{
				text: "Categoria",
				align: "start",
				sortable: true,
				value: "nombre",
			},
			{ text: "Descripcion", value: "descripcion" },
			{ text: "Estado", value: "estado" },
			{ text: "Accion", value: "Accion", sortable: false },
		],
		desserts: [],
		categorias: [],
		editedIndex: -1,
		editedItem: {
			nombre: "",
			descripcion: 0,
			estado: 0,
		},
		defaultItem: {
			nombre: "",
			descripcion: 0,
			estado: 0,
		},
	}),

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "NUEVO ARTICULO" : "EDITAR ARTICULO";
		},
	},

	watch: {
		dialog(val) {
			val || this.close();
		},
		dialogDelete(val) {
			val || this.closeDelete();
		},
	},

	created() {
		this.list();
	},
   /* metodo initialize desaparece */
	methods: {
		initialize() {
			this.desserts = [
				{
					nombre: "Frozen Yogurt",
					calories: 159,
					estado: 1,
				},
				{
					nombre: "Eclair",
					descripcion: 262,
					estado: 1,
				},
				{
					nombre: "Cupcake",
					descripcion: 305,
					estado: 1,
				},
				{
					nombre: "Gingerbread",
					descripcion: 356,
					estado: 1,
				},
			];
		},
		list() {
			axios
				.get("http://localhost:3000/api/categoria/list")
				.then((response) => {
          this.categorias = response.data;
          this.carga = false;
				})
				.catch(error);
		},

		editItem(item) {
			this.editedIndex = this.desserts.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			this.editedIndex = this.desserts.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialogDelete = true;
		},

		deleteItemConfirm() {
			this.desserts.splice(this.editedIndex, 1);
			this.closeDelete();
		},

		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		closeDelete() {
			this.dialogDelete = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.editedIndex = -1;
			});
		},

		save() {
			if (this.editedIndex > -1) {
				Object.assign(this.desserts[this.editedIndex], this.editedItem);
			} else {
				this.desserts.push(this.editedItem);
			}
			this.close();
		},
	},
};
</script>

<style scoped>
</style>