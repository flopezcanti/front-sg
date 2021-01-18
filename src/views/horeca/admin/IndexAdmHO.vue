<template>
  <div class="home">
    <HeaderHoreca/>
    <BodyAdminInHO/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHoreca from '@/components/horeca/HeaderHoreca'
import GeneralFooter from '@/components/general/Footer.vue'
import BodyAdminInHO from '../../../components/horeca/admin/BodyAdmInHO'

export default {
  name: 'IndexAdmHORECA',
  components: {
    HeaderHoreca,
    GeneralFooter,
    BodyAdminInHO
  }
}
</script>

<style>

</style>