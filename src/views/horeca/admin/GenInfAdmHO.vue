<template>
  <div class="home">
    <HeaderHoreca/>
    <GenInfHO/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHoreca from '@/components/horeca/HeaderHoreca'
import GeneralFooter from '@/components/general/Footer.vue'
import GenInfHO from '../../../components/horeca/admin/GenInfHO'

export default {
  name: 'GenInfAdmHORECA',
  components: {
    HeaderHoreca,
    GeneralFooter,
    GenInfHO
  }
}


</script>

<style>

</style>