<template>
  <div class="container-fluid px-3">
      <div class="row min-vh-100">
        <div class="col-md-8 col-lg-6 col-xl-5 d-flex align-items-center">
          <div class="w-100 py-5 px-md-5 px-xl-6 position-relative">
            <div class="mb-4"><a href="/"><img class="img-fluid mb-3" src="../../assets/logo.png" alt="..."></a>
              <h2>Registro</h2>
              <p class="text-muted">Para poder registrarse en la plataforma su acceso deberá estar validado por Sabor Granada. <!-- Para más información visite la web de <a href="https://www.saborgranada.es/quieres-pertenecer-sabor-granada/" target="_blank" rel="noopener">Sabor Granada</a>. -->
              <br>
              <br>
              Si es productor y desea adherirse a Sabor Granada por favor siga este enlace: <a href="https://www.saborgranada.es/quieres-pertenecer-sabor-granada/" target="_blank" rel="noopener">Información a Productores</a>.
              <br>
              <br>
              Si pertenece al sector HORECA y desea adherirse a Sabor Granada por favor complete  <a href="/formulario-horeca">este formulario.</a>
              <br>
              <br>
              
                 Si desde Sabor Granada le han enviado un correo con el registro a la plataforma, por favor utilice el nombre de usuario y la contraseña y complete el registro. Podrá cambiar su contraseña en su área de usuario.</p>
            </div>
            <form class="form-validate">
              <div class="form-group">
                <label class="form-label" for="loginUsername"> Dirección de Email </label>
                <input class="form-control" name="loginUsername" id="loginUsername" type="email" placeholder="nombre@dominio.com" autocomplete="off" required data-msg="Por favor, introduzca su email">
              </div>
              <div class="form-group mb-4">
                <div class="row">
                  <div class="col">
                    <label class="form-label" for="loginPassword"> Contraseña</label>
                  </div>
                </div>
                <input class="form-control" name="loginPassword" id="loginPassword" placeholder="Contraseña" type="password" required data-msg="Por favor, introduzca su contraseña">
              </div>
              <hr class="my-4">

              <div class="form-group mb-4">
                <div class="custom-control custom-checkbox">
                  <input class="custom-control-input" id="loginRemember" type="checkbox">
                  <label class="custom-control-label text-muted" for="loginRemember"> <span class="text-sm">Acepto, he leído y comprendo la <a href="/privacidad-general">Política de Privacidad</a> y la <a href="/cookies">Política de Cookies</a>.</span></label>
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
  name: 'Register'
}
</script>

<style scoped>
body {
  padding-top: 0 !important;
}
#foto-bg {
  background-image: url(../../assets/photo/photo-1497436072909-60f360e1d4b1.jpg)
}
</style>