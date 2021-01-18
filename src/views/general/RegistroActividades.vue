<template>
  <div class="cookies">
    <GeneralHeader/>
    <RegistroActividades/>
    <GeneralFooter/>
  </div>
</template>
<script>
// @ is an alias to /src
import RegistroActividades from '@/components/general/RegistroActividades.vue'
import GeneralHeader from '@/components/general/Header.vue';
import GeneralFooter from '@/components/general/Footer.vue';

export default {
  name: 'Registro_Actividades',
  components: {
    GeneralHeader,
    GeneralFooter,
    RegistroActividades
  }
}
</script>
<style >
  .cookies{
    margin-top: 72px;
  }
</style>
