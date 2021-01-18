<template>
  <div class= "adminindex">
    <section class="py-5">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-start">
          <li class="breadcrumb-item"><router-link :to="`index`">Inicio</router-link></li>
          <li class="breadcrumb-item"><router-link :to="`admin-index`">Mi Cuenta</router-link></li>
          <li class="breadcrumb-item active">Mis Productos</li>
        </ol>
        <h1 class="hero-heading mb-0">Mis Productos</h1>
        <p class="text-muted mb-5">Aquí podrás añadir, eliminar o modificar aspectos relacionados con tus productos: precios, distribuidores...</p>
        <div class="row">
          <div class="col-lg-7">
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Añadir Producto</h5>
                </div>                
              </div>
              <div class="" id="">
                <form action="#">
                  <div class="row pt-4">
                    <div class="form-group col-md-6">
                      <label class="form-label" for="name">Nombre</label>
                      <input class="form-control" type="text" name="name" id="name" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="date">Descripción</label>
                      <input class="form-control" type="text" name="date" id="date" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="email">PRECIO DE VENTA UNITARIO SIN IVA</label>
                      <input class="form-control" type="email" name="email" id="email" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">IVA APLICABLE</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">PVP UNITARIO CON IVA</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">TIPO Y CAPACIDAD DEL ENVASE UNITARIO</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">TIPO Y CAPACIDAD DEL ENVASE UNITARIO</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                    <div class="form-group col-md-6">

                      <label class="form-label" for="phone">REGISTRO SANITARIO</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                  </div>
                  <button class="btn btn-outline-primary mb-4" type="submit">Añadir Producto</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 ml-lg-auto">
            <div class="card border-0 shadow">
              <div class="card-header bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h4 class="h6 subtitle text-sm text-primary">Preguntas frecuentes sobre Productos</h4>
                  </div>
                  <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-primary">
                    <use xlink:href="#identity-1"> </use>
                  </svg>
                </div>
              </div>
              <div class="card-body p-4">
                <h6>¿Se publican automáticamente mis cambios realizados sobre la información de mis productos?</h6>
                <p class="text-muted text-sm card-text">No, toda la información previa publicación en la página debe ser autorizada desde Sabor Granada.</p>
                <h6>¿Si en alguna comarca no poseo un distribuidor o si prefiero que contacten conmigo directamente las empresas HORECA, que debo marcar en mi ficha personal?</h6>
                <p class="text-muted text-sm card-text">Deberás marcar dentro de tu perfil en el apartado de distribuidores “envío desde el productor directamente”.</p>
              </div>
            </div>
          </div>
          <hr>

            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Mis Productos</h5>
                </div>
              </div>
              <div class="col-lg-12">
                  <div class="list-group shadow mb-5">
                    <a class="list-group-item list-group-item-action p-2"  style="cursor:initial;">
                      <div class="row">
                        <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                          <h6 class="label-heading">Nombre</h6>
                          <h2 class="h5 text-primary">Cerveza Fresh</h2>
                          <h6 class="label-heading">Descripción</h6>
                          <p class="text-sm font-weight-bold">Estilo, Blonde Ale Hierbabuena, aromatica</p>
                        </div>
                        <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                            <h6 class="label-heading">Precio de venta unitario sin IVA</h6>
                            <p class="text-sm font-weight-bold">1,50€</p>
                            <h6 class="label-heading">IVA aplicable</h6>
                          <p class="text-sm font-weight-bold mb-0">21%</p>
                        </div>
                        <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                          <h6 class="label-heading">PVP unitario con IVA</h6>
                          <p class="text-sm font-weight-bold">1,82€</p>
                          <h6 class="label-heading">Tipo y capacidad del envase unitario</h6>
                          <p class="text-sm font-weight-bold mb-0">Botella de cristal de 33 cl/unidad</p>
                        </div>
                        <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                          <h6 class="label-heading">Formato de venta</h6>
                          <p class="text-sm font-weight-bold mb-0">Caja de 12 botellas</p>
                          <!-- <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="category">Modificar</button> -->
                          <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="category">ELIMINAR</button>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <hr>
            <div class="col-12">
            <div class="text-block"> 
              <div class="text-block"> 
                <div class="row mb-3">
                  <div class="col-sm-9">
                    <h5>Añadir Distribuidor</h5>
                  </div>                
                </div>

                <div class="" id="">
                  <form action="#">
                    <div class="row pt-4">
                      <div class="form-group col-md-4">
                        <label class="form-label" for="name">Comarca</label>
                        <select class="selectpicker form-control" name="neighbourhood" id="form_neighbourhood" data-style="btn-selectpicker" data-live-search="true" data-selected-text-format="count &gt; 1" title="">
                        <option value="select" disabled selected>Seleccionar</option>
                        <option value="neighbourhood_1">Todas las comarcas</option>
                        <option value="neighbourhood_1">Comarca de Alhama</option>		
                        <option value="neighbourhood_2">Comarca de la Alpujarra Granadina</option>	
                        <option value="neighbourhood_3">Comarca de Baza</option>    		
                        <option value="neighbourhood_4" >Costa Granadina</option>		
                        <option value="neighbourhood_5">Comarca de Guadix</option> 		
                        <option value="neighbourhood_6">Comarca de Huéscar</option>		
                        <option value="neighbourhood_7">Comarca de Los Montes</option>		
                        <option value="neighbourhood_8">Comarca del Valle de Lecrín</option>		
                        <option value="neighbourhood_9">Comarca de la Vega de Granada</option>
                      </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="date">Nombre de la empresa de distribución</label>
                        <input class="form-control" type="text" name="date" id="date" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="email">Teléfono</label>
                        <input class="form-control" type="email" name="email" id="email" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="phone">Email</label>
                        <input class="form-control" type="text" name="phone" id="phone" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="phone">Persona de contacto</label>
                        <input class="form-control" type="text" name="phone" id="phone" value="">
                      </div>
                    </div>
                    <button class="btn btn-outline-primary mb-4" type="submit">Añadir Distribuidor</button>
                  </form>
                </div>
              </div>
            </div>  
          </div>
          <div class="col-12">
            <div class="row mb-3">
              <div class="col-sm-9">
                <h5>Mis Distribuidores</h5>
              </div>
              <div class="col-sm-3 text-right">
                <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#personalDetails" aria-expanded="false" aria-controls="personalDetails">Modificar</button>
              </div>
            </div>
            
            <table class="table table-striped table-hover table-sm table-responsive-md" style="width: 100%;" >
              <!--Table head-->
              <thead>
                <tr>
                  <th class="align-middle">Comarca</th>
                  <th class="align-middle">Nombre de la empresa de distribución</th>
                  <th class="align-middle">Teléfono</th>
                  <th class="align-middle">Email</th>
                  <th class="align-middle">Persona de contacto</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="align-middle">Todas las comarcas</td>
                  <td class="align-middle">Envio desde el productor directamente</td>
                  <td class="align-middle">649 015 559</td>
                  <td class="align-middle">cervezassegral@gmail.com</td>
                  <td class="align-middle"></td>
                </tr>
              </tbody>
              <!--Table body-->
            </table>
            </div>
          </div>
    </section> 
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'ProductsAdmin',
  data() {
    return {
      productor: {
        nombre: '', 
        email: '',
        zonaubicacion: '',
        direccion: '',
        poblacion: '',
        codigopostal: '',
        telefono: '',
        descripcion: ''
      },

      cat: '',
      categoria: '',
      families: [],
      familias: [],
      
      dismissSecs: 5,
      dismissCountDown: 0,
      mensaje: {
        color: '',
        texto: ''
      }
    }
  },

  computed: {
    ...mapState(['token', 'id'])
  },
  methods: {
    getUser(){
      let config = {
        headers: {
          token: this.token ,
        }
      }
      let id = this.$store.state.usuarioDB.usuario._id
      console.log(id)
      this.axios.get(`/productor/${id}` , config)
        .then(res => {
          this.productor = res.data.productor[0];
          console.log(this.productor)
        })
        .catch(e => {
          console.log(e)
        })
    },
    familiaproductos(cat) {
      let config = {
        headers: {
          token: this.token ,
        }
      }
      let id = this.cat;
      this.axios.get(`/categoria/${id}` , config)
      .then(res => {
        console.log(this.categoria)
        this.categoria = res.data.categoria.nombre;
        this.families = res.data.categoria.familias;

      })
      .catch(e => {
        console.log(e)
      })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  created () {
    this.getUser();
  },
  // watch: {
  //   cat: {
  //     handler(cat) {
  //       this.cat = cat
  //       this.familiaproductos(cat);
  //     }
  //   }
  // }
}
</script>

<style>
  .adminindex {
    padding-top: 135px
  }
</style>