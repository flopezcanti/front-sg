<template>
  <div class= adminindex>
    <section class="pt-5 py-5">
      <div class="container">

        <h1 class="hero-heading mb-0">Su Cuenta</h1>
        <p class="text-muted mb-5">Gestione sus datos, productos y contraseña desde aquí.</p>
        <div class="row">
          <div class="col-6 col-md-4 mb-30px">
            <div class="card h-100 border-0 shadow hover-animate">
              <div class="card-body">
                <div class="icon-rounded bg-secondary-light mb-3">
                  <svg class="svg-icon text-secondary w-2rem h-2rem">
                    <use xlink:href="#identity-1"> </use>
                  </svg>
                </div>
                <h5 class="card-title mb-3"><router-link :to="`admin-general-info`" class="text-decoration-none text-dark stretched-link">Información General</router-link></h5>
                <p class="text-muted card-text text-sm">La información general de tu empresa: Teléfonos, mails, direcciones... </p>
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
                <h5 class="card-title mb-3"><router-link :to="`admin-establecimientos`" class="text-decoration-none text-dark stretched-link" >Mis establecimientos</router-link></h5>
                <p class="text-muted card-text text-sm">Si tienes más de un establecimiento, aquí podrás añadir, eliminar o modificar tus establecimientos...</p>
              </div>
            </div>
          </div>
          <div class="col-6 col-md-4 mb-30px">
            <div class="card h-100 border-0 shadow hover-animate">
              <div class="card-body">
                <div class="icon-rounded bg-secondary-light mb-3">
                  <svg class="svg-icon text-secondary w-2rem h-2rem">
                    <use xlink:href="#password-1"> </use>
                  </svg>
                </div>
                <h5 class="card-title mb-3"><router-link :to="`admin-seguridad`" class="text-decoration-none text-dark stretched-link" >Contraseña &amp; privacidad</router-link></h5>
                <p class="text-muted card-text text-sm">Cambiar tu contraseña y realizar otras gestiones de tu perfil relacionadas con la privacidad.</p>
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
    name: 'BodyAdminInHO',
}
</script>
 
<style>
 .adminindex {
    padding-top: 135px
  }
</style>