
<template>
  <div class="home">
    <HeaderHoreca/>
    <HORECASecurity/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHoreca from '@/components/horeca/HeaderHoreca'
import GeneralFooter from '@/components/general/Footer.vue'
import HORECASecurity from '../../../components/horeca/admin/HOSecurity'

export default {
  name: 'SecAdmHORECA',
  components: {
    HeaderHoreca,
    GeneralFooter,
    HORECASecurity
  }
}


</script>

<style>

</style>