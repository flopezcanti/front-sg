<template>
  <div class="home">
    <GeneralHeader/>
    <GeneralSlider/>
    <GeneralHome/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralHeader from '@/components/general/Header.vue'
import GeneralSlider from '@/components/general/GeneralSlider.vue'
import GeneralHome from '@/components/general/GeneralHome.vue'
import GeneralFooter from '@/components/general/Footer.vue'

export default {
  name: 'Home',
  components: {
    GeneralHeader,
    GeneralSlider,
    GeneralHome, 
    GeneralFooter
  }
}
</script>
