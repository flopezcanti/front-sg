<template>
  <header class="header">
      <!-- Navbar-->
      <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div class="container-fluid">
          <div class="d-flex align-items-center"><a class="navbar-brand py-1" href="/"><img src="../../assets/logo.png" alt="Sabor Granada logo"></a>
          </div>
          <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
          <!-- Navbar Collapse -->
          <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item "><a class="nav-link active" id="homeDropdownMenuLink" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                   Inicio</a>
              </li>
              <!-- <li class="nav-item"><a class="nav-link" href="faq.html">Preguntas Frecuentes</a></li>  -->
              
              <li class="nav-item"><a class="nav-link" href="https://www.saborgranada.es/contacto/" target="_blank" rel="noopener">Contacto</a></li>     
                      
              <li class="list-inline-item pt-2 mx-lg-3"><a class="text-muted text-hover-primary m  social-icon" href="https://es-es.facebook.com/MarcaSaborGranada/" target="_blank" rel="noopener" title="facebook"><i class="fab fa-facebook"></i></a> <a class="text-muted text-hover-primary social-icon" href="https://twitter.com/sabor_granada?lang=es" target="_blank" rel="noopener" title="twitter"><i class="fab fa-twitter"></i></a> <a class="text-muted text-hover-primary social-icon" href="https://www.youtube.com/channel/UCM-Kuxc83eeJeUzW1YAb64Q/featured" target="_blank" rel="noopener" title="Youtube"><i class="fab fa-youtube"></i></a> <a class="text-muted text-hover-primary social-icon" href=" https://www.instagram.com/saborgranada/?hl=es" target="_blank" rel="noopener" title="Instagram"><i class="fab fa-instagram"></i></a></li>
              
              <li class="nav-item mt-2 mt-lg-0 mr-lg-2 ml-lg-2 d-lg-none d-xl-inline-block"><router-link :to="`/login`" class="nav-link btn btn-primary">Acceder</router-link></li>
              <li class="nav-item mt-2 mt-lg-0 d-lg-none d-xl-inline-block"><router-link :to="`/registro`" class="nav-link btn btn-primary">Registrarse</router-link></li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- /Navbar -->
    </header>
</template>

<script>
export default {
  name: 'GeneralHeader',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
