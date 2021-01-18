<template>
  <div class="home">
    <HeaderProductor/>
    <BodyAdminInPro/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'
import BodyAdminInPro from '../../../components/productor/admin/BodyAdmInProd'

export default {
  name: 'IndexAdmPro',
  components: {
    HeaderProductor,
    GeneralFooter,
    BodyAdminInPro
  }
}
</script>

<style>

</style>