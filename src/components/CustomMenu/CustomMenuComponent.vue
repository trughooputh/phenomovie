<template>
  <nav class="customMenu hero is-light navbar">
    <div class="container">
      <div class="navbar-brand">
        <Logo
          class="mr-4 mt-2"
        />
        <span class="navbar-burger burger" data-target="navbarMenu">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </div>
      <div id="navbarMenu" class="navbar-menu">
        <div class="navbar-start">
          <div class="tabs">
            <ul>
              <li>
                <router-link
                  to="/"
                  class="navbar-item"
                >
                  Home
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="navbar-item"
                >
                  About
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-end">
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
