<template>
  <div class="home">
    <HeaderHoreca/>
    <HORECAMyFavs/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderHoreca from '@/components/horeca/HeaderHoreca'
import GeneralFooter from '@/components/general/Footer.vue'
import HORECAMyFavs from '../../../components/horeca/admin/MyFavHO'

export default {
  name: 'MyFavHORECA',
  components: {
    HeaderHoreca,
    GeneralFooter,
    HORECAMyFavs
  }
}


</script>

<style>

</style>