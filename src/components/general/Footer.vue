<template>
  <!-- Footer-->
  <div>
  <hr>
    <footer class="position-relative z-index-10 d-print-none">
      <!-- Main block - menus, subscribe form-->
      
      <!-- Copyright section of the footer-->
      <div class="py-4 bg-white-200 text-muted"> 
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="font-weight-bold text-uppercase text-dark mb-3">Catálogo de productos Sabor Granada dirigido a empresas HORECA</div>
              <a href="https://www.dipgra.es" rel="noopener" target="_blank"><img src="../../assets/diputacion.jpg" alt="" class="m-3"></a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-4 font-weight-light bg-gray-800 text-gray-300">
        <div class="container ">
          <div class="row ">
            <div class="col-md-5 mt-3">
              <p class="text-sm mb-md-0 ">&copy; 2020, Sabor Granada. Todos los derechos Reservados.</p>
            </div>
            <div class="col-md-5 align-middle">
              <ul class="list-inline mb-0 mt-3  text-sm  ">
                <li class="list-inline-item align-middle"><router-link :to="`/privacidad-general`" class="text-white">Política privacidad</router-link></li>
                <li class="list-inline-item align-middle"><router-link :to="`/cookies`" class="text-white">Política cookies  </router-link></li>
                <li class="list-inline-item align-middle"><router-link :to="`/registro-actividades`" class="text-white">Registro  Actividades</router-link></li>
              </ul>
            </div>
            <div class="col-md-2">
              <a href="https://www.seitonbusinessconsulting.com/" target="blank" rel="noopener"><img src="../../assets/seiton-firma.png" alt="" class=""></a>
            </div>
          </div>
        </div>
        
      </div>
      
    </footer>
    </div>
</template>

<script>
//import  '../assets/js/theme.js';
export default {
  name: 'GeneralFooter'
  // props: {
  //   msg: String
  // },
  
}


</script>

<style>

</style>