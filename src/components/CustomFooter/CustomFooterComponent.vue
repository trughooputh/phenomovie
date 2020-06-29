<template>
  <footer class="customFooter columns is-centered">
    <Logo
      class="mt-2"
    />
  </footer>
</template>

<script>
import Logo from '@/components/Logo/LogoComponent.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
.customFooter {
  padding: 20px 10px;
}

</style>
