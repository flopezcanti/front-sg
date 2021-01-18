<template>
  <div class="home">
    <HeaderAdmin/>
    <BodyAdminIndex/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import GeneralFooter from '@/components/general/Footer.vue'
import BodyAdminIndex from '../../components/admin/BodyAdminIndex'

export default {
  name: 'AdminIndex',
  components: {
    HeaderAdmin,
    GeneralFooter,
    BodyAdminIndex
  }
}


</script>

<style>

</style>