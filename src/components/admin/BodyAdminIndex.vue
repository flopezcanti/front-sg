<template>
  <div class= adminindex>
    <section class="pt-5 py-5">
      <div class="container">
        
        <h1 class="hero-heading mb-0">Administración</h1>
        <p class="text-muted mb-5">Gestione los usuarios y las tareas pendientes.</p>
        <div class="row">
          <div class="col-6 col-md-4 mb-30px">
            <div class="card h-100 border-0 shadow hover-animate">
              <div class="card-body">
                <div class="icon-rounded bg-secondary-light mb-3">
                  <svg class="svg-icon text-secondary w-2rem h-2rem">
                    <use xlink:href="#identity-1"> </use>
                  </svg>
                </div>
                <h5 class="card-title mb-3"><router-link class="text-decoration-none text-dark stretched-link" :to="`userlist`">Gestión de Usuarios</router-link></h5>
                <p class="text-muted card-text text-sm">Añada nuevos usuarios o edite los existentes... </p>
              </div>
            </div>
          </div>

          <div class="col-6 col-md-4 mb-30px">
            <div class="card h-100 border-0 shadow hover-animate">
              <div class="card-body">
                <div class="icon-rounded bg-secondary-light mb-3">
                  <svg class="svg-icon text-secondary w-2rem h-2rem">
                    <use xlink:href="#open-box-1"> </use>
                  </svg>
                </div>
                <h5 class="card-title mb-3"><router-link class="text-decoration-none text-dark stretched-link" :to="`tareas-pendientes`">Gestión de tareas pendientes</router-link></h5>
                <p class="text-muted card-text text-sm">Aquí podrás ver los usuarios que han realizado cambios y aprobarlos o cancelarlos</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
    name: 'BodyAdminIndex',
}
</script>
 
<style>
 .adminindex {
    padding-top: 135px
  }
</style>