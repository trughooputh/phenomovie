<template>
  <div class="MovieCard">
    <div class="MovieCard__Poster card-image">
      <figure class="image is-centered">
        <transition name="fade">
          <img
            v-if="HasImage"
            :src="CurrentItemDetails.Poster"
            key="main"
            :alt="`${CurrentItemDetails.Title} poster`"
          >
        </transition>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCard',
  computed: {
    HasImage () {
      return this.CurrentItemDetails.Poster && this.CurrentItemDetails.Poster !== 'N/A'
    },
    CurrentItemDetails () {
      return this.$store.state.currentMovie || null
    }
  }
}
</script>

<style lang="scss" scoped>
$height-poster: 300px;

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

.MovieCard {
  overflow: hidden;
  position: relative;
  &:hover {
    .MovieCard__Details {
      bottom: 0;
    }
  }
  &__Poster {
    transition: opacity 0.3s cubic-bezier(0.7, 0, 0.3, 1);
    img {
      max-height: $height-poster;
      width: auto;
      margin: 0 auto;
    }
  }
  &__Overview {
    height: 38px;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    margin: 0;
  }
  &__Details {
    position: absolute;
    bottom: -60px;
    transition: bottom 0.3s cubic-bezier(0.7, 0, 0.3, 1);
    width: 100%;
  }
}
</style>
