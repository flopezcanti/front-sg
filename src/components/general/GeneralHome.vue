<template>
<div>
  <section class="py-5 bg-gray-100">
      <div class="container" style="padding-top: 72px">
        <div class="text-center pb-lg-4">
          <p class="subtitle text-secondary mb-3">CATÁLOGO DE PRODUCTOS SABOR GRANADA DIRIGIDO A EMPRESAS HORECA
          </p>
          <h2 class="mb-5">Bienvenid@s</h2>
          <p class="text-muted ">Bienvenid@ al catálogo virtual impulsado desde Sabor Granada para los productos, productores y empresas HORECA, donde productores y hosteleros podréis interconectar entre vosotros/as para conocer los productos agroalimentarios ofertados hacia el canal HORECA y sus distribuidores en cada una de nuestras comarcas; además se podrán conocer las necesidades que los restaurantes, caterings y hoteles de la provincia a la hora de incorporar productos para vuestras cartas.</p>
        
          <p class="text-muted mb-5">Desde Sabor Granada, creamos sinergias y relaciones comerciales entre empresas HORECA y productores.</p>
        </div>
        <div class="row">
          <div class="col-lg-6 mb-3 mb-lg-0 text-center">
            <div class="px-0 px-lg-3">
              
              <h3 class="h5">Empresas HORECA</h3>
              <p class="text-muted">Encuentra los productos que necesitas para tu negocio y contacta con sus productores</p>
              <router-link :to="`/login`" class="link-primary">Acceder</router-link> / <router-link :to="`/registro`" class="link-primary">Registrarse</router-link>
            </div>
          </div>
          <div class="col-lg-6 mb-3 mb-lg-0 text-center">
            <div class="px-0 px-lg-3">
              
              <h3 class="h5">Productores</h3>
              <p class="text-muted">Localiza las empresas HORECA que necesitan incorporar tus productos a sus cartas</p>
              <router-link :to="`/login`" class="link-primary">Acceder</router-link> / <router-link :to="`/registro`" class="link-primary">Registrarse</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12">
            <p class="subtitle text-primary">Familias de productos Sabor Granada</p>
            <h2>¿Qué necesitas? ¿Qué ofreces?</h2>
            <p class="text-muted">Busca productores que ofrecen lo que necesitas. Encuentra empresas HORECA que necesitan lo que ofreces.</p>
          </div>
        </div>
        <div class="row mb-2">
          <!-- Productos Categorías-->
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/aceite.jpg" alt="Card image">
              <div class="card-body overlay-content ">
                <h6 class="card-title text-shadow text-uppercase">Aceite</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/jamon.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Jamones</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/queso.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Quesos y Lácteos</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/vinos-bebidas.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Bebidas</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/despensa.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Despensa</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/conservas.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Conservas</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Productos Categorías-->
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/panaderia.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Panadería</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/aperitivos.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Aperitivos</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/frescos.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Frescos</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/charcuteria.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Charcutería</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/mermeladas-miel.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Mermeladas y Miel</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><router-link :to="`/login`" class="tile-link"></router-link><img class="bg-image" src="../../assets/productos/congelados-preparados.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Congelados y Preparados</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-7 position-relative dark-overlay"><img class="bg-image" src="../../assets/photo/photo-1497436072909-60f360e1d4b1.jpg" alt="">
      <div class="container">
        <div class="overlay-content text-white py-lg-4">
          <p class="subtitle text-shadow text-white mb-2">EMPRESAS HORECA Y PRODUCTORES</p>
          <h3 class="display-3 font-weight-bold  text-shadow mb-5">¿Aún no perteneces a <br>Sabor Granada?</h3><a class="btn btn-lg btn-primary" target="_blank" rel="noopener" href="https://www.saborgranada.es/quieres-pertenecer-sabor-granada/">Infórmate</a>
        </div>
      </div>
    </section>
    </div>
</template>

<script>
export default {
  name: 'GeneralHome',
  // props: {
  //   msg: String
  // }
}
</script>
<style scoped>
body {
  padding-top: 72px !important;
}
</style>

