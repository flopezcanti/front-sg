<template>
  <div>
    <HeaderHoreca/>
    <section class="hero py-3 pt-lg-7">
      <div class="container position-relative" style="padding-top: 44px">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-center">
          <li class="breadcrumb-item"><router-link :to="`../../horeca/index`">Inicio</router-link></li>
          <li class="breadcrumb-item active">Preguntas Frecuentes</li>
        </ol>
        <h1 class="hero-heading mb-5">Preguntas Frecuentes</h1>
        <div class="row">
          <div class="col-xl-8 mx-auto"><p class="lead mb-0">Para cualquier otra cuestión relacionada con el funcionamiento de la plataforma puedes consultar el manual de usuario, o bien, contactar con Sabor Granada a través del correo electrónico <a href="mailto:saborgranada@dipgra.es">saborgranada@dipgra.es</a></p></div>
        </div>
      </div>
    </section>
    <!-- FAQ-->
    <section class="py-6">
      <div class="container">
        <div class="py-4">
          <h2 class="mb-5 text-primary">Gestionar mi Información</h2>
          <div class="row">
            <div class="col-md-6">
              <h5>¿Cómo puedo añadir o modificar mi información de contacto?</h5>
              <p class="text-muted mb-4">Pulsa en la parte superior derecha, ahí verás que se abre un desplegable donde pulsando en “modificar mis datos”.</p>
              <h5>¿Se publican automáticamente mis cambios realizados sobre la información de mi empresa?</h5>
              <p class="text-muted mb-4">No, toda la información previa publicación en la página debe ser autorizada desde Sabor Granada.</p>
            </div>
            <div class="col-md-6">
              <h5>¿Cada cuánto tiempo debo actualizar la información de mi empresas/productos buscados?</h5>
              <p class="text-muted mb-4">Te recomendamos que lo actualices cada vez exista un cambio en la información de tu empresa o necesidades de incorporar nuevos productos (variación del día/persona de atención al productor, productos que estás buscando…). Piensa que esta plataforma es un nuevo canal para ti para que puedas conocer nuevos productos agroalimentarios granadinos que incorporar a tus cartas, comparar precios, encontrar a un distribuidor que te lleve el producto…; y todo en función de tus necesidades.</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="py-4">
          <h2 class="mb-5 text-primary">Buscar y Contactar</h2>
          <div class="row">
            <div class="col-md-6">
              <h5>¿Cómo puedo encontrar productores que oferten productos en los que yo estoy interesado/a?</h5>
              <p class="text-muted mb-4">Pulsa en el “buscador productores” y tras ello a través de los filtros inteligentes, las empresas podréis segmentar los productores adheridos a la plataforma en función de los productos ofertados, comarca, municipio, palabras clave y/o precio.</p>
              <h5>¿Qué significa si tras realizar una búsqueda con los filtros sobre los productores que ofrecen los productos que necesito incorporar a mi carta, no aparece ningún resultado? </h5>
              <p class="text-muted mb-4">Actualmente ningún productor adherido a la plataforma está ofertando ese tipo de producto.</p>
            </div>
            <div class="col-md-6">
              <h5>¿Cómo puedo contactar con los productores que ofrecen las categorías de productos en los que estoy interesado/a?</h5>
              <p class="text-muted mb-4">Tras realizar la búsqueda utilizando nuestros filtros inteligentes, pulsa sobre cada productor que aparezca en el listado, desde ahí podrás acceder a la ficha personal de esa empresa. En ella podrás ver su catálogo de productos ofertados, precio de cada artículo (con/sin IVA), unidades de venta… donde además, podrás conocer el distribuidor de esos productos que puede atenderte en tu comarca o contactar con la empresa directamente en su defecto.</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="py-4">
          <h2 class="mb-5 text-primary">Privacidad</h2>
          <div class="row">
            <div class="col-md-6">
              <h5>¿El cliente final puede acceder a mis datos e información?</h5>
              <p class="text-muted mb-4">No, únicamente los productores que estén validados desde Sabor Granada podrán ver vuestra información, para el resto será inaccesible.</p>
              <h5>¿Quién es el administrador/a de la plataforma y cómo puedo contactar con él/ella? </h5>
              <p class="text-muted mb-4">La administración de la plataforma la realiza directamente Sabor Granada, puedes contactar con ellos/as a través del correo electrónico <a href="mailto:saborgranada@dipgra.es">saborgranada@dipgra.es</a></p>
            </div>
            <div class="col-md-6">
              <h5>¿Pueden ver otras empresas HORECA mi información publicada?</h5>
              <p class="text-muted mb-4">No, únicamente los productores validados desde Sabor Granada podrán ver vuestra información, para el resto será inaccesible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GeneralFooter/>
  </div>
</template>

<script>

import GeneralFooter from '@/components/general/Footer.vue'
import HeaderHoreca from '@/components/horeca/HeaderHoreca';

export default {
  name: 'FaqHORECA',
  components: {
    HeaderHoreca,
    GeneralFooter,
  }
}
</script>

<style>

</style>