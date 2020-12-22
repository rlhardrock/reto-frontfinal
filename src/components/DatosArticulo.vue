<template>
	<div id="app">
		<v-app id="inspire">
			<v-data-table
				:headers="headers"
				:items="articulos"
				sort-by="nombre"
				class="elevation-1"
        :loading="carga"
        loading-text=" ... PROCESANDO INFORMACION"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title>ARTICULOS</v-toolbar-title>
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
									NUEVO ARTICULO
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
													v-model="editedItem.descripcion"
													label="DESCRIPCION"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.codigo"
													label="CODIGO"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-text-field
													v-model="editedItem.estado"
													label="ESTADO"
												></v-text-field>
											</v-col>
											<v-col cols="12" sm="6" md="4">
												<v-select
													v-model="categoria"
													label="CATEGORIA"
													:items="categorias"
													item-text="nombre"
													item-value="id"
													return-object
												></v-select>
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
									<v-btn color="blue darken-1" text @click="shiftState">CONFIRMAR</v-btn>
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
	name: 'DatosArticulo',

	data: () => ({
    dialog: false,
    carga: 'true',
		dialogDelete: false,
		headers: [{
      text: 'ID', value: 'id'
    },
			{
				text: "ARTICULO",
				align: "start",
				sortable: true,
				value: 'nombre',
			},
			{ text: "DESCRIPCION", value: 'descripcion' },
			{ text: "CODIGO", value: 'codigo' },
			{ text: "ESTADO", value: 'estado' },
			{ text: "CATEGORIA", value: 'categoria.nombre' },
			{ text: "ACCION", value: 'Accion', sortable: false },
		],
		desserts: [],
		categorias: [],
		categoria: '',
		articulos: [],
		editedIndex: -1,
		editedItem: {
			id: 0,
			nombre: '',
			descripcion: '',
			codigo: '',
			estado: 0,
			categoria:{
				id: 0,
				nombre: ''
			}
		},
		defaultItem: {
			id: 0,
			nombre: '',
			descripcion: '',
			codigo: '',
			estado: 0,
			categoria:{
				id: 0,
				nombre: ''
			}
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
		this.listCategorias()
	},
   /* metodo initialize desaparece */
	methods: {
		list() {
			axios.get("http://localhost:3000/api/articulo/list")
				.then((response) => {
          this.articulos = response.data;
          this.carga = false;
				})
				.catch(error);
		},
		listCategorias(){
			axios.get("http://localhost:3000/api/categoria/list")
				.then((response) => {
          this.categorias = response.data;
          this.carga = false;
				})
				.catch(error);
		},

		update(){
			if (this.editItem.estado === 1){
				axios.put("http://localhost:3000/api/articulo/deactivate",{
				"id": this.editItem-id,
				})
				.then(response =>{
					this-this.list();
				})
				.catch(error =>{
					return error;
				})
			}else{
				axios.put("http://localhost:3000/api/articulo/activate",{
				"id": this.editItem-id,	
				})
				.then(response =>{
					this.list();
				})
				.catch(error =>{
					return error;
				})
			} this.closeDelete;
		},

		editItem(item) {
			this.editedIndex = item.id;
			this.categoria = item? item.categoria: '';
			this.editedItem = Object.assign({}, item);
			this.dialog = true;
		},

		deleteItem(item) {
			this.editedIndex = this.desserts.indexOf(item);
			this.editedItem = Object.assign({}, item);
			this.dialogDelete = true;
		},

		shiftState() {
			if (this.editedItem === 1) {
				axios.put('http://localhost:300/api/articulo/deactivate',{
					"id": this.editedItem.id,
				})
				.then( response => {
					this.list();
				})
				.catch(error =>{
					return error;
				})
			} else {
				axios.put('http://localhost:300/api/articulo/activate',{
					"estado": 1,
				})
				.then( response => {
					this.list();
				})
				.catch(error =>{
					return error;
				})
			}
			this.close();
		},

		close() {
			this.dialog = false;
			this.$nextTick(() => {
				this.editedItem = Object.assign({}, this.defaultItem);
				this.categoria = '';
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
				axios.put('http://localhost:3000/api/articulo/update',{
					"id": this.editItem.id,
					"nombre": this.editItem.nombre,
					"descripcion": this.editItem.descripcion,
					"codigo": this.editItem.codigo,
					"categoria":this.categoria.id
				})
					.then(response =>{
						this.list();
					})
					.catch(error =>{
					return error;
				})
			} else {
				axios.put('http://localhost:3000/api/articulo/add',{
					"id": this.editItem.id,
					"nombre": this.editItem.nombre,
					"descripcion": this.editItem.descripcion,
					"codigo": this.editItem.codigo,
					"categoriaId":this.categoria.id
					})
					.catch(error =>{
					return error;
					})
			} this.close();
		}
	}
}
</script>

<style scoped>
</style>