<template>
  <nav class="CustomMenu hero is-light navbar pt-3 px-5 pb-1">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"
        >
          <Logo />
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo/LogoComponent.vue'

export default {
  name: 'CustomMenu',
  components: {
    Logo
  },
  data () {
    return {
      showNav: false
    }
  },
  computed: {
    isHome () {
      // return this.$nuxt.$route.name === 'index'
      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.CustomMenu {
  padding: 20px 10px;
  a {
    font-weight: bold;
    color: #fff;
    &.router-link-exact-active {
      border-bottom: 1px solid #152996;
    }
  }
}
</style>
