<template>
  <div class="home">
    <HeaderProductor/>
    <ProductsAdmin/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'
import ProductsAdmin from '../../../components/productor/admin/ProductsAdmin'

export default {
  name: 'ProductsAdminPro',
  components: {
    HeaderProductor,
    GeneralFooter,
    ProductsAdmin
  }
}


</script>

<style>

</style>