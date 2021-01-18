<template>
  <div class="cookies">
    <GeneralHeader/>
    <Cookies/>
    <GeneralFooter/>
  </div>
</template>

<script>
import Cookies from '@/components/general/Cookies.vue'
import GeneralHeader from '@/components/general/Header.vue'
import GeneralFooter from '@/components/general/Footer.vue'

export default {
  name: 'CookiesAdvise',
  components: {
    Cookies,
    GeneralHeader,
    GeneralFooter
  }
}
</script>
<style >
  .cookies{
    margin-top: 72px;
  }
</style>
