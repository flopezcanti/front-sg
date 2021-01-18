<template>
  <div class="home">
    <HeaderHoreca/>
    <EstAdmin/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHoreca from '@/components/horeca/HeaderHoreca'
import GeneralFooter from '@/components/general/Footer.vue'
import EstAdmin from '../../../components/horeca/admin/EstablecimientosAdmin'

export default {
  name: 'HOAdminEstablecimientos',
  components: {
    HeaderHoreca,
    GeneralFooter,
    EstAdmin
  }
}


</script>

<style>

</style>