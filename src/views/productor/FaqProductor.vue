<template>
  <div>
    <HeaderProductor/>
    <section class="hero py-3 pt-lg-7">
      <div class="container position-relative" style="padding-top: 44px">
        <!-- Breadcrumbs -->
        <ol class="breadcrumb pl-0  justify-content-center">
          <li class="breadcrumb-item"><router-link :to="`../../productor/index`">Inicio</router-link></li>
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
              <h5>¿Qué coste tiene integrar mi catálogo en esta web?</h5>
              <p class="text-muted mb-4">Sin ningún coste para todas aquellas empresas adheridas a Sabor Granada.</p>
              <h5>¿Cómo puedo añadir o modificar mi información de contacto?</h5>
              <p class="text-muted mb-4">Pulsa en la parte superior derecha, ahí verás que se abre un desplegable donde pulsando en “modificar mis datos”.</p>
              <h5>¿Se publican automáticamente mis cambios realizados sobre la información de mi empresa?</h5>
              <p class="text-muted mb-4">No, toda la información previa publicación en la página debe ser autorizada desde Sabor Granada.</p>
            </div>
            <div class="col-md-6">
              <h5>¿Cada cuánto tiempo debo actualizar la información de mi empresas/productos buscados?</h5>
              <p class="text-muted mb-4">Te recomendamos que lo actualices cada vez exista un cambio en tu catálogo (variación de precios, nuevos productos, ofertas especiales, cambio de distribuidor…). Piensa que esta plataforma es un nuevo canal de venta para ti y es importante que esté actualizado todo.</p>
              <h5>¿Si en alguna comarca no poseo un distribuidor o si prefiero que contacten conmigo directamente las empresas HORECA, que debo marcar en mi ficha personal?</h5>
              <p class="text-muted mb-4">Deberás marcar dentro de tu perfil en el apartado de distribuidores “envío desde el productor directamente”. </p>
            </div>
          </div>
        </div>
        <hr>
        <div class="py-4">
          <h2 class="mb-5 text-primary">Buscar y Contactar</h2>
          <div class="row">
            <div class="col-md-6">
              <h5>¿Cómo puedo encontrar empresas HORECA que busquen productos como lo que yo ofrezco?</h5>
              <p class="text-muted mb-4">Pulsa en el “buscador de empresas HORECA” y tras ello a través de filtros inteligentes, los productores podréis segmentar las empresas adheridas a la plataforma en función de los productos que estas busquen, su comarca y municipio de ubicación y/o tipo de negocio HORECA (hotel, restaurante, catering…).</p>
              <h5>¿Qué significa si tras realizar una búsqueda con los filtros sobre las empresas HORECA que busquen mis productos, no aparece ningún resultado? </h5>
              <p class="text-muted mb-4">Actualmente ninguna empresa HORECA adherida a la plataforma está buscando ese tipo de producto.</p>
            </div>
            <div class="col-md-6">
              <h5>¿Cómo puedo contactar con las empresas HORECA que buscan productos como los que yo ofrezco?</h5>
              <p class="text-muted mb-4">Tras realizar la búsqueda utilizando nuestros filtros inteligentes, pulsa sobre cada empresa HORECA que aparezca en el listado, desde ahí podrás acceder a la ficha personal de esa empresa donde en los cuadros situados a la derecha de la página, verás tanto los horarios de atención a los productores como los datos de contacto del/la responsable de compras. Además, podrás enviarle un correo electrónico solicitando una cita desde ahí.</p>
            </div>
          </div>
        </div>
        <hr>
        <div class="py-4">
          <h2 class="mb-5 text-primary">Privacidad</h2>
          <div class="row">
            <div class="col-md-6">
              <h5>¿El cliente final puede acceder a mis datos e información?</h5>
              <p class="text-muted mb-4">No, únicamente las empresas del canal HORECA (Hoteles, Restaurantes, Caterings y Cafeterías), que estén validadas desde Sabor Granada podrán ver vuestra información, para el resto será inaccesible.</p>
              <h5>¿Quién es el administrador/a de la plataforma y cómo puedo contactar con él/ella? </h5>
              <p class="text-muted mb-4">La administración de la plataforma la realiza directamente Sabor Granada, puedes contactar con ellos/as a través del correo electrónico <a href="mailto:saborgranada@dipgra.es">saborgranada@dipgra.es</a></p>
            </div>
            <div class="col-md-6">
              <h5>¿Pueden ver otros productores de Sabor Granada mi información publicada?</h5>
              <p class="text-muted mb-4">No, únicamente las empresas del canal HORECA que estén validadas desde Sabor Granada podrán ver vuestra información, para el resto será inaccesible.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <GeneralFooter/>
  </div>
</template>

<script>
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'

export default {
  name: 'FaqProductor',
  components: {
    HeaderProductor,
    GeneralFooter,
  }
}
</script>

<style>

</style>