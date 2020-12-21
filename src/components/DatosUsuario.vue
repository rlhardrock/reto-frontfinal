<template>
	<div id="app">
		<v-app id="inspire">
			<v-data-table
				:headers="headers"
				:items="usuarios"
				sort-by="nombre"
				class="elevation-1"
        :loading="carga"
        loading-text=" ... PROCESANDO INFORMACION"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title>USUARIOS</v-toolbar-title>
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
									NUEVO USUARIO
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
													v-model="editedItem.id"
													label="ID"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.nombre"
													label="NOMBRE"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.rol"
													label="ROL"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.email"
													label="EMAIL"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.telefono"
													label="TELEFONO"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.estado"
													label="ESTADO"
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
									<v-btn color="blue darken-1" text @click="save"> GUARDAR </v-btn>
								</v-card-actions>
							</v-card>
						</v-dialog>
						<v-dialog v-model="dialogDelete" max-width="500px">
							<v-card>
								<v-card-title class="headline">ESTA SEGURO DE LA ELIMINACION?</v-card-title>
								<v-card-actions>
									<v-spacer></v-spacer>
									<v-btn color="blue darken-1" text @click="closeDelete">CANCELAR</v-btn>
									<v-btn color="blue darken-1" text @click="deleteItemConfirm">CONFIRMAR</v-btn>
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
					<v-btn color="primary" @click="list"> RESTAURAR </v-btn>
				</template>
			</v-data-table>
		</v-app>
	</div>
</template>





<script>
import axios from "axios";

export default {
	name: 'DatosUsuario',

	data: () => ({
    dialog: false,
    carga: 'true',
		dialogDelete: false,
		headers: [{
      text: 'ID', value: 'id'
    },
			{
				text: "USUARIO",
				align: "start",
				sortable: true,
				value: 'nombre',
			},
			{ text: "ROL", value: 'rol' },
			{ text: "ESTADO", value: 'estado' },
			{ text: "EMAIL", value: 'email' },
			{ text: "TELEFONO", value: 'telefono' },
			{ text: "ACCION", value: 'accion', sortable: false },
		],
		desserts: [],
		usuarios: [],
		editedIndex: -1,
		editedItem: {
			nombre: '',
			rol: '',
			email: '',
			telefono: '',
			estado: 0,
		},
		defaultItem: {
			nombre: '',
			rol: '',
			email: '',
			telefono: '',
			estado: 0,
		},
	}),

	computed: {
		formTitle() {
			return this.editedIndex === -1 ? "NUEVO USUARIO" : "EDITAR USUARIO";
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
		list() {
			axios
				.get("http://localhost:3000/api/usuario/list")
				.then((response) => {
          this.usuarios = response.data;
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