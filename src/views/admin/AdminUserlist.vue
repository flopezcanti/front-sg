<template>
  <div class="home">
    <HeaderAdmin/>
    <BodyAdminUserList/>
    <GeneralFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderAdmin from '@/components/admin/HeaderAdmin.vue'
import GeneralFooter from '@/components/general/Footer.vue'
import BodyAdminUserList from '../../components/admin/BodyAdminUserList'

export default {
  name: 'AdminUserlistado',
  components: {
    HeaderAdmin,
    GeneralFooter,
    BodyAdminUserList
  }
}


</script>

<style>

</style>