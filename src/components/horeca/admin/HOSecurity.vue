<template>
  <div class= "adminindex">
    <section class="py-5">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-start">
          <li class="breadcrumb-item"><router-link :to="`index`">Inicio</router-link></li>
          <li class="breadcrumb-item"><router-link :to="`admin-index`">Mi Cuenta</router-link></li>
          <li class="breadcrumb-item active">Contraseña & privacidad </li>
        </ol>
        <h1 class="hero-heading mb-0">Contraseña & privacidad</h1>
        <p class="text-muted mb-5">Cambia tu contraseña y realiza otras gestiones de tu perfil relacionadas con la privacidad.</p>
        <div class="row">
          <div class="col-lg-7">
            <div class="text-block"> 
              <h3 class="mb-4">Acceso</h3>
              <div class="row">
                <div class="col-sm-8">
                  <h6>Contraseña</h6>
                  <p class="text-sm text-muted">Cambiar la contraseña</p>
                </div>
                <div class="col text-right">
                  <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#updatePassword" aria-expanded="false" aria-controls="updatePassword">Actualizar</button>
                </div>
              </div>
              <div class="collapse" id="updatePassword">
                <div class="row mt-4">
                  <div class="form-group col-md-6">
                    <label class="form-label" for="password-new">Nueva Contraseña</label>
                    <input class="form-control" type="password" name="password-new" id="password-new">
                  </div>
                  <div class="form-group col-md-6">
                    <label class="form-label" for="password-confirm">Confirma la Nueva Contraseña</label>
                    <input class="form-control" type="password" name="password-confirm" id="password-confirm">
                  </div>
                </div>
                <button class="btn btn-outline-primary">Actualizar la Contraseña</button>
              </div>
            </div>
            <div class="text-block"> 
              <h3 class="mb-4">Recuperar Contraseña</h3>
              <div class="row">
                <div class="col-sm-8">
                  <h6>Solicitar Nueva Contraseña</h6>
                  <p class="text-sm text-muted"></p>
                </div>
                <div class="col text-right"><a class="btn btn-text text-primary pl-0" href="#">SOLICITAR</a></div>
              </div>
            </div>
            <div class="text-block mb-5 mb-lg-0"> 
              <h3 class="mb-4">Baja del Servicio</h3>
              <div class="media">
                <div class="media-body pt-2">
                  <p class="text-sm text-muted">Si desea darse de baja del Servicio haga clic en el enlace más abajo y enviará un email con el asunto "Baja del catálogo productos Sabor Granada". Por favor, escriba en el email su nombre de empresa. Desde Sabor Granada nos encargaremos de gestionar su baja en un periodo máximo de 10 días.</p><a class="btn btn-text text-primary pl-0" href="mailto:saborgranada@dipgra.es?subject=Baja%20del%20catálogo%20productosHoreca%20y%20Productores%20Sabor%20Granada">Baja del Servicio</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 ml-lg-auto">
            <div class="card border-0 shadow">
              <div class="card-header bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h4 class="h6 subtitle text-sm text-primary">Mantenga su cuenta segura</h4>
                  </div>
                  <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-primary">
                    <use xlink:href="#shield-security-1"> </use>
                  </svg>
                </div>
              </div>
              <div class="card-body p-4">
                <h6 class="card-text">Cambie la contraseña: </h6>
                <p class="text-muted card-text">Si no recuerda su contraseña actual, puede recuperar la contraseña mediante una solicitud de recuperación de contraseña. </p>
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
  name: 'HORECASecurity',
}
</script>

<style>
  .adminindex {
    padding-top: 135px
  }
</style>