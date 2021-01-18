
<template>
  <div class="home">
    <HeaderProductor/>
    <ProductorSecurity/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'
import ProductorSecurity from '../../../components/productor/admin/ProductorSecurity'

export default {
  name: 'SecAdmPro',
  components: {
    HeaderProductor,
    GeneralFooter,
    ProductorSecurity
  }
}


</script>

<style>

</style>