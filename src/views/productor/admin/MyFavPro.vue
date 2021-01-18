<template>
  <div class="home">
    <HeaderProductor/>
    <ProductorMyFavs/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'
import ProductorMyFavs from '../../../components/productor/admin/MyFavs'

export default {
  name: 'MyFavPro',
  components: {
    HeaderProductor,
    GeneralFooter,
    ProductorMyFavs
  }
}


</script>

<style>

</style>