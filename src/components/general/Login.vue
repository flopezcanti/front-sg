<template>
  <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-5"><a href="/"><img class="img-fluid mb-3" src="../../assets/logo.png" alt="..."></a>
              <h2>Bienvenid@s</h2>
            </div>
            <form class="form-validate" @submit.prevent="login">
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Dirección de Email </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="email" placeholder="nombre@dominio.com" autocomplete="off" required data-msg="Por favor, introduzca su email" v-model="usuario.email">
              </div>
              <div class="form-group mb-4">
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="loginPassword"> Contraseña</label>
                  </div>
                  <div class="col-auto"><a class="form-text small" href="#">¿Olvidó la contraseña?</a></div>
                </div>
                <input class="form-control" name="loginPassword" id="loginPassword" placeholder="Contraseña" type="password" required data-msg="Por favor, introduzca su contraseña" v-model="usuario.password">
              </div>
              
              <!-- Submit-->
              <button class="btn btn-lg btn-block btn-primary">Acceder</button>
              <br>
              <div v-if="mensaje != ''" class="alert alert-danger" role="alert">
                <p>{{mensaje}}</p>
              </div>
              <!-- Error-->


              <hr class="my-4">
              <p class="text-center"><small class="text-muted text-center">¿No tienes cuenta todavía? <a href="/registro">Regístrate</a></small></p>
            </form><a class="close-absolute mr-md-5 mr-xl-6 pt-5" href="/"> 
              <svg class="svg-icon w-3rem h-3rem">
                <use xlink:href="#close-1"> </use>
              </svg></a>
          </div>
        </div>
        <div class="col-md-4 col-lg-6 col-xl-7 d-none d-md-block">
          <!-- Image-->
          <div class="bg-cover h-100 mr-n3" id = "foto-bg" ></div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  components: {
    
  },
  name: 'Login',
  data() {
    return {
      usuario: {email: 'test1@gmail.com', password: '123456'},
      mensaje: ''
    }
  },
  methods: {
    ...mapActions(['guardarUsuario']),
    
    login(){
      this.axios.post('/login', this.usuario)
        .then(res => {
          const token = res.data.token;
          this.guardarUsuario(token)
        })
        .catch(e => {
          this.mensaje = e.response.data.err.message
        })
    }
  }
};

</script>

<style scoped>

#foto-bg {
  background-image: url(../../assets/photo/photo-1497436072909-60f360e1d4b1.jpg)
}
</style>