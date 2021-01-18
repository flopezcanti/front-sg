<template>
<div class="home">
  <section class="py-5">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-start">
          <li class="breadcrumb-item"><router-link :to="`index`">Administración</router-link></li>
          <li class="breadcrumb-item active">Gestión de usuarios</li>
        </ol>
        <div class="d-flex justify-content-between align-items-end mb-5">
          <h1 class="hero-heading mb-0">Gestión de Usuarios</h1>
        </div>
        <div class="text-block"> 
          <div class="row mb-3">
            <div class="col-sm-9">
              <h5>Añadir Nuevo Usuario</h5>
            </div>                
          </div>
          <div class="" id="">
            <form @submit.prevent="agregarUsuario()">
              <div class="row pt-4">
                <div class="form-group col-md-6">
                  <label class="form-label" for="name">Nombre Empresa</label>
                  <input class="form-control" type="text" name="name" id="name" value="" v-model="nuevoUsuario.nombre">
                </div>
                <div class="form-group col-md-6">
                  <label class="form-label" for="date">Email</label>
                  <input class="form-control" type="text" name="date" id="date" value="" v-model="nuevoUsuario.email">
                </div>
                <div class="form-group col-md-6">
                  <label class="form-label" for="form_category">TIPO USUARIO</label>
                  <select class="selectpicker form-control" name="category" id="form_category" data-style="btn-selectpicker" title="" v-model="nuevoUsuario.role">
                    <option value="select"  selected>Seleccionar</option>
                    <option value="HORECA_ROLE">HORECA</option>
                    <option value="PRODUCER_ROLE">PRODUCTOR</option>
                    <option value="ADMIN_ROLE">ADMINISTRADOR</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label class="form-label" for="password">Contraseña</label>
                  <input class="form-control" type="password" name="password" id="password" value="" v-model="nuevoUsuario.password">
                </div>
                
              </div>
              <button class="btn btn-outline-primary mb-4" type="submit">Añadir Usuario</button>
            </form>
          </div>
          <b-alert
            :show="dismissCountDown"
            dismissible
            :variant="mensaje.color"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
          >
            {{mensaje.texto}}
          </b-alert>
        </div>
        <div class="text-block"> 
          <div class="row">
            <div class="col-sm-9">
              <h5>Usuarios Registrados</h5>
            </div>
          </div>

          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">PRODUCTORES</a>
            </li>
            <li class="nav-item" role="presentation">
              <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">HORECA</a>
            </li>
          </ul>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
              <!-- Listado de USUARIOS Productores -->
              <div class="list-group shadow mb-5" >
                <div v-for="productor in productores" :key="productor._id">
                  <a class="list-group-item list-group-item-action p-4" href="`/usuario`">
                    <div class="row">
                      <div class="col-lg-4 align-self-center mb-4 mb-lg-0">
                        <div class="d-flex align-items-center mb-3">
                          <h2 class="h5 mb-0">{{productor.usuario.nombre}}</h2><img class="avatar avatar-sm avatar-border-white ml-3" src="../../assets/avatar/avatar-1.jpg" alt="Jack London">
                        </div>
                      </div>
                      <div class="col-lg-8">
                        <div class="row">
                          <div class="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                            <h6 class="label-heading">Teléfono</h6>
                            <p class="text-sm font-weight-bold">{{productor.telefono}}</p>
                            
                          </div>
                          <div class="col-6 col-md-4 col-lg-3 py-3">
                            <h6 class="label-heading">Email</h6>
                            <p style ="overflow:auto" class="text-sm font-weight-bold">{{productor.usuario.email}}</p>
                          </div>
                          <div class="col-6 col-md-4 col-lg-3 py-3">
                            <h6 class="label-heading">COMARCA</h6>
                            <p class="text-sm font-weight-bold">{{productor.zonaubicacion}}</p>
                          </div>
                          
                          <div class="col-12 col-lg-3 align-self-center"><span class="text-primary text-sm text-uppercase mr-4 mr-lg-0"><i class="fa fa-check fa-fw mr-2"> </i>VER FICHA</span><br class="d-none d-lg-block"><span class="text-primary text-sm text-uppercase"><i class="fa fa-trash fa-fw mr-2"> </i>Eliminar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <!-- Pagination -->
              <nav aria-label="Page navigation example">
                <ul class="pagination pagination-template d-flex justify-content-center">
                  <li class="page-item"><router-link :to="{query: {listaUsuarios: 1}}" class="page-link"> <i class="fa fa-angle-left"></i> </router-link></li>
                  <li class="page-item"><router-link :to="{query: {listaUsuarios: 2}}" class="page-link"> <i class="fa fa-angle-right"></i> </router-link></li>
                </ul>
              </nav>
            </div>
            
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              HORECA
            </div>

          </div>
 
        </div>  
            

          <!-- <nav aria-label="Page navigation example">
            <ul class="pagination pagination-template d-flex justify-content-center">
              <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#"> <i class="fa fa-angle-right"></i></a></li>
            </ul>
          </nav> -->
        
        
      </div>
    </section>   
</div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'

export default {
  name: 'BodyAdminUserList',
  data() {
    return {
      listaUsuarios: 1,
      totalUsuarios: 0,
      limite: 9, 
      productores: [],
      nuevoUsuario: {
        nombre: '', 
        email: '',
        password: '',
        role: ''
      },
      dismissSecs: 5,
      dismissCountDown: 0,
      mensaje: {
        color: '',
        texto: ''
      }
    }
  },
  
  computed: {
    ...mapState(['token'])
  },
  methods: {
    paginacion(pagina){
      let config = {
        headers: {
          token: this.token 
        }
      }
      let skip = (pagina - 1) * this.limite;

      this.axios.get(`/productor?desde=${skip}&limite=${this.limite}` , config)
        .then(res => {
          this.productores = res.data.productor;
          // this.totalUsuarios = res.data.cuantos;
          console.log(this.productores)
          //console.log(this.totalUsuarios)
        })
        .catch(e => {
          console.log(e)
        })
    },

    listarUsuarios() {
      let config = {
        headers: {
          token: this.token 
        }
      }

      this.axios.get('/usuario', config)
        .then(res => {
          console.log(res.data)
          this.usuarios = res.data
        })
        .catch(e => {
          console.log(e.response)
        })
    },

    agregarUsuario() {
      let config = {
        headers: {
          token: this.token 
        }
      }
      this.axios.post('/usuario', this.nuevoUsuario, config )
        .then(res => {
            this.nuevoUsuario.nombre = ''
            this.nuevoUsuario.email = ''
            this.nuevoUsuario.role = ''
            this.nuevoUsuario.password = ''
            this.mensaje.color = 'success';
            this.mensaje.texto = `Nuevo usuario creado:`;
            this.showAlert();
            this.usuarios.push(res.data)
        })
        .catch(e => {
          if(e.response.data.err.message){
            this.mensaje.texto = `No se añadión al usuario. ${e.response.data.err.message};`
          } else {
            this.mensaje.texto = `Error de sistema`
          }
          this.mensaje.color = 'danger';
          this.showAlert();
        })
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    }
  },
  // created () {
  //   this.listarUsuarios();
  // },
  watch: {
    "$route.query.listaUsuarios" : {
      immediate: true,
      handler(pagina) {
        pagina = parseInt(pagina) || 1
        this.paginacion(pagina);
        this.listaUsuarios = pagina;
      }
    }
  }
}
</script>

<style>
  .home {
    padding-top: 65px;
    }
</style>