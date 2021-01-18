<template>
  <div class= "adminindex">
    <section class="py-5">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-start">
          <li class="breadcrumb-item"><router-link :to="`index`">Inicio</router-link></li>
          <li class="breadcrumb-item"><router-link :to="`admin-index`">Mi Cuenta</router-link></li>
          <li class="breadcrumb-item active">Información General</li>
        </ol>
        <h1 class="hero-heading mb-0">Información General</h1>
        <p class="text-muted mb-5">Gestione su información general: Teléfonos, mails, direcciones....</p>
        <div class="row">
          <div class="col-lg-7">
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Datos generales de la empresa</h5>
                </div>
                <div class="col-sm-3 text-right">
                  <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#personalDetails" aria-expanded="false" aria-controls="personalDetails">Modificar</button>
                </div>
              </div>
              <p class="text-sm text-muted"><i class="fa fa-id-card fa-fw mr-2"></i>{{productor.usuario.nombre}}<br><i class="fa fa-map-marker-alt fa-fw mr-2"></i>{{productor.zonaubicacion}}<br><i class="fa fa-building fa-fw mr-2"></i>{{productor.direccion || `No hay datos`}}, CP: {{productor.codigopostal || `No hay datos`}} <span class="mx-2"> </span>  <i class="fa fa-map-marker fa-fw mr-2"></i>{{productor.poblacion}}<br> 
                <i class="fa fa-envelope-open fa-fw mr-2"></i>{{productor.usuario.email}}<br><i class="fa fa-phone fa-fw mr-2"></i>{{productor.telefono || `No hay datos`}}<br><i class="fa fa-laptop fa-fw mr-2"></i>{{productor.web}}<br>
              </p>
              <div class="collapse" id="personalDetails">
                <form action="#">
                  <div class="row pt-4">
                    <div class="form-group col-md-6">
                      <label class="form-label" for="name">Nombre Empresa</label>
                      <input class="form-control" type="text" name="name" id="name" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="date">Zona de Ubicación</label>
                      <select class="selectpicker form-control" name="neighbourhood" id="form_neighbourhood" data-style="btn-selectpicker" data-live-search="true" data-selected-text-format="count &gt; 1" title="">
                        <option value="select" disabled selected>Seleccionar</option>
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
                    <div class="form-group col-md-6">
                      <label class="form-label" for="email">Dirección </label>
                      <input class="form-control" type="text" name="email" id="email" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">Código Postal</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="email">Población </label>
                      <input class="form-control" type="text" name="email" id="email" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">Teléfono</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="email">Email </label>
                      <input class="form-control" type="email" name="email" id="email" value="">
                    </div>
                    <div class="form-group col-md-6">
                      <label class="form-label" for="phone">Web</label>
                      <input class="form-control" type="text" name="phone" id="phone" value="">
                    </div>
                  </div>
                  <button class="btn btn-outline-primary mb-4" type="submit">Actualizar</button>
                </form>
              </div>
            </div>
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Categoría Sabor Granada</h5>
                </div>
                <div class="col-sm-3 text-right">
                  <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="category">Modificar</button>
                </div>
              </div>
              <div class="media text-sm text-muted"> <i class="fa fa-info fa-fw mr-2"></i>
                <div class="media-body mt-n1">Bebidas</div>
              </div>
              <div class="collapse" id="category">
                <form action="#">
                  <div class="row pt-4">
                    <div class="form-group col-md-12">
                      <label class="form-label" for="form_category">Añadir Nueva Categoría:</label>
                      <select v-model="cat" class="selectpicker form-control" name="category" id="form_category" data-style="btn-selectpicker" data-selected-text-format="count &gt; 1" title="" >
                        <option value="select" >Seleccionar</option>
                        <option value="5ffb41b5df75bf27c6bc3e30">Aceites</option>
                        <option value="5ffb440bdf75bf27c6bc3e32">Jamones</option>
                        <option value="5ffb41e5df75bf27c6bc3e31">Quesos y Lácteos</option>
                        <option value="5ffb3dacdf75bf27c6bc3e2f">Bebidas</option>
                        <option value="5ffb4911df75bf27c6bc3e39">Despensa</option>
                        <option value="5ffb4559df75bf27c6bc3e34">Conservas</option>
                        <option value="5ffb48c6df75bf27c6bc3e37">Panadería</option>
                        <option value="5ffb4636df75bf27c6bc3e35">Aperitivos</option>
                        <option value="5ffb4a41df75bf27c6bc3e3a">Frescos</option>
                        <option value="5ffb54083542592b9e9b8c5d">Charcutería</option>
                        <option value="5ffb48e4df75bf27c6bc3e38">Mermeladas y Miel</option>
                        <option value="5ffb47dbdf75bf27c6bc3e36">Congelados y Preparados</option>
                      </select>
                      <label class="form-label" for="form_category">Seleccionar SUB-Familias:</label>
                      <select  class="selectpicker form-control" name="category" id="form_category" data-style="btn-selectpicker" data-selected-text-format="count &gt; 1" title="" v-model="familias">
                        <option value="select" >Seleccionar</option>
                        <option v-for="family in families" :key="family.id">
                          
                          {{ family }}
                        </option>
                        
                      </select>
                    </div>
                  </div>
                  <button class="btn btn-outline-primary">Enviar</button>
                </form>
                
              </div>
            </div>
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Descripción</h5>
                </div>
                <div class="col-sm-3 text-right">
                  <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#address" aria-expanded="false" aria-controls="address">Modificar</button>
                </div>
              </div>
              <div class="media text-sm text-muted"> <i class="fa fa-info fa-fw mr-2"></i>
                <div class="media-body mt-n1">Microcervecera ubicada en la costa tropical, Almuñecar. Elaboramos cerveza de forma artesanal con materias primas de la mejor calidad y 100% natural.</div>
              </div>
              <div class="collapse" id="address">
                <form action="#">
                  <div class="row pt-4">
                    <div class="form-group col-md-12">
                      <label class="form-label" for="street">Descripción</label>
                      <textarea class="form-control" placeholder="Introduzca su nueva descripción" id="floatingTextarea"></textarea>
                    </div>         
                  </div>
                  <button class="btn btn-outline-primary">Actualizar</button>
                </form>
              </div>
            </div>
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Logotipo e Imagen de Cabecera</h5>
                </div>
                <div class="col-sm-3 text-right">
                  <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#logo" aria-expanded="false" aria-controls="logo">Modificar</button>
                </div>
              </div>
              <div class="media text-sm text-muted"> 
                <div class="media-body mt-n1"><img src="img/photo/logo-segral.jpg" alt=""> <img src="img/photo/segral-portada.jpg" style="max-width: 40%;"></div>
              </div>
              <div class="collapse" id="logo">
                <form action="#">
                  <div class="row pt-4">
                    <div class="form-group col-md-12">
                      <div class="mb-3">
                        <label class="form-label" for="street">Logotipo</label>
                        <input class="form-control" type="file" id="formFile">
                      </div>
                      <div class="mb-3">
                        <label class="form-label" for="street">Imagen Cabecera</label>
                        <input class="form-control" type="file" id="formFile">
                      </div>
                    </div>         
                  </div>
                  <button class="btn btn-outline-primary">Actualizar</button>
                </form>
              </div>
            </div>
            <div class="text-block"> 
              <div class="row mb-3">
                <div class="col-sm-9">
                  <h5>Imágenes</h5>
                </div>
                <div class="col-sm-3 text-right">
                  <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#fotos" aria-expanded="false" aria-controls="logo">Modificar</button>
                </div>
              </div>
              <div class="media text-sm text-muted"> 
                <div class="media-body mt-n1"><img src="img/photo/segral-1.jpg" style="max-width: 23%;"> <img src="img/photo/segral-2.jpg" style="max-width: 23%;"> <img src="img/photo/segral-3.jpg" style="max-width: 23%;"> <img src="img/photo/segral-4.jpg" style="max-width: 23%;"></div>
              </div>
              <div class="collapse" id="fotos">
                <form action="#">
                  <div class="row pt-4">
                    <div class="form-group col-md-12">
                      <div class="mb-3">
                        <label class="form-label" for="street">Añadir Foto</label>
                        <input class="form-control" type="file" id="formFile">
                      </div>
                    </div>         
                  </div>
                  <button class="btn btn-outline-primary">Actualizar</button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 ml-lg-auto">
            <div class="card border-0 shadow">
              <div class="card-header bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h4 class="h6 subtitle text-sm text-primary">Preguntas frecuentes sobre la Información General</h4>
                  </div>
                  <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-primary">
                    <use xlink:href="#identity-1"> </use>
                  </svg>
                </div>
              </div>
              <div class="card-body p-4">
                <h6>¿Qué información se comparte con otros?</h6>
                <p class="text-muted text-sm card-text">Su información solo se comparte con empresas HORECA listadas en Sabor Granada, nunca con otros productores. Las empresas HORECA podrán ver toda la información que ponga en su ficha.</p>
                  <h6>¿Qué cambios deben ser aprobados por Sabor Granada?</h6>
                <p class="text-muted text-sm card-text">Si cambia de categoría o añade una nueva, deberá ser aprobado por Sabor Granada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

import {mapState} from 'vuex'

export default {
  name: 'GenInfPro', 
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
  watch: {
    cat: {
      handler(cat) {
        this.cat = cat
        this.familiaproductos(cat);
      }
    }
  }
}
</script>

<style>
  .adminindex {
    padding-top: 135px
  }
</style>