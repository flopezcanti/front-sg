<template>
  <div>
    <header class="header">
      <!-- Navbar-->
      <nav class="navbar navbar-expand-lg fixed-top  shadow navbar-light bg-white">
        <div class="container-fluid">
          <div class="d-flex align-items-center"><a class="navbar-brand py-1" href="https://www.saborgranada.es" target="_blank" rel="noopener"><img src="../../assets/logo.png" alt="Sabor Granada logo"></a>
          </div>

          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>

          <!-- Navbar Collapse -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item"><router-link class="nav-link" :to="`/buscador/horeca`">Buscador empresas HORECA</router-link></li>
              <li class="nav-item"><router-link class="nav-link" :to="`/buscador/productores`">Buscador Productores</router-link></li> 
              <!-- USER -->
              <li class="nav-item dropdown ml-lg-3"><a id="userDropdownMenuLink" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img class="avatar avatar-sm avatar-border-primary mr-2" src="../../assets/avatar/avatar-111.jpg" alt=""></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdownMenuLink"><router-link :to="`../../admin/index`" class="dropdown-item">Administración</router-link><router-link :to="`../../admin/userlist`" class="dropdown-item">Gestión Usuarios</router-link><router-link :to="`../../admin/tareas-pendientes`" class="dropdown-item">Pendiente de Aprobación </router-link>
                  <div class="dropdown-divider"></div><a @click="cerrarSesion()" class="dropdown-item"><i class="fas fa-sign-out-alt mr-2 text-muted"></i> Cerrar Sesión</a>
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
  name: 'HeaderAdmin',
  methods: {
    ...mapActions(['cerrarSesion'])
  }
}
</script>

<style>

</style>