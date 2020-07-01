<template>
  <nav class="customMenu hero is-light navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link
          to="/"
          class="navbar-item"
        >
          <Logo />
        </router-link>
        <router-link
            to="/cart"
            class="navbar-item"
          >
            <span class="icon">
              <i class="fas fa-shopping-cart"></i>
            </span>
            <span>Cart ({{ moviesAdded.length }})</span>
          </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo/LogoComponent.vue'

export default {
  name: 'LogoComponent',
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
    },
    moviesAdded () {
      return this.$store.state.movies
    }
  }
}
</script>

<style lang="scss" scoped>
.customMenu {
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
