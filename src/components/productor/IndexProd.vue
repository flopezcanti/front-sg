<template>
  <div>
    <section class="hero-home">
      <div class="swiper-container hero-slider ">
        <div class="swiper-wrapper dark-overlay">
          <div class="swiper-slide" id="slide-1"></div>
        </div>
      </div>
      <div class="container py-6 py-md-7 text-white z-index-20">
        <div class="row">
          <div class="col-xl-10">
            <div class="text-center text-lg-left">
              <h1 class="display mt-5 font-weight-bold text-shadow">Busca empresas HORECA Sabor Granada</h1> 
            </div>
            <div class="search-bar p-3 p-lg-1 pl-lg-4">
              <form action="#">
                <div class="row">
                  <div class="col-lg-3 d-flex align-items-center form-group">
                    <select class="selectpicker" title="" data-style="btn-form-control">
                      <option value="" >¿Qué ofreces?</option>
                      <option value="aceites">Aceites</option>
                      <option value="jamones">Jamones</option>
                      <option value="quesos_lacteos">Quesos y Lácteos</option>
                      <option value="bebidas">Bebidas</option>
                      <option value="despensa">Despensa</option>
                      <option value="conservas">Conservas</option>
                      <option value="panaderia">Panadería</option>
                      <option value="aperitivos">Aperitivos</option>
                      <option value="frescos">Frescos</option>
                      <option value="charcuteria">Charcutería</option>
                      <option value="mermelada_miel">Mermeladas y Miel</option>
                      <option value="congelados_preparados">Congelados y Preparados</option>
                    </select>
                  </div>
                  <div class="col-lg-4 d-flex align-items-center form-group">
                    <div class="input-label-absolute input-label-absolute-right w-100">
                      <label class="form-label" for="form_neighbourhood"></label>
                      <select class="selectpicker" title="" data-style="btn-form-control">
                        <option value="neighbourhood_1" selected>Comarca de Ubicación </option>
                        <option value="neighbourhood_1">Comarca de Alhama</option>		
                        <option value="neighbourhood_2">Comarca de la Alpujarra Granadina</option>	
                        <option value="neighbourhood_3">Comarca de Baza</option>    		
                        <option value="neighbourhood_4">Costa Granadina</option>		
                        <option value="neighbourhood_5">Comarca de Guadix</option> 		
                        <option value="neighbourhood_6">Comarca de Huéscar</option>		
                        <option value="neighbourhood_7">Comarca de Los Montes</option>		
                        <option value="neighbourhood_8">Comarca del Valle de Lecrín</option>		
                        <option value="neighbourhood_9">Comarca de la Vega de Granada</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-lg-3 d-flex align-items-center form-group no-divider">
                    <select class="selectpicker" title="" data-style="btn-form-control">
                      <option value="neighbourhood_1" selected>Tipo Negocio</option>
                      <option value="category_0" >Hotel </option>
                      <option value="category_1" >Restaurante    </option>
                      <option value="category_2">Cafetería    </option>
                      <option value="category_3">Catering    </option>
                      <option value="category_4">Colectividades    </option>
                    </select>
                  </div>
                  <div class="col-lg-2">
                    <button class="btn btn-primary btn-block rounded-xl h-100" type="submit">Buscar </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-5 bg-gray-100">
      <div class="container" >
        <div class="text-center pb-lg-4">
          <p class="subtitle text-secondary mb-3">Catálogo Sabor Granada para la comercialización de sus productos hacia las empresas HORECA</p>
          <h2 class="mb-3">Bienvenid@s</h2>
          <p class="text-muted mb-2">Accede a nuestro catálogo destinado a que nuestros productores adheridos podáis comercializar vuestros productos de una forma más fácil hacia empresas del canal HORECA. En él, podréis encontrar empresas que buscan productos como los vuestros y podréis contactar con sus responsables de compra. Así de fácil.   </p>
        </div>
        
      </div>
    </section>
    <section class="py-6">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-12">
            <p class="subtitle text-primary">Familias de productos Sabor Granada</p>
            <h2>¿Qué ofreces?</h2>
            <p class="text-muted">Busca empresas HORECA que necesitan lo que ofreces</p>
          </div>
        </div>
        <div class="row mb-2">
          <!-- Productos Categorías-->
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/aceite.jpg" alt="Card image">
              <div class="card-body overlay-content ">
                <h6 class="card-title text-shadow text-uppercase">Aceite</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/jamon.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Jamones</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/queso.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Quesos y Lácteos</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/vinos-bebidas.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Bebidas</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/despensa.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Despensa</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/conservas.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Conservas</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Productos Categorías-->
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/panaderia.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Panadería</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/aperitivos.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Aperitivos</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/frescos.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Frescos</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/charcuteria.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Charcutería</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/mermeladas-miel.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Mermeladas y Miel</h6>
              </div>
            </div>
          </div>
          <div class="col-md-2 h-auto px-2">
            <div class="card card-poster gradient-overlay hover-animate mb-4 mb-lg-0"><a class="tile-link" href="category.html"></a><img class="bg-image" src="../../assets/productos/congelados-preparados.jpg" alt="Card image">
              <div class="card-body overlay-content">
                <h6 class="card-title text-shadow text-uppercase">Congelados y Preparados</h6>
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
  name: 'IndexProd',
}
</script>

<style>
.hero-home {
  padding-top: 72px;
}

#slide-1 {
  background-image:url('../../assets/photo/home-productores.jpg');
}
</style>