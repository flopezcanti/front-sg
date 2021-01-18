<template>
  <div class="cookies">
    <GeneralHeader/>
    <PrivacidadGeneral/>
    <GeneralFooter/>
  </div>
</template>
<script>
// @ is an alias to /src
import GeneralHeader from '@/components/general/Header.vue'
import GeneralFooter from '@/components/general/Footer.vue'
import PrivacidadGeneral from '@/components/general/PrivacidadGeneral.vue'

export default {
  name: 'PrivacidadG',
  components: {
    GeneralHeader,
    PrivacidadGeneral,
    GeneralFooter
  }
}
</script>
<style >
  .cookies{
    margin-top: 72px;
  }
</style>
