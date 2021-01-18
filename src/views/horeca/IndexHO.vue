<template>
  <div>
    <HeaderHoreca/>
    <IndexBODYHORECA/>
    <GeneralFooter/>
  </div>
</template>

<script>
import HeaderHoreca from '@/components/horeca/HeaderHoreca'
import GeneralFooter from '@/components/general/Footer.vue'
import IndexBODYHORECA from '../../components/horeca/IndexHO'

export default {
  name: 'IndexHORECA',
  components: {
    HeaderHoreca,
    GeneralFooter,
    IndexBODYHORECA
  }
}
</script>

<style>

</style>