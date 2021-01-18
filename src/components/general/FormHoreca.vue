<template>
  <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-4"><a href="/"><img class="img-fluid mb-3" src="../../assets/logo.png" alt="..."></a>
              <h2>Formulario solicitud adhesión para Empresas HORECA</h2>
              <p class="text-muted">Para poder registrarse en la plataforma su acceso deberá estar validado por Sabor Granada. <!-- Para más información visite la web de <a href="https://www.saborgranada.es/quieres-pertenecer-sabor-granada/" target="_blank" rel="noopener">Sabor Granada</a>. -->
              <br>
              <br>
              Por favor, complete este formulario con sus datos. Desde Sabor Granada nos pondremos en contacto para completar su alta para el acceso al Catálogo de productos Sabor Granada dirigido a Empresas HORECA.
              </p>
            </div>
            <form class="form-validate">
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Nombre Empresa </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="Nombre Empresa" autocomplete="off" required data-msg="Por favor, introduzca su Nombre de Empresa">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Persona Contacto </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="Nombre Persona Contacto" autocomplete="off" required data-msg="Por favor, introduzca su Nombre de Empresa">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername"> CIF o DNI</label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="CIF o DNI" autocomplete="off" required data-msg="Por favor, introduzca su CIF">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername">Código Actividad IAE</label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="Indica Código de Actividad IAE" autocomplete="off" required data-msg="Por favor, introduzca su CIF">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Población </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="Población" autocomplete="off" required data-msg="Por favor, introduzca su Población">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Provincia </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="Provincia" autocomplete="off" required data-msg="Por favor, introduzca su Población">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Dirección de Email </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="email" placeholder="nombre@dominio.com" autocomplete="off" required data-msg="Por favor, introduzca su email">
              </div>
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Teléfono </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="text" placeholder="Teléfono" autocomplete="off" required data-msg="Por favor, introduzca su Teléfono">
              </div>
              
              <hr class="my-4">

              <div class="form-group mb-4">
                <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" id="loginRemember" type="checkbox">
                  <label class="custom-control-label text-muted" for="loginRemember"> <span class="text-sm">Acepto, he leído y comprendo la <router-link :to="`/privacidad-general`">Política de Privacidad</router-link> y la <router-link :to="`/cookies`">Política de Cookies</router-link>.</span></label>
                </div>
              </div> 
              <!-- Submit-->
              <button class="btn btn-lg btn-block btn-primary">REGISTRARSE</button>
            </form>
              <hr class="my-4">
              <p class="text-center"><small class="text-muted text-center">¿No perteneces a Sabor Granada? <a href="https://www.saborgranada.es/quieres-pertenecer-sabor-granada/" target="_blank" rel="noopener">Infórmate</a></small></p>
              
            <a class="close-absolute mr-md-5 mr-xl-6 pt-5" href="/"> 
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
export default {
  name: 'FormHoreca'
}
</script>

<style scoped>
body {
  padding-top: 0 !important;
}

#foto-bg {
  background-image: url(../../assets/photo/home-horeca.jpg)
}
</style>