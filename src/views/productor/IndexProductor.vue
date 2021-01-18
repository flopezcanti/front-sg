<template>
  <div>
    <HeaderProductor/>
    <IndexProd/>
    <GeneralFooter/>
  </div>
</template>

<script>
import HeaderProductor from '@/components/productor/HeaderProductor'
import GeneralFooter from '@/components/general/Footer.vue'
import IndexProd from '../../components/productor/IndexProd'

export default {
  name: 'IndexProductor',
  components: {
    HeaderProductor,
    GeneralFooter,
    IndexProd
  }
}
</script>

<style>

</style>