<template>
  <div class="login">
    <Login/>
  </div>
</template>
<script>
// @ is an alias to /src
import Login from '@/components/general/Login.vue'

export default {
  name: 'log',
  components: {
    Login
  }
}
</script>