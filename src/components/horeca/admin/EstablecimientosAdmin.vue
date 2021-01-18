<template>
  <div class= "adminindex">
    <section class="py-5">
      <div class="container">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-start">
          <li class="breadcrumb-item"><router-link :to="`index`">Inicio</router-link></li>
          <li class="breadcrumb-item"><router-link :to="`admin-index`">Mi Cuenta</router-link></li>
          <li class="breadcrumb-item active">Mis Establecimientos</li>
        </ol>
        <h1 class="hero-heading mb-0">Mis Establecimientos</h1>
        <p class="text-muted mb-5">Si tienes varios establecimientos, aquí podrás añadir, eliminar o modificar sus direcciones para que aparezcan en tu ficha</p>
        <div class="row">
          <div class="col-lg-7">
            <div class="text-block"> 
              <div class="text-block"> 
                <div class="row mb-3">
                  <div class="col-sm-9">
                    <h5>Añadir Establecimiento</h5>
                  </div>                
                </div>

                <div class="" id="">
                  <form action="#">
                    <div class="row pt-4">
                      <div class="form-group col-md-4">
                        <label class="form-label" for="date">Nombre </label>
                        <input class="form-control" type="text" name="date" id="date" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="email">Dirección</label>
                        <input class="form-control" type="email" name="email" id="email" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="email">Teléfono</label>
                        <input class="form-control" type="email" name="email" id="email" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="phone">Email</label>
                        <input class="form-control" type="text" name="phone" id="phone" value="">
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="name">Comarca</label>
                        <select class="selectpicker form-control" name="neighbourhood" id="form_neighbourhood" data-style="btn-selectpicker" data-live-search="true" data-selected-text-format="count &gt; 1" title="">
                        <option value="select" disabled selected>Seleccionar</option>
                        <option value="neighbourhood_1">Todas las comarcas</option>
                        <option value="neighbourhood_1">Comarca de Alhama</option>		
                        <option value="neighbourhood_2">Comarca de la Alpujarra Granadina</option>	
                        <option value="neighbourhood_3">Comarca de Baza</option>    		
                        <option value="neighbourhood_4" >Costa Granadina</option>		
                        <option value="neighbourhood_5">Comarca de Guadix</option> 		
                        <option value="neighbourhood_6">Comarca de Huéscar</option>		
                        <option value="neighbourhood_7">Comarca de Los Montes</option>		
                        <option value="neighbourhood_8">Comarca del Valle de Lecrín</option>		
                        <option value="neighbourhood_9">Comarca de la Vega de Granada</option>
                      </select>
                      </div>
                      <div class="form-group col-md-4">
                        <label class="form-label" for="phone">Persona de contacto</label>
                        <input class="form-control" type="text" name="phone" id="phone" value="">
                      </div>
                    </div>
                    <button class="btn btn-outline-primary mb-4" type="submit">Añadir Establecimiento</button>
                  </form>
                </div>
              </div>
            </div>  
          </div>
          <div class="col-md-6 col-lg-4 ml-lg-auto">
            <div class="card border-0 shadow">
              <div class="card-header bg-primary-light py-4 border-0">
                <div class="media align-items-center">
                  <div class="media-body">
                    <h4 class="h6 subtitle text-sm text-primary">Preguntas frecuentes sobre Establecimientos</h4>
                  </div>
                  <svg class="svg-icon svg-icon svg-icon-light w-3rem h-3rem ml-3 text-primary">
                    <use xlink:href="#identity-1"> </use>
                  </svg>
                </div>
              </div>
              <div class="card-body p-4">
                <h6>¿Cuál es mi dirección principal?</h6>
                <p class="text-muted text-sm card-text">La dirección que mostraremos como principal en tu ficha es al que indicas en <router-link :to="`admin-general-info`">Información General</router-link></p>
                <h6>¿Cómo se muestran mis establecimientos?</h6>
                <p class="text-muted text-sm card-text">Si posees varios establecimientos podrás añadirlos en esta sección. En tu ficha, mostraremos un listado con los distintos establecimientos que añadas.</p>
              </div>
            </div>
          </div>
          <hr>

        <div class="text-block"> 
          <div class="row mb-3">
            <div class="col-sm-9">
              <h5>Mis Establecimientos</h5>
            </div>
          </div>
            <div class="col-lg-12">
              <div class="list-group shadow mb-5">
                <a class="list-group-item list-group-item-action p-2"  style="cursor:initial;">
                  <div class="row">
                    <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                      <h6 class="label-heading">Nombre</h6>
                      <h2 class="h5 text-primary">Cerveza Fresh</h2>
                      
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                        <h6 class="label-heading">Dirección</h6>
                        <p class="text-sm font-weight-bold">Estilo, Blonde Ale Hierbabuena, aromatica</p>
                        <h6 class="label-heading">Comarca</h6>
                        <p class="text-sm font-weight-bold">1,50€</p>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                      <h6 class="label-heading">Teléfono</h6>
                      <p class="text-sm font-weight-bold">1,82€</p>
                      <h6 class="label-heading">Email</h6>
                      <p class="text-sm font-weight-bold mb-0">Botella de cristal de 33 cl/unidad</p>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                      <h6 class="label-heading">Persona de Contacto</h6>
                      <p class="text-sm font-weight-bold mb-0">Caja de 12 botellas</p>
                      <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="category">Modificar</button>
                      <button class="btn btn-link pl-0 text-primary collapsed" type="button" data-toggle="collapse" data-target="#category" aria-expanded="false" aria-controls="category">ELIMINAR</button>
                    </div>
                  </div>
                </a>
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
  name: 'EstAdmin',
}
</script>

<style>
  .adminindex {
    padding-top: 135px
  }
</style>