<template>
  <div class= "adminindex">
    <section class="py-5">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-start">
          <li class="breadcrumb-item"><router-link :to="`index`">Inicio</router-link></li>
          <li class="breadcrumb-item"><router-link :to="`admin-index`">Mi Cuenta</router-link></li>
          <li class="breadcrumb-item active">Mis Productores Favoritos </li>
        </ol>
        <h1 class="hero-heading mb-0">Mis Productores Favoritos</h1>
        <p class="text-muted mb-5">Consulta y gestiona los Productores que te parecen más interesantes.</p>
        <div class="row">
          <!-- Listado de USUARIOS -->
          <div class="list-group shadow mb-5" >
            <div v-for="usuario in usuarios" :key="usuario._id">
              <a class="list-group-item list-group-item-action p-4" href="`/usuario`">
                <div class="row">
                  <div class="col-lg-4 align-self-center mb-4 mb-lg-0">
                    <div class="d-flex align-items-center mb-3">
                      <h2 class="h5 mb-0">{{usuario.nombre}}</h2><img class="avatar avatar-sm avatar-border-white ml-3" src="#" alt="Jack London">
                    </div>
                  </div>
                  <div class="col-lg-8">
                    <div class="row">
                      <div class="col-6 col-md-4 col-lg-3 py-3 mb-3 mb-lg-0">
                        <h6 class="label-heading">Teléfono</h6>
                        <p class="text-sm font-weight-bold">{{usuario.telefono}}</p>
                        
                      </div>
                      <div class="col-6 col-md-4 col-lg-3 py-3">
                        <h6 class="label-heading">Email</h6>
                        <p class="text-sm font-weight-bold">{{usuario.email}}</p>
                      </div>
                      <div class="col-6 col-md-4 col-lg-3 py-3">
                        <h6 class="label-heading">COMARCA</h6>
                        <p class="text-sm font-weight-bold">{{usuario.comarca}}</p>
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

          <nav aria-label="Page navigation example">
            <ul class="pagination pagination-template d-flex justify-content-center">
              <li class="page-item"><a class="page-link" href="#"><i class="fa fa-angle-left"></i></a></li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item"><a class="page-link" href="#"> <i class="fa fa-angle-right"></i></a></li>
            </ul>
          </nav>

        </div>
      </div>
    </section>
  </div>  
</template>

<script>
export default {
  name: 'HORECAMyFavs',
}
</script>

<style>
  .adminindex {
    padding-top: 135px
  }
</style>