<template>
  <div>
    <header class="header header-absolute">
      <!-- Navbar-->
      <nav class="navbar navbar-expand-lg fixed-top  shadow navbar-light bg-white">
        <div class="container-fluid">
          <div class="d-flex align-items-center"><a class="navbar-brand py-1" href="https://www.saborgranada.es" target="_blank" rel="noopener"><img src="../../assets/logo.png" alt="Sabor Granada logo"></a>
          </div>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <!-- Navbar Collapse -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item "><router-link :to="`../../horeca/index`" class="nav-link active" >Inicio</router-link></li>
              <li class="nav-item"><router-link :to="`../../buscador/productores`" class="nav-link" >Buscador Productores</router-link></li> 
              <li class="nav-item"><router-link :to="`../../horeca/faq`" class="nav-link" >Preguntas Frecuentes</router-link></li> 
              <li class="nav-item"><a class="nav-link" href="https://www.saborgranada.es/contacto/" target="_blank" rel="noopener">Contacto</a></li>     
              <!-- USER -->
              <li class="nav-item dropdown ml-lg-3"><a id="userDropdownMenuLink" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img class="avatar avatar-sm avatar-border-primary mr-2" src="../../assets/avatar/avatar-10.jpg" alt="Jack London"></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdownMenuLink"><router-link :to="`#`" class="dropdown-item">Ver mi Perfil </router-link><router-link :to="`../../horeca/admin-index`" class="dropdown-item">Modificar mis datos </router-link><router-link :to="`../../horeca/admin-favoritos`" class="dropdown-item">Mis Productores Favoritos </router-link>
                  <div class="dropdown-divider"></div><a class="dropdown-item" @click="cerrarSesion()"><i class="fas fa-sign-out-alt mr-2 text-muted"></i> Cerrar Sesión</a>
                </div>
              </li>
               <!-- /USER -->
            </ul>
          </div>
        </div>
      </nav>
      <!-- /Navbar -->
    </header>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HeaderHoreca',
  methods: {
    ...mapActions(['cerrarSesion'])
  }
}
</script>

<style>

</style>