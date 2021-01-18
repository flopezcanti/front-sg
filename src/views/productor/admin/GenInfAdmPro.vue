<template>
  <div class="home">
    <HeaderProductor/>
    <GenInfPro/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'
import GenInfPro from '../../../components/productor/admin/GenInfPro'

export default {
  name: 'GenInfAdmPro',
  components: {
    HeaderProductor,
    GeneralFooter,
    GenInfPro
  }
}


</script>

<style>

</style>